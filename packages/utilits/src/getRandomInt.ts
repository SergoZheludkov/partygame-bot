type GetHash = (min: number, max: number) => number;

export const getRandomInt: GetHash = (min, max) => Math.round(Math.random() * (max - min) + min);
