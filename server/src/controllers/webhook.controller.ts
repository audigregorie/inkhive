import { Request, Response } from 'express';
import { Webhook } from 'svix';
import { User } from '../models/user.model';
import { WebhookEvent } from '../utils/common';

export const clerkWebhook = async (req: Request, res: Response) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) throw new Error('Error: Clerk webhook secret not found!');

  const wh = new Webhook(WEBHOOK_SECRET);
  const payload = req.body;
  const headers = req.headers;

  // Get Svix headers for verification
  const svix_id = headers['svix-id'];
  const svix_timestamp = headers['svix-timestamp'];
  const svix_signature = headers['svix-signature'];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return void res.status(400).json({
      success: false,
      message: 'Error: Missing svix headers'
    });
  }

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id as string,
      'svix-timestamp': svix_timestamp as string,
      'svix-signature': svix_signature as string
    }) as WebhookEvent;
  } catch (err: any) {
    console.log('Error: Could not verify webhook:', err.message);
    return void res.status(400).json({
      success: false,
      message: err.message
    });
  }

  console.log(evt.data);

  // if (evt.type === 'user.created') {
  //   const newUser = new User({
  //     clerkUserId: evt.data.id,
  //     username: evt.data.username || evt.data.email_addresses[0].email_address,
  //     email: evt.data.email_addresses[0].email_address,
  //     img: evt.data.profile_img_url
  //   });

  //   await newUser.save();
  //   console.log('New user saved:', newUser);
  // }

  // if (evt.type === 'user.deleted') {
  //   const deletedUser = await User.findOneAndDelete({ clerkUserId: evt.data.id });
  //   deletedUser ? console.log('Deleted user:', deletedUser) : console.warn(`No user found with clerkUserId: ${evt.data.id}`);
  // }

  res.status(200).json({ message: 'Webhook received' });
};
