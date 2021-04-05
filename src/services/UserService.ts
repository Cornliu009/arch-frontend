import BaseService from '@/services/BaseService';
import { AxiosPromise } from 'axios';

class UserService extends BaseService {
    constructor(uri: string) {
        super(uri);
    }

    public getAll(): AxiosPromise {
        return this.http.get(this.uri);
    }

    public getById(id: string): AxiosPromise {
        return this.http.get(`${ this.uri }/${ id }`);
    }

    public searchByEmail(email: string): AxiosPromise {
        return this.http.post(`${ this.uri }/search/email`, {
            email,
        });
    }
}

export default new UserService('user');
