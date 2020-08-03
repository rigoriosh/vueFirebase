<template>
  <div>
    <b-container fluid class="bv-example-row mt-4">
      <b-row>
        <b-col cols="3" v-for="(hero, index) in heros" :key="index">
          <b-card
            :title="hero.name"
            :img-src="require('@assets/img/heros/${index+1}.png')"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4"
          >
          <b-card-text>
              <h5>Price: ${{hero.price}}.00</h5>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
          </b-card-text>
          <b-button v-if="!hero.cart" :disable="hero.cart" @click="hero.cart=true, 
          addtocart(JSON.parse(JSON.stringlyfy(hero)))" block href="#"
          variant="seccess">Add to cart</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "products"
};
</script>
<style scoped>
</style>