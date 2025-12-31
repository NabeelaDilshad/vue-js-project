<template>
  <div class="card">
    <img :src="product.image" />
    <h3>{{ product.title }}</h3>
    <p>₹{{ product.price }}</p>
    <button>Add to Cart</button>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

