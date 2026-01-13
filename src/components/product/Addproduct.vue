<script setup>
import { ref } from "vue";
import { useProduct } from "../composables/useProduct";
import { useRouter } from "vue-router";

const router = useRouter();
const useProductStore = useProduct();

const form = ref({
  name: "",
  age: null,
  category: "",
});

const productAdd = () => {
  if (
    form.value.name == "" ||
    form.value.price == null ||
    form.value.category == ""
  ) {
    alert("All field required");
    return;
  }
  useProductStore.addProduct(form.value);
  //reset
  form.value = {
    name: "",
    price: null,
    category: "",
  };
  router.push("/");
};

// const handleName = ($event)=>{
//  form.value.name=$event.target.value
// }
</script>
<template>
  <h4>Add Product</h4>
  <form @submit.prevent="productAdd">
    <label for="pname">Product Name</label>
    <input v-model="form.name" type="text" id="pname" />
     <!-- <input type="text" id="pname" :value="form.name" @input="handleName"/> -->
    <label for="price">Product Price</label>
    <input v-model="form.price" type="text" id="price" />
    <label for="pcategory">Product Category</label>
    <select id="pcategory" v-model="form.category">
      <option value="electronics">Electronics</option>
      <option value="clothes">Clothes</option>
      <option value="household">Household</option>
      <option value="grocery">Grocery</option>
    </select>

    <button type="submit">Add</button>
    <button type="reset">Cancel</button>
  </form>
</template>
<style scoped>
h4 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: #333;
}

form {
  max-width: 420px;
  margin: auto;
  padding: 25px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #555;
}

input,
select {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 18px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
}

button {
  padding: 10px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

button[type="submit"] {
  background: #4f46e5;
  color: #fff;
  margin-right: 10px;
}

button[type="submit"]:hover {
  background: #4338ca;
}

button[type="reset"] {
  background: #e5e7eb;
  color: #374151;
}

button[type="reset"]:hover {
  background: #d1d5db;
}
</style>

