<template>
  <section class="grid">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
    />
  </section>
</template>

<script setup>
import ProductCard from '../components/ ProductCard.vue'

const products = [
  {
    id: 1,
    title: 'Running Shoes',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    id: 2,
    title: 'Leather Bag',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1585386959984-a41552231693'
  },
  {
    id: 3,
    title: 'Smart Watch',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
  }
]
</script>
