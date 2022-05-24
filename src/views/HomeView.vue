<template>
    <div class="blurt">
        <h2 class="headtitle">Velkommen til Pay 2 Play</h2>
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
            <div class="product" v-for="product in products.slice(0, 3)" :key="product.id">
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
        <h2 class="headtitle">Nyeste Spil</h2>
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

<style lang="scss">
$primary-color: #ed5c00;
$text-color: #fff;
.blurt h2 {
    text-align: center;
}

.blurt p {
    text-align: center;
    padding-bottom: 50px;
}

.homeproductgrid {
    display: flex;
    flex-wrap: wrap;
}

.link {
    text-decoration: none;
    color: $text-color;
}

.homeproductgrid img {
    padding-top: 10px;
    padding-left: 17%;
    width: 65%;
    height: 100%;
}

.klikhome {
    text-align: center;
    margin-left: 41%;
    background-color: $primary-color;
    color: $text-color;
    padding: 12px 24px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 7px;
    margin-bottom: 5%;
    border: none;
}

.product {
    height: 50%;
    background-color: lightgray;
    margin: 40px 40px;
    max-width: 100%;
    width: 28%;
    h3 {
        font-size: 20px;
        text-align: center;
    }
}
.price {
    text-align: center;
    color: #ed5c00;
    font-weight: 600;
    font-size: 18px;
}
</style>
