<template>
    <layout-default>
        <h3 v-if="isAuthenticated">
            {{ $t('messages.hello') }}, {{ user.name }}
        </h3>
        <h4>
            {{ $t('messages.have_a_nice_day') }}
        </h4>

        <search-user-form />
    </layout-default>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import SearchUserForm from '@/components/forms/SearchUserForm.vue';

    export default Vue.extend({
        name: 'Index',
        components: {
            SearchUserForm,
        },
        computed: {
            ...mapGetters({
                isAuthenticated: 'profile/isAuthenticated',
                user: 'profile/user',
            }),
        },
    });
</script>
