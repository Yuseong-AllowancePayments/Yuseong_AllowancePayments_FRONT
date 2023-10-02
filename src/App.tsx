import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/GlobalStyle";
// import { HashRouter as Router } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
