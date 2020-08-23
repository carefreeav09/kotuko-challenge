import {
    repositoriesFetchRequest,
    repositoriesFetchRequestSuccess,
    repositoriesFetchRequestFailure,
    singleRepositoryFetchRequestSuccess
} from "./actions";

import { fetch} from "../../../utils/httpUtil";

export const fetchRepositories = (query) => {
    return (dispatch) => {
        dispatch(repositoriesFetchRequest());
        return fetch(`search/repositories?q=${query}`)
            .then((response) => {
                    dispatch(repositoriesFetchRequestSuccess(response.data));
            })
            .catch((error) => dispatch(repositoriesFetchRequestFailure(error.response.data)));
    };
};

export const fetchRepositoryDetails = (query) => {
    return (dispatch) => {
        dispatch(repositoriesFetchRequest());
        return fetch(`repos/${query}`)
            .then((response) => {
                dispatch(singleRepositoryFetchRequestSuccess(response.data));
            })
            .catch((error) => dispatch(repositoriesFetchRequestFailure(error.response.data)));
    };
};