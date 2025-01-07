import { AuthObject } from '@clerk/types';
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      auth: AuthObject;
    }
  }
}

export type WebhookEvent = {
  type: string;
  data: {
    id: string;
    username?: string;
    email_addresses: { email_address: string }[];
    profile_img_url?: string;
  };
};
