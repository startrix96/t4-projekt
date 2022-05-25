<template>
    <div class="blurt">
        <h2>Velkommen til Pay 2 Play</h2>
        <p>
            Vi er en ny webshop, hvor du kan handle med at der har med spil at gøre, <br />vi har et
            stort udvalg samt gode priser i forhold til andre hjemmesider! <br />
            Vi glæder os over, at du har fundet frem til vores hjemmeside! <br />
            Vi håber i finder de spil i leder efter!
        </p>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-else>
        <h2 class="headtitle">Ugens Top Spil</h2>
        <div class="homeproductgrid">
            <div class="product" v-for="product in products.slice(5, 8)" :key="product.id">
                <img src="../../public/images/elden-ring.webp" />
                <h3 class="title">{{ product.attributes.title }}</h3>
                <p class="price">{{ product.attributes.price }} kr</p>

                <router-link
                    class="link"
                    :to="{ name: 'ProductTemplate', params: { id: product.id } }"
                >
                    <button class="klikhome">Køb</button>
                </router-link>
            </div>
        </div>
    </div>

    <div v-if="error">{{ error }}</div>
    <div v-else>
        <h2 class="nyespil">Nyeste Spil</h2>
        <div class="homeproductgrid">
            <div class="product" v-for="product in products.slice(9, 12)" :key="product.id">
                <img src="../../public/images/elden-ring.webp" />
                <h3 class="title">{{ product.attributes.title }}</h3>
                <p class="price">{{ product.attributes.price }} kr</p>

                <router-link
                    class="link"
                    :to="{ name: 'ProductTemplate', params: { id: product.id } }"
                >
                    <button class="klikhome">Køb</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "HomeView",
    components: {},
    data() {
        return {
            products: [],
            allProducts: [],
            categories: [],
            error: null,
        };
    },

    async mounted() {
        try {
            await fetch("https://backend-mark.herokuapp.com/api/products?populate=%2A")
                .then(response => response.json())
                .then(data => (this.products = data.data));
        } catch (error) {
            this.error = error;
        }

        await fetch("https://backend-mark.herokuapp.com/api/categories?populate=%2A&sort=id:ASC")
            .then(response => response.json())
            .then(data => (this.categories = data.data));
    },
};
</script>

<style>

</style>
