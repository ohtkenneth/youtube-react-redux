import '../node_modules/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

// import { selectVideo } from './reducers';
import rootReducer from './reducers';
import { selectVideoFromList, fetchVideos } from './actions';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
  ),
);

store
  .dispatch(fetchVideos('reactjs'))
  .then(() => console.log(store.getState()));

render (
  <Provider store={store}>
    <App dispatch={store.dispatch}/>
  </Provider>,
  document.getElementById('root')
);
