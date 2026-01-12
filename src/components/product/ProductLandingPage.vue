<script setup>
import products from "../../data/productData";
import { ref } from "vue";
import Cart from "./Cart.vue";

const CartList = ref([]);
const addTOcart = (cartItem) => {
  CartList.value.push(cartItem);
}

const PER_PAGE_ITEMS = 15;
const current_page = ref(1);

const gotoPage = (value) => {
  current_page.value = value;
};

const filterData = computed(() => {
  const start = (current_page.value - 1) * PER_PAGE_ITEMS;
  const end = start + PER_PAGE_ITEMS;
  return products.slice(start, end);
});
</script>
<template>
  <div class="container">
    <div class="cart-container" v-for="item in filterData" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.category }}</p>
      <button @click="addTOcart(item)">addToCart</button>
    </div>
  </div>
   <Pagination
    :perPageItem="PER_PAGE_ITEMS"
    :currentPage="current_page"
    :totalLength="products.length"
    @goToPage="gotoPage"
  />
  <Cart :carts="CartList" />
</template>
<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: aquamarine;
      align-content: start;

  height: 600px;
  gap: 10px;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
}
.container .cart-container {
  border: 1px solid lightblue;
  height: 120px;
  width: 120px;
  background-color: darkgrey;
  text-align: center;
  border-radius: 5px;
  padding-top: 24px;
  padding-bottom: 124px;
}
</style>
