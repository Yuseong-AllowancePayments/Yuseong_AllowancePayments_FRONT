import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/GlobalStyle";
import { HashRouter as Router } from "react-router-dom";
import MainRouter from "./router/MainRouter";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <MainRouter />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
