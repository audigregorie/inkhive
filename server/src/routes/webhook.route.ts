import bodyParser from 'body-parser';
import { Router } from 'express';
import { clerkWebhook } from '../controllers/webhook.controller';

export const webhookRouter: Router = Router();
webhookRouter.post('/clerk', bodyParser.raw({ type: 'application/json' }), clerkWebhook);
