<template>
  <div v-if="error">{{ error }}</div>
  <div v-else>
    <div class="product" v-for="product in products.slice(0,3)" :key="product.id">
      <p class="price">{{ product.attributes.price }} kr</p>
      <h3 class="title">{{ product.attributes.title }}</h3>

      <router-link
        class="link"
        :to="{ name: 'ProductTemplate', params: { id: product.id } }"
      >
        <button>klik mig</button>
      </router-link>
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
      await fetch(
        "https://backend-mark.herokuapp.com/api/products?populate=%2A"
      )
        .then((response) => response.json())
        .then((data) => (this.products = data.data));
    } catch (error) {
      this.error = error;
    }

    await fetch(
      "https://backend-mark.herokuapp.com/api/categories?populate=%2A&sort=id:ASC"
    )
      .then((response) => response.json())
      .then((data) => (this.categories = data.data));
  },
};
</script>
