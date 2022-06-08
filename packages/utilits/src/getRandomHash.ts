const characters = 'ABCDEFGHJKLMNPQRSTWXYZabcdefghkmnpqrstwxyz123456789';

type GetHash = (length: number) => string;

export const getRandomHash: GetHash = (length) => {
  if (!length) return '';
  const symbolNumber = Math.floor(Math.random() * characters.length);
  const result = characters.charAt(symbolNumber);
  return `${result}${getRandomHash(length - 1)}`;
};
