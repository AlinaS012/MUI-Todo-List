import ReactDOM from 'react-dom/client';
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme.js';
import './index.css'
import { TodoListContextProvider } from './context/TodoListContext';
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <TodoListContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </TodoListContextProvider>
  // </React.StrictMode>,
);