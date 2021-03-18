import { GetterTree } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<ProfileState, RootState> = {
    isAuthenticated(state): boolean {
        return undefined !== state.user;
    },

    user(state): User | undefined {
        return state.user;
    },
};
