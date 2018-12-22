import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

setGlobal({
  authenticated: true,
  name: '',
  clientId: null,
});

ReactDOM.render(<App />, document.getElementById('root'));
