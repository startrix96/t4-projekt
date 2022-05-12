<template>
    <div class="topnav">
        <img alt="p2p logo" src="../assets/logo.svg" />
        <nav class="active">
            <router-link to="../views/HomeView">Forside</router-link>
            <router-link to="../views/ShopView">Shop</router-link>
            <router-link to="../views/ContactView">Kontakt</router-link>
            <router-link to="../views/LoginView">Login</router-link>
            <router-link to="../views/CartView">Kurv</router-link>
        </nav>
        <router-view />

        <input type="text" placeholder="Search.." />
    </div>
</template>

<script>
export default {};
</script>

<style></style>
