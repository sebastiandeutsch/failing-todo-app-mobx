import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'mobx-react';
import TodoStore from './TodoStore';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
