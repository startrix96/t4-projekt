<template>
    <form>
        <div class="fakeh">
    <h2>Det er desværre ikke muligt at logge ind i øjeblikket</h2>
        </div>
    <p>
        Det er pt ikke muligt at logge ind på vores webshop, da funktionen ikke er aktiveret. Dette er en fremtidig funktion som der skal udvikles på. 
        <br><br>Vi beklager ulejligheden, samt håber at du finder dine spil et andet sted.
    </p>
</form>

<form class="queryfakeform">
        <div class="fakeh">
    <h2>Det er desværre ikke muligt at logge ind i øjeblikket</h2>
        </div>
    <p>
        Det er pt ikke muligt at logge ind på vores webshop, da funktionen ikke er aktiveret. Dette er en fremtidig funktion som der skal udvikles på. 
        <br><br>Vi beklager ulejligheden, samt håber at du finder dine spil et andet sted.
    </p>
</form>

<form class="querylaptopform">
        <div class="fakeh">
    <h2>Det er desværre ikke muligt at logge ind i øjeblikket</h2>
        </div>
    <p>
        Det er pt ikke muligt at logge ind på vores webshop, da funktionen ikke er aktiveret. Dette er en fremtidig funktion som der skal udvikles på. 
        <br><br>Vi beklager ulejligheden, samt håber at du finder dine spil et andet sted.
    </p>
</form>
</template>

<script>
export default {};
</script>

<style lang="scss">
$primary-color: #ed5c00;
$text-color: #fff;

.fakeh h2 {
    color: $primary-color;
}

.queryfakeform {
    display: none;
}

.querylaptopform {
    display: none;
}

@media only screen and (max-width: 700px) {
  form {
      display: none;
  }

  .queryfakeform {
      display: block;
      width: 200px;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 700px) {
    form {
      display: none;
  }

  .queryfakeform {
    display: none;
}

.querylaptopform {
    display: block;
}

}
</style>