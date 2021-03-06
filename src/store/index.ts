import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from '@/store/modules/profile';
import { notifications } from '@/store/modules/notifications';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
        profile,
        notifications,
    },
};

export default new Vuex.Store<RootState>(store);
