<template>
  <MDBFooter
    bg="none"
    :text="['center', 'white']"
    style="background-color: #0a4275"
    class="footer"

  >
    <div
      class="text-center p-1"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2020 Copyright:
      <p class="text-white m-1" 
        >Electronic Department Store</p> 
    </div>
  </MDBFooter>
</template>

<script>
  import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBBtn
    },
  };
</script>
<style>
.footer{
    padding-bottom: 0;
    /* position: absolute; */
    bottom:0;
    width: 100%;
}
.text-center {
    margin-top: 172px;
    text-align: center!important;
}
</style>