import BaseService from '@/services/BaseService';
import { AxiosPromise } from 'axios';

class UserService extends BaseService {
    constructor(uri: string) {
        super(uri);
    }

    public getById(id: string): AxiosPromise {
        return this.http.get(`${ this.uri }/${ id }`);
    }
}

export default new UserService('user');
