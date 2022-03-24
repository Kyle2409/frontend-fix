<template>
 <div class="container">
    <header class="jumbotron">
      
    </header>
    
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
        <p>
      <strong>Phone Number:</strong>
    {{currentUser.contact}}
    </p>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};

</script>

<style>

</style>