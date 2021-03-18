import { ActionTree } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../../types';
import AuthService from '@/services/AuthService';
import UserService from '@/services/UserService';
import { SET_USER } from '@/store/modules/profile/mutations-types';

export const actions: ActionTree<ProfileState, RootState> = {
    async getUser({ commit }) {
        const tokenData = AuthService.getTokenData();

        if (!tokenData) {
            throw new Error('unauthorized');
        }

        const { data } = await UserService.getById(tokenData.userId);
        commit(SET_USER, new User(data.payload));
    },
};
