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
import AuthProvider from './Providers/AuthProvider';
// toaster
import { Toaster } from 'react-hot-toast';

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#BEBEBE',
              fontFamily: ["Raleway", "serif"]
            },
            success: {
              icon: '✔',
            },
            error: {
              icon: '✖',
            },
          }}
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
