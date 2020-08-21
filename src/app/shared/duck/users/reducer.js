import {
    USERS_FETCH_REQUEST,
    USERS_FETCH_REQUEST_SUCCESS,
    USERS_FETCH_REQUEST_FAILURE,
    USERS_CLEAN_REQUEST,
} from './types';

const INITIAL_STATE = {
    payload: null,
    loading: false,
    errors: {},
    pagination : {}
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const repositoriesReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case USERS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case USERS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case USERS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case USERS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                loading: false,
                payload:null,
                errors: {},
                pagination : {}
            });

        default:
            return state;
    }
};

export default repositoriesReducer;
