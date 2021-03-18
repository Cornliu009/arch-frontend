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
                            {{ $t('titles.register') }}
                        </h6>
                    </template>
                    <b-card-text class="mt-4">
                        <register-form />
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </layout-default>
</template>

<script lang="ts">
    import Vue from 'vue';
    import RegisterForm from '@/components/forms/RegisterForm.vue';

    export default Vue.extend({
        name: 'Register',
        components: {
            RegisterForm,
        },
    });
</script>
