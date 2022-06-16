import React from 'react';
import { useBotContext, useAnyEvent, ButtonGroup, Button } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onExit: () => void;
}

const SUPPORT_CHAT_ID = 258000010;

const Feedback = ({ onExit }: Props) => {
  const {
    chat: { id, username },
  } = useBotContext();
  const { bot } = useBotContext<UrbanBotTelegram>();
  const { t } = useTranslation(['buttons', 'feedback']);

  useAnyEvent(async (event) => {
    switch (event.type) {
      case 'text': {
        if (event.text === t('back')) {
          onExit();
          break;
        }
        const message = `id: ${id}\n@${username}\nТекст:\n${event.text}`;
        await bot.client.sendMessage(SUPPORT_CHAT_ID, message);
        break;
      }

      case 'image': {
        const message = `id: ${id}\n@${username}\nТекст:\n${event.nativeEvent?.payload?.caption}`;
        await bot.client.sendMessage(SUPPORT_CHAT_ID, message);
        await bot.client.sendPhoto(SUPPORT_CHAT_ID, event.files.pop().id);
        break;
      }

      case 'video': {
        const message = `id: ${id}\n@${username}\nТекст:\n${event.nativeEvent?.payload?.caption}`;
        await bot.client.sendMessage(SUPPORT_CHAT_ID, message);
        await bot.client.sendVideo(SUPPORT_CHAT_ID, event.files.pop().id);
        break;
      }

      default: {
        const message = `@${username} прислал чет невменяемое, не могу обработать - напиши этому додику`;
        await bot.client.sendMessage(SUPPORT_CHAT_ID, message);
        break;
      }
    }
  });

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard title={t('feedback:message')} isNewMessageEveryRender={false}>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Feedback };
