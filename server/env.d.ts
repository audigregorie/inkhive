// env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: string;
    readonly CLIENT_URL: string;
    readonly MONGODBURI: string;
    readonly CLERK_WEBHOOK_SECRET: string;
  }
}
