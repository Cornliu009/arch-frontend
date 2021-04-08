import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import globalBeforeEach from '@/router/middlewares/global-before-each-hook';
import { axiosInstance } from '@/plugins/axios';
import intercepterSetup from '@/helpers/intercepter';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import i18n from '@/i18n';

import './plugins/vee-validate';

import '@/assets/scss/app.scss';
import LayoutDefault from '@/layouts/LayoutDefault.vue';

intercepterSetup();

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('layout-default', LayoutDefault);

Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false;

router.beforeEach(globalBeforeEach);

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
