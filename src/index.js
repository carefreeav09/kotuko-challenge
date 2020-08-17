import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";

import App from './app/App';
import './assets/sass/App.sass';
import * as serviceWorker from './serviceWorker';
import configureStore, {history} from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Suspense
            fallback={
                <div className="loading-container">Error! Please refresh the page</div>
            }
        >
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router history={history}>
                        <App/>
                    </Router>
                </ConnectedRouter>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
