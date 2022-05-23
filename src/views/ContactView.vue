<template>
<div class="split left">
  <ContactInformation />
</div>
<div class="split right">
    <ContactForm />
    </div>
</template>

<script>

import ContactForm from '@/components/ContactForm.vue'
import ContactInformation from '@/components/ContactInformation.vue'
export default {
  components: { ContactForm, ContactInformation },};
</script>

<style>

</style>
