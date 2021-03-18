import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosInstance } from '@/plugins/axios';
import AuthService from '../services/AuthService';
import KeyedError from '@/classes/KeyedError';

export default function setup() {
    axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
        if (AuthService.isTokenExists()) {
            config.headers.Authorization = `${ AuthService.getToken() }`;
        }

        return config;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response: AxiosResponse) => {
        return response;
    }, (error: AxiosError) => {
        if (undefined !== error.response) {
            const errorResponse = error.response;
            const keyedError = new KeyedError(errorResponse);

            if (
                keyedError.status === 401 &&
                keyedError.includesJwtError
            ) {
                AuthService.logout(false);
                window.location.replace('/');

                return Promise.reject(keyedError);
            }

            return Promise.reject(keyedError);
        }

        return Promise.reject(error);
    });
}
