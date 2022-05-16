<template>
<div class="Reviews">
    <div class="ReviewItems" v-for="review in reviews" :key="review">
        <p>{{review.review}}</p> 
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
            const response = await fetch("https://www.giantbomb.com/api/user_review/[guid]/?api_key=bc5016ffa1092491200fa4664dfb9f9302b2a7ea")
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