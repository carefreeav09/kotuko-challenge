import {
    repositoriesFetchRequest,
    repositoriesFetchRequestSuccess,
    repositoriesFetchRequestFailure
} from "./actions";

import { fetch} from "../../../utils/httpUtil";

export const fetchRepositories = (query) => {
    return (dispatch) => {
        dispatch(repositoriesFetchRequest());
        return fetch(`search/repositories?q=${query}`)
            .then((response) => {
                    dispatch(repositoriesFetchRequestSuccess(response.data.items));
            })
            .catch((error) => dispatch(repositoriesFetchRequestFailure(error.response.data)));
    };
};

export const fetchRepositoryDetails = (query) => {
    return (dispatch) => {
        dispatch(repositoriesFetchRequest());
        return fetch(`search/repositories?q=${query}`)
            .then((response) => {
                dispatch(repositoriesFetchRequestSuccess(response.data.items));
            })
            .catch((error) => dispatch(repositoriesFetchRequestFailure(error.response.data)));
    };
};