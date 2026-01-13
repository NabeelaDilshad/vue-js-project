<script setup>
import Pagination from "../common/Pagination.vue";
import { computed, ref } from "vue";
import { useRouter  } from "vue-router";
import { useProduct } from "../composables/useProduct";

const productStore = useProduct();

const products = computed(() => {
    return productStore.getProduct();
})

const router = useRouter();
const cartList = ref([]);

const addToCard = (cartItem) => {
  cartList.value.push(cartItem);
};

const PER_PAGE_ITEMS = 15;
const current_page = ref(1);

const gotoPage = (value) => {
  current_page.value = value;
};

const filterData = computed(() => {
  const start = (current_page.value - 1) * PER_PAGE_ITEMS;
  const end = start + PER_PAGE_ITEMS;
  return products.value.slice(start, end);
});



const RedirectProductPage = () => {
  router.push("/addproduct")
}

</script>
<template>

    <div class="addproduct_container">
     <button @click="RedirectProductPage">Add Product</button>
  </div>
 
  <div class="ProductContainer">
    <div class="product" v-for="item in filterData" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.category }}</p>
      <button @click="addToCard(item)">Add To Cart</button>
    </div>
    <h1 v-if="filterData?.length === 0 ">
        No Product Added Here please use Add product and add Product
    </h1>
  </div>
  <Pagination
    :perPageItem="PER_PAGE_ITEMS"
    :currentPage="current_page"
    :totalLength="products.length"
    @goToPage="gotoPage"
  />
</template>
<style scoped>
.ProductContainer {
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  height: 450px;
  background-color: aliceblue;
  margin-left: 6px;
  margin-right: 6px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 10px;
}
.ProductContainer .product {
  border-radius: 5px;
  background-color: #d9d9d9;
  width: 140px;
  height: 166px;
  text-align: center;
}

.addproduct_container{
  display: flex;
  justify-content: end;
}
</style>
