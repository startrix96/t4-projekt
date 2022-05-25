<template>
    <h2 class="headtitle">Shop</h2>
    <section>
        <div class="flytkategorier">
            <h2>Kategorier</h2>
            <div class="categories" v-for="name in categories" :key="name.id">
                <p @click="filterProducts(name.id)">{{ name.attributes.name }}</p>
            </div>
        </div>

        <div class="flytprodukter">
            <div class="productgrid">
                <div class="product" v-for="product in allProducts" :key="product.id">
                    <img src="../../public/images/elden-ring.webp" />
                    <h3 class="title">{{ product.attributes.title }}</h3>
                    <p class="price">{{ product.attributes.price }} kr</p>
                    <router-link
                        class="link"
                        :to="{ name: 'ProductTemplate', params: { id: product.id } }"
                    >
                        <button class="klik">Se produkt</button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="queryshop">
        <div class="querykategorier">
            <h2>Kategorier</h2>
            <div class="categories" v-for="name in categories" :key="name.id">
                <p @click="filterProducts(name.id)">{{ name.attributes.name }}</p>
            </div>
        </div>

        <div class="flytprodukter">
            <div class="productgrid">
                <div class="shopproduct" v-for="product in allProducts" :key="product.id">
                    <img src="../../public/images/elden-ring.webp" />
                    <h3 class="title">{{ product.attributes.title }}</h3>
                    <p class="price">{{ product.attributes.price }} kr</p>
                    <router-link
                        class="link"
                        :to="{ name: 'ProductTemplate', params: { id: product.id } }"
                    >
                        <button class="klik">Se produkt</button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="querylaptopshop">
        <div class="querylaptopkategorier">
            <h2>Kategorier</h2>
            <div class="categories" v-for="name in categories" :key="name.id">
                <p @click="filterProducts(name.id)">{{ name.attributes.name }}</p>
            </div>
        </div>

        <div class="flytprodukter">
            <div class="productgrid">
                <div class="shoplaptopproduct" v-for="product in allProducts" :key="product.id">
                    <img src="../../public/images/elden-ring.webp" />
                    <h3 class="title">{{ product.attributes.title }}</h3>
                    <p class="price">{{ product.attributes.price }} kr</p>
                    <router-link
                        class="link"
                        :to="{ name: 'ProductTemplate', params: { id: product.id } }"
                    >
                        <button class="klik">Se produkt</button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            allProducts: [],
            categories: [],
        };
    },

    async mounted() {
        await fetch("https://backend-mark.herokuapp.com/api/products?populate=%2A")
            .then(response => response.json())
            .then(data => (this.products = data.data));

        await fetch("https://backend-mark.herokuapp.com/api/categories?populate=%2A&sort=id:ASC")
            .then(response => response.json())
            .then(data => (this.categories = data.data));

        if (this.allProducts.length == 0) {
            this.allProducts = this.products;
        }
    },
    methods: {
        filterProducts(id) {
            if (id == 0) {
                this.products = this.allProducts;
            } else {
                this.allProducts = this.products.filter(function (elem) {
                    for (let i = 0; i < elem.attributes.categories.data.length; i++) {
                        if (elem.attributes.categories.data[i].id == id) {
                            return true;
                        }
                    }
                    return false;
                });
            }
        },
    },
};
</script>

<style>

</style>
