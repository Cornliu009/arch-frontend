import BaseService from '@/services/BaseService';
import jwtDecode from 'jwt-decode';
import { AxiosPromise } from 'axios';
import { UserRegisterInterface } from '@/store/modules/profile/types';

const appHost = `${ process.env.VUE_APP_APP_HOST }`;

export interface TokenDataInterface {
    exp: number;
    iat: number;
    email: string;
    userId: string;
}

class AuthService extends BaseService {
    tokenDecode(token: string): TokenDataInterface {
        return jwtDecode(token);
    }

    setToken(token: string): void {
        const tokenData = this.tokenDecode(token);
        const expireDate = new Date();
        expireDate.setTime(tokenData.exp * 1e3);

        document.cookie = `access_token=${ token }; expires=${ expireDate.toUTCString() };domain=${ appHost }; path=/;`;
    }

    isTokenExists(): boolean {
        return this.getToken() !== null;
    }

    getToken(): string | null {
        const matches = document.cookie.match(/access_token=([^;]+)/);

        if (!matches || !matches[1]) {
            return null;
        }

        return matches[1];
    }

    getTokenData(): TokenDataInterface | null {
        return this.isTokenExists()
            ? this.tokenDecode(this.getToken() as string)
            : null;
    }

    login(email: string, password: string): AxiosPromise {
        const data = { email, password };
        return this.http.post('user/login', data);
    }

    register(user: UserRegisterInterface): AxiosPromise {
        return this.http.post('user', user);
    }

    logout(redirect = true): void {
        const expired = new Date();
        expired.setTime(0);
        document.cookie = `access_token=; expires=${ expired.toUTCString() }; domain=${ appHost }; path=/;`;

        if (redirect) {
            window.location.replace('/login');
        }
    }
}

export default new AuthService();
