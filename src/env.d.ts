/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/server" />

interface ImportMetaEnv {
  readonly PORTAL_URL: string;
  readonly PORTAL_API_KEY: string;
  readonly SCHOOL_RANDOM_ID: string;
  readonly ENROLL_WEBHOOK_URL: string;
  readonly CONTACT_US_WEBHOOK_URL: string;
  readonly DISCOVERY_SESSION_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}