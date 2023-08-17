import MainRouter from './router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <MainRouter />
    </QueryClientProvider>
  );
}
