import express, { Application } from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import dotenv from 'dotenv';
import { routes } from './routes';
import { webhookRouter } from './routes/webhook.route';
import { clerkMiddleware } from '@clerk/express';

dotenv.config();
export const app: Application = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(clerkMiddleware());

// bodyParser.raw() must parse the data before express.json()
app.use('/webhooks', webhookRouter);

app.use(express.json());

app.use('/', routes);

app.use(errorHandler);
