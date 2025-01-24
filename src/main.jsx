import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


// router provider
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';

// tanstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
