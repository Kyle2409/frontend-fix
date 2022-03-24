<template>
  <form @submit.prevent="register" class="form neu-border">
    <h2 class="form-heading">Register</h2>
    <h5>Create your account now</h5>
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="name"
      placeholder="Full Name"
    />
    <input
      class="form-input neu-border-inset"
      type="email"
      v-model="email"
      placeholder="Email Address"
    />
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="contact"
      placeholder="Contact Number"
    />
    <input
      class="form-input neu-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="submit" class="form-btn btn-light neu-border">Sign up</button>


    <p>
      Already have an account?
      <router-link :to="{ name: 'Login' }">Sign in</router-link>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log(this.name, this.email, this.contact, this.password)
      fetch("https://pinkay-and-kuro-final.herokuapp.com/users/signup", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          contact: this.contact,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.msg = `${ this.name } registered Successfully`;
          alert("redirecting to Login...");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.neu-border {
  border-radius: 30px;
  /* background-color: transparent; */
}
.neu-border-inset {
  border-radius: 30px;
  background: #f5f5f5;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-inline: auto;
  margin-top: 70px;
  background-color: rgb(225, 0, 255);
  margin-bottom: 70px;
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
  color: black;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
}

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}

.form-btn neu-border {
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: inset 8px 8px 15px #e4e4e4, inset -8px -8px 15px #ffffff;
}
</style>