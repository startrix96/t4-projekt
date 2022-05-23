<template>

  <div v-if="error">{{ error }}</div>
  <div v-else>
    <h2 class="headtitle"> Ugens Top Spil </h2>
    <div class="homeproductgrid"> 
    <div class="product" v-for="product in products.slice(0,3)" :key="product.id">
      <h3 class="title">{{ product.attributes.title }}</h3>
      <p class="price">{{ product.attributes.price }} kr</p>
      

      <router-link
        class="link"
        :to="{ name: 'ProductTemplate', params: { id: product.id } }"
      >
        <button class="productbutton">Køb</button>
      </router-link>
    </div>
  </div>
  </div>

  <div v-if="error">{{ error }}</div>
  <div v-else>
    <h2 class="headtitle"> Nyeste Spil </h2>
    <div class="homeproductgrid"> 
    <div class="product" v-for="product in products.slice(0,3)" :key="product.id">
      <h3 class="title">{{ product.attributes.title }}</h3>
      <p class="price">{{ product.attributes.price }} kr</p>
      
      <router-link
        class="link"
        :to="{ name: 'ProductTemplate', params: { id: product.id } }"
      >
        <button class="productbutton">Køb</button>
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

<style lang="scss">
.homeproductgrid {
    display: flex;
    flex-wrap: wrap;
}

.product {
    height: 200px;
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
.headtitle {
  text-align: center;
  font-size: 36px;
  color: #ed5c00;
}
.productbutton{
  position: relative;
  justify-content: center;
  left: 44%;
  background-color: #ed5c00;
  padding: 5px 20px;
  border: none;
  color: #FFF;
  border-radius: 4px;
  font-weight: 500;
}
</style>