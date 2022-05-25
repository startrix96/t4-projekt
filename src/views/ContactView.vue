<template>
<div class="split">
  <ContactInformation />
    <ContactForm />
    </div>

<div class="querysplit">
  <ContactInformation />
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
