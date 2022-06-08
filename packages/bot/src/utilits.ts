const getWallet = (type: string) => {
  switch (type) {
    case 'qiwi':
      return 'Qiwi';
    case 'yoomoney':
      return 'ЮMoney';
    default:
      return 'wallet';
  }
};

export { getWallet };
