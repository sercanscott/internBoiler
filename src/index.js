import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import rootSaga from './sagas';
import AppContainer from './containers/AppContainer';
import './styles/index.scss';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (composeWithDevTools && composeWithDevTools({
  // actionsBlacklist: [
  //   'AN_ACTION_YOU_DONT_WANT_TO_TRACK',
  // ],
  shouldCatchErrors: true,
})) || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
