import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { loadProgressBar } from "axios-progress-bar";
import { GLobalStyles } from "./styles";
import { AppProvider } from "./components";
import { http } from "./services";
import Routes from "./router";
import "nprogress/nprogress.css";
import "./styles/utilities/less/App.less";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  // load progress bar on every http request by custom axios instance
  loadProgressBar({}, http);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <AppProvider>
        <GLobalStyles />
        <Routes />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
