<template>
<h3>Contact Form</h3>
<form @submit.prevent="handleSubmit">
<label>Navm</label>
<input type="userName" required v-model="userName">

<label>Telefonnummer</label>
<input type="phoneNumber" required v-model="phoneNumber">

<label>Email</label>
<input type="email" required v-model="email">

<label>Besked</label>
<input type="message" required v-model="message">
<div v-if="messageError"> {{ messageError }}</div>

<div class="submit"></div>
<button>Send Besked</button>
</form>

<p>Email: {{ email }}</p>
<p>tlf: {{ phoneNumber }}</p>
<p>besked: {{ message }}</p>
</template>


<script>
export default {
    data() {
        return{
            email: '',
            password: '',
            userName: '',
            phoneNumber: '',
            message: '',
            messageError: ''
            
            
        }
    },
    methods: {
        handleSubmit() {
           // besked validation (skal have flere)
          this.messageError = this.message.length > 15 ? '' : 'vær sød at specificere problemet '
         }
    }
    
}
</script>

<style>


</style>