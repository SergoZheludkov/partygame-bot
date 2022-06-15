import { useState } from 'react';
import { SaveStatuses } from './types';
import { Hook } from '../../contexts';

const useNotificationsSettings = () => {
  const { user, setReminderTime } = Hook.useUser();
  const [time, setTime] = useState(user.reminder_time);
  const [status, setStatus] = useState<SaveStatuses>(SaveStatuses.NONE);

  const handleLess = () => setTime((value) => (value > 420 ? value - 30 : value));
  const handleMore = () => setTime((value) => (value < 1320 ? value + 30 : value));
  const handleSwitch = () => setTime((value) => (value === 0 ? 600 : 0));

  const handleSave = async () => {
    const confirm = await setReminderTime(time);

    const hasError = confirm?.errors?.length;
    if (hasError) {
      setStatus(SaveStatuses.FAILURE);
    }

    const savedId = confirm?.data?.updateOneUser?.id;
    if (savedId === user.id) {
      setStatus(SaveStatuses.SUCCESS);
    }
  };

  return {
    time,
    status,
    handleLess,
    handleMore,
    handleSwitch,
    handleSave,
  };
};

export { useNotificationsSettings };
