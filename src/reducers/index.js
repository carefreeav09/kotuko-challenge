import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import repositoriesReducer from '../app/home/duck/reducer';
import usersReducer from '../app/shared/duck/users/reducer';
import markdownReducer from '../app/shared/duck/markdown/reducer'

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    repositories : repositoriesReducer,
    users : usersReducer,
    markdown : markdownReducer,
});

export default createRootReducer;