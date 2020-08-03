<template>
  <div class="home">
    <Navbar/>
    <carousel />
    <products/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar"
import carousel from "../components/Carousel"
import products from "../components/Products"

export default {
  name: "Home",
  components:{
    Navbar,
    carousel,
    products
  }
};
</script>
