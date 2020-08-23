import {
    REPOSITORIES_FETCH_REQUEST,
    REPOSITORIES_FETCH_REQUEST_SUCCESS,
    REPOSITORIES_FETCH_REQUEST_FAILURE,
    REPOSITORIES_CLEAN_REQUEST, SINGLE_REPOSITORIES_FETCH_REQUEST_SUCCESS
} from "./types";

export const repositoriesFetchRequest = () => {
    return {
        type: REPOSITORIES_FETCH_REQUEST
    }
};

export const repositoriesFetchRequestSuccess = (data) => {
    return {
        type: REPOSITORIES_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const singleRepositoryFetchRequestSuccess = (data) => {
    return {
        type: SINGLE_REPOSITORIES_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const repositoriesFetchRequestFailure = (error) => {
    return {
        type: REPOSITORIES_FETCH_REQUEST_FAILURE,
        error
    }
};

export const repositoriesClearRequest = () => {
    return {
        type: REPOSITORIES_CLEAN_REQUEST
    }
};