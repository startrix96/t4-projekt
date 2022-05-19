<template>
<h3>Contact Form</h3>

  <form ref="form" @submit.prevent="sendEmail">  
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
      
  </form>


</template>


<script>
export default {};
</script>

<style>


</style>