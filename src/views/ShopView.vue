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

<style lang="scss">
$primary-color: #ed5c00;
$text-color: #fff;

.headtitle {
    text-align: center;
    font-size: 36px;
    color: $primary-color;
}

section {
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;
}

.flytkategorier {
    width: 15%;
    margin-top: 1.2%;
}

.flytkategorier h2 {
    margin-left: 21%;
}

.flytprodukter {
    width: 90%;
}

.categories {
    margin-left: 50px;
    margin-bottom: -2%;
}
.link {
    text-decoration: none;
}

.productgrid {
    display: flex;
    flex-wrap: wrap;
}

.productgrid img {
    padding-top: 10px;
    padding-left: 18%;
    width: 65%;
    height: 100%;
}

.klik {
    display: flex;
    text-align: center;
    margin-left: 34%;
    background-color: $primary-color;
    color: $text-color;
    padding: 11px 24px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 7px;
    margin-bottom: 5%;
    text-decoration: none;
    border: none;
}

.product {
    height: 60%;
    background-color: white;
    margin: 40px 40px;
    max-width: 100%;
    width: 27%;
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
    margin-top: -4%;
}
</style>
