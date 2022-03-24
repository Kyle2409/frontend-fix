<template>
  <MDBNavbar expand="xxl" dark bg="dark" container>
    <MDBNavbarBrand href="#">
      <img
        src="https://i.postimg.cc/bJBSZK9R/Pin-Kay-Kuro-Logo-3.png"
        height="30"
        alt=""
        loading="lazy"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link to="/">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Login'}">
          Login
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Register'}">
          Register
        </MDBNavbarItem>
        <MDBNavbarItem router-link v-if="currentUser" :to="{name:'Profile'}">
          Profile
        </MDBNavbarItem> 
        <MDBNavbarItem router-link v-if="currentUser"  :to="{name:'Products'}">
          Products
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Cart'}">
          Cart
        </MDBNavbarItem>
        <MDBNavbarItem v-if="currentUser"  @click="logOut">
          Logout
          </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse6 = ref(false);
      const dropdown9 = ref(false);
      return {
        collapse6,
        dropdown9
      }
    },
    methods:{
        toggleNav() {
            this.isActive = !this.isActive;
        },
        logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
    },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  }
  };
</script>

<style>
#nav a.router-link-exact-active {
    color: #f208fa !important;
}
</style>