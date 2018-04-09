import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middleware';

import App from './components/App';
require('../stylesheets/base/base.scss');

const store = createStore(
  reducer,
  middleware
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-redux-app')
);
