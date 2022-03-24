<template>
  <MDBBtn
    color="primary"
    aria-controls="staticBackdropLabel"
    @click="staticBackdrop = true"
  >
    Add Product
  </MDBBtn>
  <!-- Modal -->
  <MDBModal
    id="staticBackdrop"
    tabindex="-1"
    labelledby="staticBackdropLabel"
    v-model="staticBackdrop"
    staticBackdrop
    class="modal"
  >
    <MDBModalHeader class="modal-header">
      <MDBModalTitle id="staticBackdropLabel">Add Product</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody class="modal-body">
      <div class="modal-item">
        <label for="product-title">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div class="modal-item">
        <label for="product-catergory">Catergory</label>
        <select v-model="catergory">
          <option value="Laptop">Laptop</option>
          <option value="Televisions">Televisions</option>
          <option value="Phones">Phones</option>
          <option value="Game consoles">Game consoles</option>
        </select>
      </div>
      <div class="modal-item">
        <label for="product-description">Description</label>
        <input type="text" v-model="description" />
      </div>
      <div class="modal-item">
        <label for="product-image">Image</label>
        <input type="text" v-model="image" />
      </div>
      <div class="modal-item">
        <label for="product-price">Price</label>
        <input type="text" v-model="price" />
      </div>
    </MDBModalBody>
    <MDBModalFooter class="modal-footer">
      <MDBBtn color="danger" @click="staticBackdrop = false"> Close </MDBBtn>
      <MDBBtn color="success" @click="addProduct">Add</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script>
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
const url = "https://complete-rest-api.herokuapp.com/api/products/";
export default {
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  },
  data() {
    return {
      title: "",
      catergory: "",
      description: "",
      image: "",
      price: "",
    };
  },
  methods: {
    addProduct() {
      if (!localStorage.getItem("user")) {
        alert("User not found");
        this.$router.push("/Login");
        return;
      }
      fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          catergory: this.catergory,
          description: this.description,
          image: this.image,
          price: this.price,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert("Successfully created a new product");
          this.$router.push("/Products");
        });
    },
  },
  setup() {
    const staticBackdrop = ref(false);
    return {
      staticBackdrop,
    };
  },
};
</script>
<style scoped>
.modal {
  border-radius: 15px;
  box-shadow: 0 8px 50px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
.modal-body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
}
.modal-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  row-gap: 1rem;
}
</style>