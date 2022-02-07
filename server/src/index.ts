import express from 'express';
import mongoose from 'mongoose';

import router from './router';

import { config } from 'dotenv';
config();

const app: express.Application = express();

app.use(express.json());
app.use('/api', router);

const start = async (): Promise<void> => {
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(process.env.PORT, () => console.log(`SERVER STARTED ON PORT: ${process.env.PORT}`));
};

start();