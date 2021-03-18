import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { INotificationState } from './types';
import { RootState } from '../../types';

export const state: INotificationState = {
    notifications: [],
};

const namespaced = true;

export const notifications: Module<INotificationState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
