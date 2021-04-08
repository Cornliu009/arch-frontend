import { axiosInstance } from '@/plugins/axios';
import { AxiosInstance } from 'axios';

export default class BaseService {
    private readonly _uri: string;
    private readonly _http: AxiosInstance = axiosInstance;

    constructor(uri?: string) {
        this._uri = uri || '';
    }

    get uri(): string {
        return this._uri;
    }

    get http(): AxiosInstance {
        return this._http;
    }
}
