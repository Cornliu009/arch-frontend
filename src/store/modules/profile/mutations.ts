import { MutationTree } from 'vuex';
import { ProfileState, User, UserInterface } from './types';

export const mutations: MutationTree<ProfileState> = {
    setUser(state, payload: User) {
        console.log('test', payload);
        state.user = payload;
    },
    unsetUser(state) {
        state.user = undefined;
    },
    updateUser(state, payload) {
        const user: UserInterface = { ...state.user, ...payload };

        state.user = new User(user);
    },
};
