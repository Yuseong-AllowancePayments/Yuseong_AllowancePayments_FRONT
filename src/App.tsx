import { QueryClient, QueryClientProvider } from "react-query";
import MainRouter from "./router/MainRouter";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
