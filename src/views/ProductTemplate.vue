<template>
    <section class="firstsection">
        <div class="flytbillede"><img src="../../public/images/elden-ring.webp" /></div>
        <div class="flexsection">
            <div class="flex-container">
                <h2 class="headtitle">{{ products.attributes.title }}</h2>
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
            <div class="flex-container">
                <div>
                    <p>
                        <strong>Beskrivelse: </strong> <br />
                        {{ products.attributes.description }}
                    </p>
                </div>
            </div>

            <br />
            <button class="fakebuy">
                <!-- <router-link to="/FakeWeb">Køb</router-link> -->
                <router-link to="/FakeWeb" custom v-slot="{ navigate }">
                    <span @click="navigate" @keypress.enter="navigate" role="link">Køb nu</span>
                </router-link>
            </button>
        </div>
    </section>
    <div class="centerreview">
        <h2>Anmeldelser</h2>
    </div>
    <section class="secondsection">
        <div class="reviewbillede"><img src="../assets/user.png" /></div>
        <div class="reviewbeskrivelse">
            <h3>Fantastisk spil</h3>
            <div class="flexstars">
                <div class="clip-star"></div>
                <div class="clip-star"></div>
                <div class="clip-star"></div>
                <div class="clip-star"></div>
                <div class="clip-stargrey"></div>
            </div>
            <p>
                Første spil i lang tid, hvor du får præcis det du betaler for og har set af
                annoncer. Der er ikke battlepass, det er en stor legeplads hvor det eneste der
                begrænser din nydelse og progression er en selv. Det er en storslået verden med en
                fantastisk mission hvor det handler om at udvikle sig selv og ens redskaber. Der er
                få fejl i spillet, hvilket giver en dejlig glidende til gang til alle spillets
                funktioner. Jeg ville ønske andre spiludviklere ville ligge så meget kærlighed og
                dedikation i spillene.
            </p>
        </div>
    </section>
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
