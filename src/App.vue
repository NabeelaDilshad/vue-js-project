<script setup>
import Header from './components/Header.vue'
import ProductLandingPage from './components/product/ProductLandingPage.vue';

</script>





<template>
 <!-- header  -->
   <Header :cartItem="CartList" />
  
  <!-- productlist  -->
   <ProductLandingPage/>
 
</template>
