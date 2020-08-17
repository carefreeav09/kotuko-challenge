import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import repositoriesReducer from '../app/home/duck/reducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    repositories : repositoriesReducer
});

export default createRootReducer;