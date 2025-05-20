/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      env: {
        EMAIL_USER: string;
        EMAIL_PASSWORD: string;
      };
      email: {
        user: string;
        password: string;
      };
    }
    interface PageData {
      env?: {
        EMAIL_USER: string;
        EMAIL_PASSWORD: string;
      };
    }
    // interface Platform {}
  }

  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER: string;
      EMAIL_PASSWORD: string;
      PORT?: string;
      HOST?: string;
    }
  }
}

declare module '$env/dynamic/private' {
  export const env: {
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
    [key: string]: string;
  };
}

declare module '$env/static/private' {
  export const EMAIL_USER: string;
  export const EMAIL_PASSWORD: string;
}

export {};
