<template>
<h3>Contact Form</h3>
<form @submit.prevent="HandleSubmit">
<label>Email</label>
<input type="email" required v-model="email">

<label>Password</label>
<input type="password" required v-model="password">

<div class="submit"></div>
<button>Send Besked</button>
</form>

<p>Email: {{ email }}</p>
<p>Password: {{ password }}</p>
</template>


<script>
export default {
    data() {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log('form submitted')
        }
    }
    
}
</script>

<style>


</style>