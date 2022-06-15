const en = {
  common: {
    loading: 'Loading',
    balance: 'Balance:',
    greeting: 'Start message',
    notification: 'Server notification',
    main_menu: 'Main menu message',
    settings_menu: 'Settings menu message',
    update_message: "I'm update!" + "\n\nWhat's new?" + '\n-Paragraph 1"' + '\n-Paragraph 2' + '\n-Paragraph 3',
    default_notification_message: 'Default notification message',
  },
  lang: {
    ru: '🇷🇺 Русский',
    en: '🇺🇸 English',
    message: 'Выбери язык / Choose your language',
    success: '👌👍🤙',
    main: 'Выбран:',
  },
  buttons: {
    games: '🎉 Games',
    balance: '💵 Balance',
    referral: '💎 Affiliate',
    feedback: '📲 Support',
    settings: '⚙️ Settings',
    languages: '🌎 Languages',
    notifications: '🔈 Notifications',
    rules: '📚 Rules',
    invite: '🤝 Invite',
    input_money: '💸 Payment',
    output_money: '💰 Output profit',
    all_payments: '🧾 All Payments',
    qiwi: '🟠 QIWI',
    yoomoney: '🟣 ЮMoney',
    webmoney: '🔵 Webmoney',
    check_payment: '♻️ Check payment',
    wallets: '💳 Wallets',
    statistics: '📈 Statistics',
    back: '🔙 Back',
    exit: '🔚 Exit',
    confirm: '✔️ Confirm',
    great: '✅ Great!',
    saved: '✅ Сохранено',
    error: '⛔️ Ошибка',
    less: '➖',
    more: '➕',
    add_wallets: '➕ Add',
    management_wallets: '💱 Management',

    // ------Notifications Settings------
    notificationsOff: '🔇 Disable reminders',
    notificationsOn: '🔊 Enable reminders',
    off: 'Off',

    // Фильтрация кошельков
    enabled: '🟢',
    disabled: '🔴',
    all: 'All',

    // Кпопки статистики
    users: '👥 Users',
    payments: '🧾 Payments',

    // Кнопки периодов
    all_time: 'All time',
    month: 'Month',
    week: 'Week',
    yesterday: 'Yesterday',
    period: 'Period',
  },
  games_menu: {
    message: 'Choose a game',
  },
  admin_menu: {
    message: 'What do you want to do?',
    error: 'This menu is for administration only. Sorry, but you are not an admin!',
  },
  registration: {
    message: 'Choose language / Выберите язык',
    success: 'Registration successful',
  },
  referral: {
    title: '🙋‍♂️ Affiliate program',
    message: '🎁 Invite friends and get 10% of each balance top-up by a friend',
    balance: '💰 Your partner balance: ',
    notification: {
      registration_success: 'You have registered with your link by ',
      bonus: 'Now you will receive 10% from each of his balance replenishment',

      money_part1: 'Your account was replenished by ',
      money_part2: ' for replenishment by a referral ',
    },
  },
  invite: {
    title: 'Just send a friend the next message⤵️',
    message: 'Yo, hello!\nMessage with a referral link:',
    // bonus: 'При переходе по ссылке получишь +10% на первое пополнение баланса.',
  },
  input_money: {
    amount: 'Enter payment amount in USD ($)',
    wallet: 'Choose a convenient payment method',

    bill: 'Bill',
    transfer: 'Make a transfer for the amount:',
    wallet_number: 'Wallet: ',
    warning: 'Attention! Be sure to write in the comment to the payment:',
    else: 'Otherwise, I will not be able to verify your payment',
    or: 'or ',

    update_message: 'After payment, check the payment and the money will be credited if you did everything correctly',
    check_failed: 'Transfer not found.',
    write_to_support: 'If you think that an error has occurred - write to support.',
    next_check: 'The next verification attempt will be available in',
    sec: 'seconds',
    check_success: 'Payment accepted!',
    balance: 'Accrued ',

    amount_error: 'Incorrect. Enter by number',
    amount_not_integer: 'Please enter an integer',
    amount_should_be_positive: 'The number must be greater 0',
  },
  payments: {
    title: 'Payments',
    from: 'from',
    error: 'There was an error loading payments. Try again later...',
    empty: "You haven't made any payments yet",
  },
  feedback: {
    message:
      'At the moment, any sent message will be forwarded to support. You can describe the problem in text, send a photo or video (screen recording)',
  },
  wallets: {
    message: 'Wallets actions',

    type_message: 'Select the type of wallet to add',
    type_validation_error: 'Select the type of wallet to add wallet using the buttons',

    empty_wallets_list: 'No wallets added',

    meta: {
      message: 'Input data',
      format: 'number:token;',
      description: 'Данные одного кошелька должны быть с разделителем :\nРазные кошельки должны быть с разделителем ;',

      validation_error: "Don't screw up!",
    },

    add: {
      success: 'Successfully added and launched in rotation wallets in quantity',
      failed:
        'There was a problem adding wallets on the server. Probably the number or token has already been used. Check everything, if you are sure that everything is clear and if you are not a developer - write to him urgently about the problem',
    },

    management: {
      message: 'Wallets switcher',
    },
  },
  rules: {
    message: 'Rules' + '\n\n-Paragraph 1"' + '\n-Paragraph 2' + '\n-Paragraph 3',
  },
  statistics: {
    more_details: 'More details can be found on the bottom buttons',
    new_users: 'New users:',
    payments: 'Payments:',
    payments_is_empty: 'Payments is empty',
    total: 'Total:',
    amount: 'Amount:',
    choose_period: 'Enter the period in the format:',
    period_example: '\n220521-240521',

    periods: {
      daily: 'Daily statistics',
      yesterday: 'Yesterday statistics',
      weekly: 'Weekly statistics',
      monthly: 'Monthly statistics',
      all_time: 'Statistics by All time ',
      by_period: 'Statistics by period',
    },
  },
  notifications: {
    message: 'Setting the notification time',
    about: 'You can choose any time\nfrom 7:00 to 22:00',
  },

  hat: {
    settings: 'Game settings',
  },
};

export { en };
