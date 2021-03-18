<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import { localize } from 'vee-validate';

    export default Vue.extend({
        name: 'App',
        data() {
            return {
                isInitialized: true,
            };
        },
        computed: {
            ...mapGetters({
                isAuthenticated: 'profile/isAuthenticated',
            }),
        },
        async mounted() {
            localize(this.$i18n.locale.toString().slice(0, 2));
            this.isInitialized = true;
        },
    });
</script>
