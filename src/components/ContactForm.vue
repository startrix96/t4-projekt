<template>

<h3>Contact Form</h3>
<form @submit.prevent="handleSubmit">
<label>Navm</label>
<input type="userName" required v-model="userName">
<div v-if="userNameError"> {{ userNameError }}</div>

<label>Telefonnummer</label>
<input type="phoneNumber" required v-model="phoneNumber">
<div v-if="phoneNumberError"> {{ phoneNumberError }}</div>

<label>Email</label>
<input type="email" required v-model="email">

<label>Besked</label>
<textarea type="message" required v-model="message"></textarea>
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
            userName: '',
            userNameError: '',
            phoneNumber: '',
            phoneNumberError: '',
            message: '',
            messageError: '',
            
            
            
        }
    },
    methods: {
        handleSubmit() {
           // besked validation (skal have flere)
           this.userNameError = this.userName.length > 2 ? '' : 'Indstast et valid navn ',
           this.phoneNumberError = this.phoneNumber.length == 8 ? '' : 'instast et dansk telefon nummer på 8 tal ',
          this.messageError = this.message.length > 15 ? '' : 'vær sød at specificere problemet '

         }
    }
    
}
</script>

<style>


</style>