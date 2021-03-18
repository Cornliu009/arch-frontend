import { NavigationGuardNext, Route } from 'vue-router';
import AuthService from '@/services/AuthService';
import store from '../../store';
import { GET_USER } from '@/store/modules/profile/actions-types';
import { UNSET_USER } from '@/store/modules/profile/mutations-types';

export default async function (to: Route, from: Route, next: NavigationGuardNext): Promise<any> {
    const isAuthenticated = store.getters['profile/isAuthenticated'];

    if (
        !isAuthenticated
        && AuthService.isTokenExists()
    ) {
        await store.dispatch(`profile/${ GET_USER }`);
        next();
    } else if (
        isAuthenticated
        && !AuthService.isTokenExists()
    ) {
        store.commit(`profile/${ UNSET_USER }`);
        next('/login');
    } else {
        next();
    }
}
