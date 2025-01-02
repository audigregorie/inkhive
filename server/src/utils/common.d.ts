export type WebhookEvent = {
  type: string;
  data: {
    id: string;
    username?: string;
    email_addresses: { email_address: string }[];
    profile_img_url?: string;
  };
};
