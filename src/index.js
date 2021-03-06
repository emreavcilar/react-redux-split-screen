// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    applyMiddleware
} from "redux";
import reducer from './reducers';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './assets/css/main.css';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


window.onload = () => {
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    let store = createStore(reducer,typeof window!=="undefined" && window.initialStoreData ? window.initialStoreData : {}, applyMiddleware(...middleware));

    //hyrate on ssr
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
    serviceWorker.unregister();
};