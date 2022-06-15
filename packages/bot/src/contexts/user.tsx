import React, { createContext, useContext } from 'react';
import {
  useUserQuery,
  useUpdateUserMutation,
  UserBaseFragment,
  ExecutionResult,
  UpdateUserMutation,
} from '@common_ubot/api-client';

import { useBotContext } from '@urban-bot/core';

interface User {
  user: UserBaseFragment;
  refetch: () => void;

  setLanguage: (lang: string) => void;
  setReminderTime: (time: number) => Promise<ExecutionResult<UpdateUserMutation>>;
}

const UserContext = createContext({} as User);

type UserProviderProps = {
  children: React.ReactNode;
};

export const User = ({ children }: UserProviderProps) => {
  const { chat } = useBotContext();
  const { id } = chat;
  const variables = { id };
  const { data, refetch } = useUserQuery({ variables });
  const [updateOneUser] = useUpdateUserMutation();

  if (!data?.user) return null;
  const { user } = data;

  const setLanguage = (lang: string) => updateOneUser({ variables: { input: { id, update: { lang } } } });
  const setReminderTime = (reminder_time: number) =>
    updateOneUser({ variables: { input: { id, update: { reminder_time } } } });

  return (
    <UserContext.Provider value={{ user, refetch, setLanguage, setReminderTime }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
