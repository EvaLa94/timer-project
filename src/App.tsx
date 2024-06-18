import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.css';

const App: FC = () => {
  return (
    <div>
      <h1>APP page</h1>
      <nav className="page-links">
        <Link to={'countdown'}>Countdown</Link>
        <Link to={'list'}>List</Link>
        <Link to={'new'}>Add new</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
