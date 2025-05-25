import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Layout from "@/components/Layout/indetx";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />;
            </Layout>
          </ThemeProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
