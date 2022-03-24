<template>
<div class="containers">
   <div class="column">
     <h1 style="color: white">WELCOME BACK PLEASE LOG IN  </h1>
      <div id="login" class="mt-5">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="email"></label>
          <Field name="email" type="text" class="form-control"
           placeholder="email"/>
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password"></label>
          <Field name="password" type="password" class="form-control"
           placeholder="Password"/>
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary m-3" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
          <br>
          <p style="color: black;" class="register">Not a member? <a href="/register">Create an account</a></p>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
      </div>
    <!-- </div> -->
  </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
    email: yup.string().required("username is required"),
    password: yup.string().required("Password is required")
    });
    return {
      loading: false,
      message: "",
      schema,
    
     
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
   created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};


</script>

<style>
#login {
  border: 5px solid black;
  width: 35%;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
}
#login input {
  margin: 20px;
  border: none;
  border-bottom: 2px solid black;
  background-color:transparent
}
.register a{
  color: red;
  transition: 0.3s;
}
.register a:hover {
  color: rgb(73, 73, 73);
  transition: 0.3s;
}
::placeholder{
  color: #fff;
  font-size: 20px;
}
.profile-img-card{
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  border-radius:50%;
}
.column{
  height: 85vh;

}
</style>