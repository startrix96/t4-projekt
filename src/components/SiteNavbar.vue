<template>
    <div class="topnav">
        <nav class="active">
            <ul>
                <li>
                    <router-link to="/"
                        ><div class="logo"><img src="../assets/logo.png" /></div
                    ></router-link>
                </li>
                <li><router-link to="/">Forside</router-link></li>
                <li><router-link to="../views/ShopView">Shop</router-link></li>
                <li><router-link to="../views/ContactView">Kontakt</router-link></li>
            </ul>
            <ul class="right">
                <li><router-link to="../views/LoginView">Login</router-link></li>
                <li><router-link to="../views/CartView">Kurv</router-link></li>
            </ul>
        </nav>

        <input type="text" placeholder="Søg.." />
    </div>

    <div class="querytopnav">
        <nav class="active">
            <ul>
                <li>
                    <router-link to="/"
                        ><div class="logo"><img src="../assets/logo.png" /></div
                    ></router-link>
                </li>
                <li><input type="text" placeholder="Søg.." /></li>
            </ul>
            
        </nav>
        <div class="querynav">
                <ul>
                <li><router-link to="/">Forside</router-link></li>
                <li><router-link to="../views/ShopView">Shop</router-link></li>
                <li><router-link to="../views/ContactView">Kontakt</router-link></li>
                <li><router-link to="../views/LoginView">Login</router-link></li>
                <li><router-link to="../views/CartView">Kurv</router-link></li>
                </ul>
        </div>
    </div>
</template>


<script>
export default {};
</script>

<style></style>
