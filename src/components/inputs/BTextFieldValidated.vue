<template>
    <validation-provider
        :vid="vid"
        :name="$attrs.name"
        :rules="rules"
        v-slot="{ valid, errors }"
        :mode="validationMode"
    >
        <b-form-group v-bind="$attrs">
            <component
                :is="inputGroup ? 'b-input-group' : 'div'"
                v-bind="inputGroupAttrs"
            >
                <component
                    :is="textarea ? 'b-textarea' : 'b-form-input'"
                    v-model="innerValue"
                    v-bind="$attrs"
                    :state="errors[0] ? false : (valid ? true : null)"
                    autocomplete="off"
                />
                <b-form-invalid-feedback>
                    {{ errors[0] }}
                </b-form-invalid-feedback>
            </component>
            <template #description>
                <div ref="description">
                    <slot
                        name="description"
                    />
                </div>
            </template>
        </b-form-group>
    </validation-provider>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import { ValidationProvider } from 'vee-validate';

    export default Vue.extend({
        name: 'BTextFieldValidated',
        components: { ValidationProvider },
        props: {
            vid: {
                type: String,
            } as PropOptions<string>,
            rules: {
                type: [ Object, String ],
                default: '',
            } as PropOptions<string>,
            value: {
                type: [ String, Number ],
            } as PropOptions<string | number>,
            mask: {
                type: String,
                required: false,
            } as PropOptions<string>,
            validationMode: {
                type: String,
                default: 'aggressive',
            },
            inputGroup: {
                type: Boolean,
                default: false,
            } as PropOptions<boolean>,
            textarea: {
                type: Boolean,
                default: false,
            } as PropOptions<boolean>,
        },
        data: () => ({
            innerValue: '' as string | number,
        }),
        computed: {
            inputGroupAttrs() {
                const validAttrs = [ 'prepend', 'append' ];
                return Object.fromEntries(
                    Object.entries(this.$attrs)
                        .filter((e) => validAttrs.includes(e[0])),
                );
            },
        },
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
        mounted() {
            const description = (this.$refs.description as Element).closest('.form-text.text-muted');

            if (description) {
                description.removeAttribute('tabindex');
            }
        },
    });
</script>
