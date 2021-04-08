<template>
    <layout-default>
        <b-row class="justify-content-center">
            <b-col
                cols="12"
                md="9"
            >
                <b-card>
                    <template #header>
                        <h6 class="mb-0 text-center">
                            {{ $t('titles.login') }}
                        </h6>
                    </template>
                    <b-card-text class="mt-4">
                        <login-form />
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </layout-default>
</template>

<script lang="ts">
    import Vue from 'vue';
    import LoginForm from '@/components/forms/LoginForm.vue';

    export default Vue.extend({
        name: 'Login',
        components: {
            LoginForm,
        },
    });
</script>
