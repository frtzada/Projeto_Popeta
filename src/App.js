import React from 'react';
import './styles/main.css'; // Importando o CSS principal
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from './routes';

const stripePromise = process.env.REACT_APP_STRIPE_PUBLIC_KEY 
  ? loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  : null;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

const AppContent = () => {
  return (
    <>
      <ThemeToggle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <AuthProvider>
            {stripePromise ? (
              <Elements stripe={stripePromise}>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </Elements>
            ) : (
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            )}
          </AuthProvider>
        </RouterProvider>
      </QueryClientProvider>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
