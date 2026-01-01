<script setup>
import products from "../../data/productData";
import { ref } from "vue";
import Cart from "./Cart.vue";

const CartList = ref([]);
const addTOcart = (cartItem) => {
  CartList.value.push(cartItem);
};
</script>
<template>
  <div class="container">
    <div class="cart-container" v-for="item in products" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.category }}</p>
      <button @click="addTOcart(item)">addToCart</button>
    </div>
  </div>
  <Cart :carts="CartList" />
</template>
<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: aquamarine;
  height: 300px;
  gap: 10px;
  padding: 10px;
}
.container .cart-container {
  border: 1px solid lightblue;
  height: 120px;
  width: 120px;
  background-color: darkgrey;
  text-align: center;
  border-radius: 5px;
}
</style>
