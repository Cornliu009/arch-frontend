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
                :label="$t('labels.firstName')"
                rules="required"
                type="text"
                name="firstName"
                v-model="user.firstName"
                :placeholder="$t('placeholders.firstName')"
                size="md"
            />

            <b-text-field-validated
                :label="$t('labels.lastName')"
                rules="required"
                type="text"
                name="lastName"
                v-model="user.lastName"
                :placeholder="$t('placeholders.lastName')"
                size="md"
            />

            <b-text-field-validated
                :label="$t('labels.email')"
                rules="required|email"
                type="email"
                name="email"
                v-model="user.email"
                :placeholder="$t('placeholders.email')"
                size="md"
            />

            <b-text-field-validated
                :label="$t('labels.phone')"
                rules="required|min:11|max:12"
                type="tel"
                name="phone"
                v-model="user.phone"
                :placeholder="$t('placeholders.phone')"
                size="md"
            />

            <b-text-field-validated
                :label="$t('labels.countryName')"
                rules="required"
                type="text"
                name="countryName"
                v-model="user.countryName"
                :placeholder="$t('placeholders.countryName')"
                size="md"
            />

            <b-text-field-validated
                :label="$t('labels.password')"
                rules="required|min:6"
                type="password"
                name="password"
                v-model="user.password"
                :placeholder="$t('placeholders.password')"
                size="md"
            />

            <b-button
                type="submit"
                variant="primary"
                size="md"
                :disabled="loading || !valid"
            >
                {{ $t('buttons.register') }}
            </b-button>
        </b-form>
    </validation-observer>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { ValidationObserver } from 'vee-validate';
    import BTextFieldValidated from '@/components/inputs/BTextFieldValidated.vue';
    import AuthService from '@/services/AuthService';
    import { mapActions } from 'vuex';
    import { SHOW_ERROR, SHOW_SUCCESS } from '@/store/modules/notifications/action-types';
    import { UserRegisterInterface } from '@/store/modules/profile/types';

    export default Vue.extend({
        name: 'RegisterForm',
        components: {
            ValidationObserver,
            BTextFieldValidated,
        },
        data: () => ({
            loading: false,
            user: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phone: '',
                countryName: '',
            } as UserRegisterInterface,
        }),
        methods: {
            ...mapActions('notifications', [
                SHOW_ERROR,
                SHOW_SUCCESS,
            ]),
            async onSubmit() {
                this.loading = true;

                try {
                    await AuthService.register(this.user);

                    this[SHOW_SUCCESS]({ message: this.$t('notifications.successfully_register') });
                    await this.$router.replace({ name: 'Login' });
                } catch (error) {
                    if (error.isError) {
                        this[SHOW_ERROR]({ message: error.errorMessage });

                        return;
                    }

                    throw error;
                } finally {
                    this.loading = false;
                }
            },
            resetForm() {
                requestAnimationFrame(() => {
                    (this.$refs.observer as InstanceType<typeof ValidationObserver>).reset();
                });
            },
        },
    });
</script>
