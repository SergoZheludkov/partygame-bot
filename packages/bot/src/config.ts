import dotenv from 'dotenv';

dotenv.config();

export const isDevelopment = process.env.NODE_ENV === 'development';
export const API = process.env.API as string;
export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN as string;
export const { BOT_ACCESS_API_TOKEN, PORT } = process.env;
