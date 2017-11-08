import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from 'modules/reducers';
import { initializeUserData } from 'modules/users';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const StoreInstance = createStoreWithMiddleware(
    reducers,
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

StoreInstance.dispatch(initializeUserData());

ReactDOM.render(
    /* eslint-disable react/jsx-filename-extension */
    <Provider store={StoreInstance}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
