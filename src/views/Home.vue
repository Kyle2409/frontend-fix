<template>
<div>
        <div class="header-blue">
            <div class="container hero">
                <div class="row">
                  <div class="col-md-5 col-lg-2 offset-lg-1 offset-xl-0 d-lg-block phone-holder">
                        <div class="iphone-mockup"><img src="https://i.postimg.cc/qq6hyjmH/Kuro.png" class="device">
                        
                        </div>
                </div>
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>Hey There! Welcome To Electronic Department Store</h1>
                        <p>At the department store we buy quality products 
                            and we sell them at affordable prices that is a promise we make to you.
                        </p>
                        <a href="/login">
                        <button class="btn btn-light btn-lg action-button" type="button">Login</button>
                        </a>
                        </div>
                        <div class="col-md-5 col-lg-2 offset-lg-1 offset-xl-0 d-lg-block phone-holder">
                        <div class="iphone-mockup"><img src="https://i.postimg.cc/9MKSLQBw/Pinky.png" class="device">
                        
                        </div>
                </div>
            </div>
        </div>
        </div>
        </div>
</template>


<script>
import { MDBBtn } from "mdb-vue-ui-kit";
export default {
  name: 'Home',
  components: {
      MDBBtn
  },
}
</script>

<style scoped >

@media (min-width:768px) {
  .col-12{
        height:100;
  }
}
.header-blue .action-button, .header-blue .action-button:not(.disabled):active {
  border:1px solid rgba(255,255,255,0.7);
  border-radius:40px;
  color:#ebeff1;
  box-shadow:none;
  text-shadow:none;
  padding:.3rem .8rem;
  background:transparent;
  transition:background-color 0.25s;
  outline:none;
      margin-left: 200px;

}

.header-blue .action-button:hover {
  color:#fff;
}

.header-blue .navbar .form-inline label {
  color:#d9d9d9;
}

.header-blue .navbar .form-inline .search-field {
  display:inline-block;
  width:80%;
  background:none;
  border:none;
  border-bottom:1px solid transparent;
  border-radius:0;
  color:#ccc;
  box-shadow:none;
  color:inherit;
  transition:border-bottom-color 0.3s;
}

.header-blue .navbar .form-inline .search-field:focus {
  border-bottom:1px solid #ccc;
}

.header-blue .hero {
  margin-top:20px;
  text-align:center;
}

@media (min-width:768px) {
  .header-blue .hero {
    margin-top:60px;
    text-align:left;
  }
}

.header-blue .hero h1 {
  color:#fff;
  font-size:40px;
  margin-top:0;
  margin-bottom:15px;
  font-weight:300;
  line-height:1.4;
      margin-left: 150px;
      align-content: center;

}
@media (min-width:992px) {
  .device{
  position:top;
  }
}
@media (min-width:992px) {
  .header-blue .hero h1 {
   
    line-height:1.2;
  }
}
.header-blue .hero p {
  color:rgba(255,255,255,0.8);
  font-size:20px;
  margin-bottom:30px;
  font-weight:300;
      margin-left: 150px;
      align-content: center;

}
.header-blue .phone-holder {
  text-align:right;
}
.header-blue div.iphone-mockup {
  position:relative;
  max-width:300px;
  margin:20px;
  display:inline-block;
}

.header-blue .iphone-mockup img.device {
  width:270%;
  height:auto;
}
.screen img{
  align-items:center;
  padding-top:137px;
}
.header-blue .iphone-mockup .screen {
  position:absolute;
  width:88%;
  height:77%;
  top:12%;
  border-radius:2px;
  left:6%;
  border:1px solid #444;
  background-color:#fff;
  overflow:hidden;
  background-size:cover;
  background-position:center;
}

.header-blue .iphone-mockup .screen:before {
  content:'';
  background-color:#444;
  position:absolute;
  width:70%;
  height:140%;
  top:-12%;
  right:-60%;
  transform:rotate(-19deg);
  opacity:0.2;
}
</style>