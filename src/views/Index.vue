<template>
    <layout-default>
        <template v-if="isAuthenticated">
            <h3>
                {{ $t('messages.hello') }}, {{ user.name }}
            </h3>
            <h4>
                {{ $t('messages.have_a_nice_day') }}
            </h4>
            <keep-alive>
                <b-tabs
                    class="mt-5"
                    content-class="mt-3"
                >

                    <b-tab
                        v-if="user.isTeacher"
                        title="All users"
                        active
                    >
                        <b-button
                            class="mt-3"
                            variant="primary"
                            @click="getAllUsers"
                            :disabled="loading"
                        >
                            Get all users
                        </b-button>

                        <div
                            class="my-4"
                            v-for="user in users"
                            :key="user.name"
                        >
                            <b-card>
                                <p>
                                    Name: {{ user.name }}
                                </p>
                                <p>
                                    Email: {{ user.email }}
                                </p>
                                <p>
                                    Role: {{ user.roles[0] }}
                                </p>
                            </b-card>
                        </div>
                    </b-tab>
                    <b-tab title="Search by email">
                        <search-user-form />
                    </b-tab>
                    <b-tab title="Search by email">
                        <search-user-by-name />
                    </b-tab>
                </b-tabs>
            </keep-alive>
        </template>
        <h2 v-else>
            Hello guest
        </h2>
    </layout-default>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapActions, mapGetters } from 'vuex';
    import SearchUserForm from '@/components/forms/SearchUserForm.vue';
    import { SHOW_ERROR } from '@/store/modules/notifications/action-types';
    import UserService from '@/services/UserService';
    import SearchUserByName from '@/components/forms/SearchUserByName.vue';

    export default Vue.extend({
        name: 'Index',
        components: {
            SearchUserForm,
            SearchUserByName,
        },
        data() {
            return {
                users: [] as Array<Record<string, any>>,
                loading: false,
            };
        },
        computed: {
            ...mapGetters({
                isAuthenticated: 'profile/isAuthenticated',
                user: 'profile/user',
            }),
        },
        methods: {
            ...mapActions('notifications', [
                SHOW_ERROR,
            ]),
            async getAllUsers() {
                try {
                    const { data } = await UserService.getAll();

                    this.users = data.payload;
                } catch (e) {
                    if (e.isError) {
                        this[SHOW_ERROR]({ message: e.errorMessage });
                    }
                } finally {
                    this.loading = false;
                }
            },
        },
    });
</script>
