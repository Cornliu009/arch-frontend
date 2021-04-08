<template>
    <validation-provider
        :vid="vid"
        :name="$attrs.name"
        :rules="rules"
        v-slot="{ valid, errors }"
        :mode="validationMode"
    >
        <b-form-group v-bind="$attrs">
            <b-form-select
                v-on="$listeners"
                v-bind="$attrs"
                :state="errors[0] ? false : (valid ? true : null)"
                v-model="innerValue"
                autocomplete="off"
            >
                <slot />
            </b-form-select>

            <b-form-invalid-feedback>
                {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
    </validation-provider>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import { ValidationProvider } from 'vee-validate';

    export default Vue.extend({
        name: 'BSelectValidated',
        components: {
            ValidationProvider,
        },
        props: {
            vid: {
                type: String,
            } as PropOptions<string>,

            rules: {
                type: [ Object, String ],
                default: '',
            } as PropOptions<string>,

            value: {
                type: [ String, Number, Array, null ],
            } as PropOptions<string | number | null>,

            validationMode: {
                type: String,
                default: 'aggressive',
            },
        },
        data: () => ({
            innerValue: null as string | number | Array<unknown> | null,
        }),
        watch: {
            innerValue(newVal) {
                this.$emit('input', newVal);
            },
            value(newVal) {
                this.innerValue = newVal;
            },
        },
        created() {
            if (this.value) {
                this.innerValue = this.value;
            }
        },
    });
</script>
