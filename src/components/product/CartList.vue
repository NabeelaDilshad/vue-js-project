<script setup>
import { useProduct } from "../composables/useProduct";
const productStorecart = useProduct();
</script>
<template>
  <h4>CartList</h4>
  <div class="cartContainer">
    <div
      class="cart"
      v-for="cart in productStorecart.getProduct()"
      :key="cart.id"
    >
      {{ cart.name }}
    </div>
    <hr />
    <h4>Total selected Cart- {{}}</h4>
    <h4>Total Price - {{}}</h4>
  </div>
</template>
<style scoped>
.cartContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cart {
  padding-left: 5px;
  background-color: bisque;
  width: 100%;
  height: 44px;
}
</style>
