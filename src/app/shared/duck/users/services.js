import {
    usersFetchRequest,
    usersFetchRequestSuccess,
    usersFetchRequestFailure
} from "./actions";

import { fetch} from "../../../../utils/httpUtil";

export const fetchUsersInfo = (name) => {
    return (dispatch) => {
        dispatch(usersFetchRequest());
        return fetch(`users/${name}`)
            .then((response) => {
                    dispatch(usersFetchRequestSuccess(response.data));
            })
            .catch((error) => dispatch(usersFetchRequestFailure(error.response.data)));
    };
};
