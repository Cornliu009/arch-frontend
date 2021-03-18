import Vue from 'vue';
import { ActionTree } from 'vuex';
import { INotificationState, IToast } from './types';
import { RootState } from '../../types';

export const actions: ActionTree<INotificationState, RootState> = {
    showToastNotification(_, data) {
        const vm = new Vue();

        vm.$bvToast.toast(`${ data.message }`, {
            title: `${ data.title }`,
            autoHideDelay: data.autoHideDelay,
            variant: `${ data.variant }`,
        });
    },
    showSuccess({ dispatch }, data): void {
        const toastData: IToast = {
            title: data?.title || '',
            variant: 'success',
            autoHideDelay: 5000,
            message: data.message || data,
        };

        dispatch('showToastNotification', toastData);
    },
    showError({ dispatch }, data) {
        const toastData: IToast = {
            title: data?.title || '',
            variant: 'danger',
            autoHideDelay: 5000,
            message: data.message || data,
        };

        dispatch('showToastNotification', toastData);
    },
};
