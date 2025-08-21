import ErrorBoundary from "@/components/ErrorBoundary";
import client from "@/graphql/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";


// import * as Sentry from "@sentry/nextjs";

// // Initialize Sentry at the top level
// Sentry.init({
//   dsn: "https://79acb62f42639735361922a48daf42a1@o4509881124126720.ingest.de.sentry.io/4509881131270224",
//   tracesSampleRate: 1.0,
//   debug: true,
// });



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </ErrorBoundary>
  );
}
