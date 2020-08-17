import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers';
import history from '../utils/history';

export { history };

const configureStore = (initialState = {}) => {
    return createStore(
        createRootReducer(history), // root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
            )
        )
    );
};

export default configureStore;
