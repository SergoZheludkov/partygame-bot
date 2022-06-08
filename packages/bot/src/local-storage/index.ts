import { LocalStorage } from 'node-localstorage';
import { UrbanChat } from '@urban-bot/core';

export const localStorage = new LocalStorage('./storage');

export const CHAT_MAP_KEY = 'CHAT_MAP_KEY';

export function getChatsMap(): Record<string, UrbanChat> {
  const chatsRaw = localStorage.getItem(CHAT_MAP_KEY);

  if (!chatsRaw) {
    return {};
  }

  return JSON.parse(chatsRaw) ?? {};
}

export function getChats() {
  const chatsMap = getChatsMap();

  return Object.values(chatsMap);
}

export function saveChat(chat: UrbanChat) {
  const chatsMap = getChatsMap();

  const newChatsMap = {
    ...chatsMap,
    [String(chat.id)]: chat,
  };

  localStorage.setItem(CHAT_MAP_KEY, JSON.stringify(newChatsMap));
}
