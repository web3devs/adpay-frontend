import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';

import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';

export default function App() {
  const [ authenticated, setAuth ] = useGlobal('authenticated');
  console.log('AUTHENTICATED', authenticated);
  return (
    <div>
      <Header />
      { authenticated ?
          <Dashboard />
        :
          <Home />
      }
    </div>
  );
}
