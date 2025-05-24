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

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />;
          </ThemeProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
