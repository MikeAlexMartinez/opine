import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeEnhancers } from './composeEnhancer';

export default composeEnhancers(
  applyMiddleware(
    thunk,
  )
);
