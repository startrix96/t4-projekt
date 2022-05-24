<template>
    <div>
        <div class="flex-container">
            <h2>{{ products.attributes.title }}</h2>
        </div>
        <div class="flexstars">
<div class="clip-star"></div>
<div class="clip-star"></div>
<div class="clip-star"></div>
<div class="clip-star"></div>
<div class="clip-stargrey"></div>
</div>
        <div class="flex-container2">
                <div>
                    <p>
                        <strong>Pris: {{ products.attributes.price }}kr</strong> <br />
                        Lagerstatus: {{ products.attributes.quantity }}+
                    </p>
                </div>
            </div>
            <img src="../../public/images/elden-ring.jpg" />
            <div class="flex-container">
                <div>
                    <p>
                        <strong>Beskrivelse: </strong> <br />
                        {{ products.attributes.description }}
                    </p>
                </div>
            </div>
        
            <br>
            <button class="fakebuy">
                    <!-- <router-link to="/FakeWeb">Køb</router-link> -->
                    <router-link to="/FakeWeb" custom v-slot="{ navigate }">
                        <span @click="navigate" @keypress.enter="navigate" role="link">Køb nu</span>
                    </router-link>
            </button>
    </div>

</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            products: { attributes: { data: { attributes: { url: "" } } } },
            error: null,
        };
    },
    async mounted() {
        try {
            await fetch(
                "https://backend-mark.herokuapp.com/api/products/" +
                    this.$route.params.id +
                    "?populate=%2A"
            )
                .then(response => response.json())
                .then(data => (this.products = data.data));
        } catch (error) {
            this.error = error;
        }
    },
};
</script>

<style></style>
