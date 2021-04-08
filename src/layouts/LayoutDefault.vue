<template>
    <div class="default-layout">
        <landing-navbar />

        <main class="main">
            <b-container class="mt-5">
                <slot />
            </b-container>
        </main>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import LandingNavbar from '@/components/navbars/LandingNavbar.vue';

    export default Vue.extend({
        name: 'LayoutDefault',
        components: {
            LandingNavbar,
        },
    });
</script>
