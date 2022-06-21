<template>
    <form>
        <div class="fakeh">
    <h2>Det er desværre ikke muligt at tilgå kurven i øjeblikket</h2>
        </div>
    <p>
        Da produkterne på denne webshop ikke er virkelige, så er det desværre heller ikke muligt at tilgå ens kurv. 
        <br><br>Vi beklager ulejligheden, samt håber at du finder dine spil et andet sted.
    </p>
</form>

<form class="queryfakeform">
        <div class="fakeh">
    <h2>Det er desværre ikke muligt at tilgå kurven i øjeblikket</h2>
        </div>
    <p>
        Da produkterne på denne webshop ikke er virkelige, så er det desværre heller ikke muligt at tilgå ens kurv. 
        <br><br>Vi beklager ulejligheden, samt håber at du finder dine spil et andet sted.
    </p>
</form>

<form class="querylaptopform">
        <div class="fakeh">
    <h2>Det er desværre ikke muligt at tilgå kurven i øjeblikket</h2>
        </div>
    <p>
        Da produkterne på denne webshop ikke er virkelige, så er det desværre heller ikke muligt at tilgå ens kurv. 
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