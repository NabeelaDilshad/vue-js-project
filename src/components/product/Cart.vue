<script setup>
import { defineProps , computed, onMounted} from "vue";
const props = defineProps(["carts"]);


const totalItem =computed(()=>{
   return  props.carts.length;
})
    
const totalPrice = computed(() => {
   return props.carts.reduce((acc, item) => {
    acc += item.price;
    return acc;
  }, 0);
});
</script>

<template>
  <div v-for="item in props.carts">
    <p>{{ item.name }}</p>
  </div>
  <p>TotalPrice---  {{ totalPrice }}</p><hr/>
  <p>TotalSelectedItem  {{ totalItem }}</p>
</template>
<style></style>
