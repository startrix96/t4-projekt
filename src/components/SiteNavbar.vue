<template>
    <div class="topnav">
        <a class="active" href="#home">Forside</a>
       
            <nav>
        <router-link to="/">Forside</router-link> |
        <router-link to="/shop">Shop</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/cart">cart</router-link>
        
        
    </nav>
    <router-view />

        <input type="text" placeholder="Search.." />
    </div>
</template>

<script>
export default {};
</script>

<style></style>
