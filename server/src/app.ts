import express, { Application } from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import dotenv from 'dotenv';
import { routes } from './routes';
import { webhookRouter } from './routes/webhook.route';

dotenv.config();
export const app: Application = express();
app.use(cors({ origin: process.env.CLIENT_URL }));

// bodyParser.raw() must parse the data before express.json()
app.use('/webhooks', webhookRouter);

app.use(express.json());
app.use('/', routes);

app.use(errorHandler);
