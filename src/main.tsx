import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
