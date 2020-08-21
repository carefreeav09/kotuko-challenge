import {
    MARKDOWN_FETCH_REQUEST,
    MARKDOWN_FETCH_REQUEST_SUCCESS,
    MARKDOWN_FETCH_REQUEST_FAILURE,
    MARKDOWN_CLEAN_REQUEST
} from "./types";

export const markdownFetchRequest = () => {
    return {
        type: MARKDOWN_FETCH_REQUEST
    }
};

export const markdownFetchRequestSuccess = (data) => {
    return {
        type: MARKDOWN_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const markdownFetchRequestFailure = (error) => {
    return {
        type: MARKDOWN_FETCH_REQUEST_FAILURE,
        error
    }
};

export const markdownClearRequest = () => {
    return {
        type: MARKDOWN_CLEAN_REQUEST
    }
};