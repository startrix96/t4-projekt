<template>
    <div class="topnav">
        <a class="active" href="#home">Forside</a>
       
            <nav>
        <router-link to="/">Forside</router-link> |
        <router-link to="../views/ShopView">Shop</router-link>
        <router-link to="../views/ContactView">contact</router-link>
        <router-link to="../views/LoginView">login</router-link>
        <router-link to="../views/CartView">cart</router-link>
        
        
    </nav>
    <router-view />

        <input type="text" placeholder="Search.." />
    </div>
</template>

<script>
export default {};
</script>

<style></style>
