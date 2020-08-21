import axios from 'axios';
import { push} from 'connected-react-router';

import {
    API_URL,
} from '../constants/appConfig';

import configureStore from "../store/configureStore";
const store = configureStore();

export const httpBase = () => {
    const headers = {
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    };

    const api = axios.create({
        baseURL: `${API_URL}`,
        headers: {...headers},
        responseType: 'json'
    });

    api.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if((401) === error.response.status){
            store.dispatch(push('/'))
        }
        if (404 === error.response.status) {
            // store.dispatch(http404Error());
            store.dispatch(push('/404'));
        }
        if (500 === error.response.status) {
            // store.dispatch(http500Error());
            store.dispatch(push('/500'));
        }
        return Promise.reject(error);
    });

    return api;
}
