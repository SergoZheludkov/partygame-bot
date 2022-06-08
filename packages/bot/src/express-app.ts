import express from 'express';

export const expressApp = express();

expressApp.use(express.json());
