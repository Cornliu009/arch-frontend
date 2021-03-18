<template>
    <validation-observer
        ref="observer"
        v-slot="{ passes, valid }"
    >
        <b-form
            @submit.prevent="passes(onSubmit)"
            @reset="resetForm"
        >
            <b-text-field-validated
                :label="$t('labels.email')"
                rules="required|email"
                type="email"
                name="email"
                v-model="email"
                :placeholder="$t('placeholders.email')"
                size="md"
            />

            <b-text-field-validated
                :label="$t('labels.password')"
                rules="required"
                type="password"
                name="password"
                v-model="password"
                :placeholder="$t('placeholders.password')"
                size="md"
            />

            <b-button
                type="submit"
                variant="primary"
                size="md"
                :disabled="loading || !valid"
            >
                {{ $t('buttons.login') }}
            </b-button>
        </b-form>
    </validation-observer>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { ValidationObserver } from 'vee-validate';
    import BTextFieldValidated from '@/components/inputs/BTextFieldValidated.vue';
    import AuthService from '@/services/AuthService';
    import { mapActions, mapMutations } from 'vuex';
    import { SHOW_ERROR } from '@/store/modules/notifications/action-types';
    import { SET_USER } from '@/store/modules/profile/mutations-types';
    import { UserInterface, User } from '@/store/modules/profile/types';

    export default Vue.extend({
        name: 'LoginForm',
        components: {
            ValidationObserver,
            BTextFieldValidated,
        },
        data: () => ({
            loading: false,
            email: '',
            password: '',
        }),
        methods: {
            ...mapActions('notifications', [
                SHOW_ERROR,
            ]),
            ...mapMutations({
                [SET_USER]: `profile/${ SET_USER }`,
            }),
            async onSubmit() {
                this.loading = true;

                try {
                    const { data } = await AuthService.login(this.email, this.password);
                    AuthService.setToken(data.token);
                    this[SET_USER](new User(data.user as UserInterface));

                    await this.$router.replace({ name: 'Index' });
                } catch (error) {
                    if (error.isError) {
                        this.showError({ message: error.errorMessage });

                        return;
                    }

                    throw error;
                } finally {
                    this.loading = false;
                }
            },
            resetForm() {
                this.password = '';
                this.email = '';

                requestAnimationFrame(() => {
                    (this.$refs.observer as InstanceType<typeof ValidationObserver>).reset();
                });
            },
        },
    });
</script>
