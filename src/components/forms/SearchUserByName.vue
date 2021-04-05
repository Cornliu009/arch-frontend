<template>
    <div>
        <b-row>
            <b-col
                cols="12"
                md="6"
            >
                <b-form
                    @submit.prevent="searchUseByEmail"
                >
                    <b-input-group class="mt-3">
                        <b-form-input
                            v-model="name"
                            required
                        />
                        <b-input-group-append>
                            <b-button
                                variant="outline-success"
                                type="submit"
                                :disabled="loading"
                            >
                                {{ $t('buttons.search') }}
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
            </b-col>
        </b-row>

        <b-row
            class="mt-5"
            v-if="searchUsers"
        >
            <b-col
                cols="12"
                md="6"
            >
                <h4>
                    Your data
                </h4>

                <div
                    class="my-4"
                    v-for="user in searchUsers"
                    :key="user.name"
                >
                    <p>
                        Name: {{ user.name }}
                    </p>
                    <p>
                        Email: {{ user.email }}
                    </p>
                    <p>
                        Role: {{ user.roles[0] }}
                    </p>
                </div>

                <b-button
                    variant="primary"
                    @click="searchUsers = null"
                >
                    Clear search
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { SHOW_ERROR, SHOW_TOAST_NOTIFICATION } from '@/store/modules/notifications/action-types';
    import { mapActions } from 'vuex';
    import UserService from '@/services/UserService';

    export default Vue.extend({
        name: 'SearchUserByName',
        data() {
            return {
                name: '',
                loading: false,
                searchUsers: null,
            };
        },
        methods: {
            ...mapActions('notifications', [
                SHOW_ERROR,
                SHOW_TOAST_NOTIFICATION,
            ]),
            async searchUseByEmail() {
                this.loading = true;

                try {
                    const { data } = await UserService.searchByName(this.name);
                    this.searchUsers = data.payload;
                } catch (e) {
                    if (404 === e.status) {
                        this[SHOW_TOAST_NOTIFICATION]({
                            title: '',
                            variant: 'info',
                            autoHideDelay: 5000,
                            message: e.errorMessage,
                        });

                        return;
                    }

                    if (e.isError) {
                        this[SHOW_ERROR]({ message: e.errorMessage });

                        return;
                    }

                    throw e;
                } finally {
                    this.loading = false;
                }
            },
        },
    });
</script>
