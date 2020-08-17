import {httpBase} from "./httpBaseUtil";

export const fetch = (endPoint, params) => {
    return httpBase().get(`/${endPoint}`, {params})
};