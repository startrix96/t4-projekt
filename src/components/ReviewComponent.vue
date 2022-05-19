<template>
<div class="Reviews">
    <div class="ReviewItems" v-for="review in reviews" :key="review">
        <p>{{review.results}}</p> 
    </div>
</div>
</template>

<script>
export default {
    name:'ReviewComponent',
    data() {
        return{
            reviews:[],

        };
    },
    async created(){
        try{
            const response = await fetch("https://www.gamespot.com/api/reviews/?api_key=24a83f5c479eb148ca1621abbf57ac8b12ed79b0&format=json")
            return await response.json().then(data => this.reviews = data.reviews);
        }finally{
            console.log(this.reviews);
        }
    },
    computed:{

    }
};
</script>

<style></style>