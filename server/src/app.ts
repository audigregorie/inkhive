import express, { Application } from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();
export const app: Application = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use('/', routes);
app.use(errorHandler);
