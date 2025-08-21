import * as Sentry from "@sentry/nextjs";

console.log('🔧 Initializing Sentry...');

Sentry.init({
  dsn: "https://79acb62f42639735361922a48daf42a1@o4509881124126720.ingest.de.sentry.io/4509881131270224",
  tracesSampleRate: 1.0,
  debug: true, // Enable debug mode
  beforeSend(event) {
    console.log('📤 Sending event to Sentry:', event);
    return event;
  },
});

console.log('✅ Sentry initialized');