<template>
    <div>
        <section>
            <h2>{{ products.attributes.title }}</h2>
            <div>
                <div>
                    <p>
                        <strong>Description: </strong> <br />
                        {{ products.attributes.description }}
                    </p>
                </div>
            </div>
            <div>
                <p>Price: {{ products.attributes.price }}kr</p>
                <div>
                    <!-- <router-link to="/FakeWeb">Køb</router-link> -->
                    <router-link to="/FakeWeb" custom v-slot="{ navigate }">
                        <span @click="navigate" @keypress.enter="navigate" role="link">Køb nu</span>
                    </router-link>
                </div>
            </div>
            <div>
                <h3>Lagerstatus:</h3>
                <p>{{ products.attributes.quantity }}</p>
            </div>
        </section>
    </div>
    hej
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
