import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { TimerProvider } from './components/context/TimerContext.tsx';
import NotFound from './components/views/NotFound.tsx';
import ListTimers from './components/views/ListTimers.tsx';
import CreateNew from './components/features/create/CreateNew.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/list',
        element: <ListTimers />,
      },
      {
        path: '/new',
        element: <CreateNew />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TimerProvider>
      <RouterProvider router={router} />
    </TimerProvider>
  </React.StrictMode>
);
