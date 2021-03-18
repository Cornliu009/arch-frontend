<template>
    <layout-default>
        <h3>
            Your super landing page
        </h3>

        <h3 v-if="isAuthenticated">
            Test - success login
        </h3>
    </layout-default>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapGetters } from 'vuex';

    export default Vue.extend({
        name: 'Index',
        computed: {
            ...mapGetters({
                isAuthenticated: 'profile/isAuthenticated',
            }),
        },
    });
</script>
