<template>
        <header>
        
                <div id="brand"><router-link to="/">P2P</router-link></div>
                    
                    <nav>
                        <ul class="headul">
                            <li class="headli"><router-link to="/">Forside</router-link></li>
                            <li class="headli"><router-link to="../views/ShopView">Shop</router-link></li>
                            <li class="headli"><router-link to="../views/ContactView">Kontakt</router-link></li>
                            <li class="headli"><input type="text" placeholder="Søg.." /></li>
                            <li class="headli"><router-link to="../views/LoginView">Login</router-link></li>
                            <li class="headli"><router-link to="../views/CartView">Kurv</router-link></li>
                        </ul>


                    </nav>

            <div :class="{open: isOpen}" id="hamburger-icon" @click="toggleMobileMenu2">
                <li class="headul2"><input type="text" placeholder="Søg.." /></li>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
                <ul class="mobile-menu">
                <li><router-link to="/">Forside</router-link></li>
                <li><router-link to="../views/ShopView">Shop</router-link></li>
                <li><router-link to="../views/ContactView">Kontakt</router-link></li>
                <li><router-link to="../views/LoginView">Login</router-link></li>
                <li><router-link to="../views/CartView">Kurv</router-link></li>
                </ul>
        </div>
        </header>
       

        
    
</template>


<script>


export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods:{
        toggleMobileMenu2(){
            this.isOpen = !this.isOpen
        }
    }
    
};


</script>

<style></style>
