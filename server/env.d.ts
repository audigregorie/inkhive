// env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: string;
    readonly CLIENT_URL: string;
    readonly MONGODBURI: string;
    readonly CLERK_WEBHOOK_SECRET: string;
    readonly CLERK_PUBLISHABLE_KEY: string;
    readonly CLERK_SECRET_KEY: string;
    readonly IMAGEKIT_URL_ENDPOINT: string;
    readonly IMAGEKIT_PUBLIC_KEY: string;
    readonly IMAGEKIT_PRIVATE_KEY: string;
  }
}
