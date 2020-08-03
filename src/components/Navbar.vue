<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
      <b-navbar-brand @click="goHome" href="#">
        <b-icon-Brightness-high-fill></b-icon-Brightness-high-fill>Ecommerce
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="gotocart" active>Shoping Cart</b-nav-item>
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>-->

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>Admin</em>
            </template>
            <b-dropdown-item v-b-modal.modal-1>Sign In</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="User:" label-for="input-1">
              <b-form-input id="input-1" v-model="form.user" type="text" required placeholder="Enter user"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.pass" type="password" required placeholder="Enter Password"></b-form-input>
          </b-form-group>

          <b-button type="submit" block variante="primary">Submit</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data(){
      return{
          cart:'',
          form:{
              user:'',
              pass:''
          }
      }
  },
  created(){
      console.log("NabVAr");
      /* if (JSON.parse(localStore.getItem('products'))) {
          this.cart = JSON.parse(localStorage.getItem('products'))
      } else {
          return
      } */
  },
  methods:{
      gotocart(){
          //this.$router.push('/cart')
      },
      goHome(){
          //this.$router.push('/')
      },
      onSubmit(e){
          console.log(e);
          /* e.preventDefault();
          if (this.form.user == 'admin' && this.form.pass == '456789') {
              this.$refs['my-modal'].hide()
              this.$router.push('/admin',JSON.stringify('true'))
          } else {
              return false
          } */
      }
  }
};
</script>