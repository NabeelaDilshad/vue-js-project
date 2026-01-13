<script setup>
import { useProduct } from "../composables/useProduct";
const productStorecart = useProduct();
</script>
<template>
 <h4>Cart List</h4>

<div
  class="cart"
  v-for="cart in productStorecart.getProduct()"
  :key="cart.id"
>
  <span>{{ cart.name }}</span>
  <span>₹{{ cart.price }}</span>
</div>

<hr />

<div class="total">
  <span>Total Items</span>
  <span>{{ productStorecart.getProduct().length }}</span>
</div>
<!-- 
<pre>{{productStorecart.getProduct()}}</pre> -->

<div class="total total-price">
  <span>Total Price</span>
  <span>
    ₹{{
      productStorecart.getProduct().reduce(
        (sum, item) => sum + Number(item.price),
        0
      )
    }}
  </span>
</div>

</template>
<style scoped>
.cartContainer {
  max-width: 420px;
  margin: 30px auto;
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.cartContainer h4 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-size: 15px;
  color: #222;
  transition: all 0.2s ease;
}

.cart:hover {
  background-color: #ffe8c7;
  transform: scale(1.01);
}

hr {
  margin: 15px 0;
  border: none;
  border-top: 1px solid #ddd;
}

.total {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  color: #000;
}

.total-price {
  color: #e63946;
}

</style>
