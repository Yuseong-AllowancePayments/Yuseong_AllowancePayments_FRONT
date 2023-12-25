import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./style/GlobalStyle";
import MainRouter from "./router/MainRouter";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { Toaster } from "react-hot-toast";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                keepPreviousData: true,
                refetchOnWindowFocus: true,
                refetchOnMount: true,
                staleTime: 2000,
                retry: 1,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <HashRouter>
                    <MainRouter />
                </HashRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
