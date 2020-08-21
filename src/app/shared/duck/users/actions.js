import {
    USERS_FETCH_REQUEST,
    USERS_FETCH_REQUEST_SUCCESS,
    USERS_FETCH_REQUEST_FAILURE,
    USERS_CLEAN_REQUEST
} from "./types";

export const usersFetchRequest = () => {
    return {
        type: USERS_FETCH_REQUEST
    }
};

export const usersFetchRequestSuccess = (data) => {
    return {
        type: USERS_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const usersFetchRequestFailure = (error) => {
    return {
        type: USERS_FETCH_REQUEST_FAILURE,
        error
    }
};

export const usersClearRequest = () => {
    return {
        type: USERS_CLEAN_REQUEST
    }
};