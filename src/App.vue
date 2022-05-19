<template>
    <SiteNavbar />
    <SiteHeader />
    <router-view />
    <SiteFooter />
    <ReviewComponent />
</template>

<script>
import SiteNavbar from "./components/SiteNavbar.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ReviewComponent from "./components/ReviewComponent.vue";

export default {
    name: "App",
    components: {
        SiteNavbar,
        SiteHeader,
        SiteFooter,
        ReviewComponent,
    },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
