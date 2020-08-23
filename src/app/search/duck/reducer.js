import {
    REPOSITORIES_FETCH_REQUEST,
    REPOSITORIES_FETCH_REQUEST_SUCCESS,
    REPOSITORIES_FETCH_REQUEST_FAILURE,
    REPOSITORIES_CLEAN_REQUEST,
    SINGLE_REPOSITORIES_FETCH_REQUEST_SUCCESS
} from './types';

const INITIAL_STATE = {
    payload: null,
    singlePayload: null,
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
        case REPOSITORIES_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case REPOSITORIES_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
                pagination: action.data.total_count,
            });

        case SINGLE_REPOSITORIES_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                singlePayload: action.data,
                errors: {},
            });

        case REPOSITORIES_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case REPOSITORIES_CLEAN_REQUEST:
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
