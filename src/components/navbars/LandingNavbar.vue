<template>
    <header class="header">
        <b-navbar
            type="dark"
            variant="dark"
        >
            <b-container>
                <b-navbar-brand
                    :exact="true"
                    :to="{ name: 'Index' }"
                >
                    {{ siteName }}
                </b-navbar-brand>

                <template v-if="!isAuthenticated">
                    <b-navbar-nav
                        class="ml-auto"
                    >
                        <b-nav-item
                            :to="{ name: 'Login' }"
                            exact
                            active-class="active"
                        >
                            {{ $t('header.login') }}
                        </b-nav-item>
                        <b-nav-item
                            :to="{ name: 'Register' }"
                            exact
                            active-class="active"
                        >
                            {{ $t('header.register') }}
                        </b-nav-item>
                    </b-navbar-nav>
                </template>

                <b-collapse
                    id="nav-collapse"
                    class="flex-grow-0"
                    is-nav
                    v-else
                >
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <template #button-content>
                                {{ user.name }}
                            </template>

                            <b-dropdown-item @click="logout">
                                {{ $t('buttons.logout') }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import AuthService from '@/services/AuthService';

    export default Vue.extend({
        name: 'LandingNavbar',
        data: () => ({
            siteName: process.env.VUE_APP_PROJECT_NAME,
        }),
        computed: mapGetters('profile', [
            'isAuthenticated',
            'user',
        ]),
        methods: {
            logout() {
                AuthService.logout();
            },
        },
    });
</script>
