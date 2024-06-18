import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Countdown from './components/Countdown.tsx';
import { TimerProvider } from './components/context/TimerContext.tsx';
import CreateNew from './components/features/create/CreateNew.tsx';
import ListTimers from './components/views/ListTimers.tsx';
import NotFound from './components/views/NotFound.tsx';
import Interval from './types/Interval';
import Section from './types/Section';
import Timer from './types/Timer';

import './index.css';

const timer = new Timer('timer');
const section = new Section('section', 2);
const interval1 = new Interval('first', 1);
const interval2 = new Interval('second', 2);

section.addInterval(interval1);
section.addInterval(interval2);

timer.addSection(section);

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
        path: '/countdown',
        element: <Countdown timer={timer} />,
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
