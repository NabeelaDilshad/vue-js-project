<script setup>
import { computed, defineProps, onMounted, ref } from "vue";
const props = defineProps(["totalLength", "perPageItem", "currentPage"]);
const emit = defineEmits(["goToPage"]);

const PER_PAGE_ITEMS = computed(() => props.perPageItem);

const current_page = computed(() => props.currentPage);
const total_page = computed(() => {
  return Math.ceil(props.totalLength / PER_PAGE_ITEMS.value);
});

const goToFistPage = () => {
  emit("goToPage", 1);
};

const goToLastPage = () => {
  emit("goToPage", total_page.value);
};

const nextPage = () => {
  emit("goToPage", props.currentPage + 1);
};

const previosPage = () => {
  emit("goToPage", props.currentPage - 1);
};

</script>

<template>
  <div class="paginationContainer">
    <div class="start">Result {{ props.totalLength }}</div>
    <div class="pagination_actions" style="display: flex">
      <i
        class="fa-solid fa-angles-left"
        :class="{ 'disabled-icon': current_page === 1 }"
        @click="goToFistPage"
      ></i>
      <i
        class="fa-solid fa-angle-left"
        :class="{ 'disabled-icon': current_page === 1 }"
        @click="previosPage"
      ></i>
      <span style="margin-top: 7px"
        >{{ current_page }} of {{ total_page }}</span
      >
      <i
        class="fa-solid fa-chevron-right"
        :class="{ 'disabled-icon': current_page === total_page }"
        @click="nextPage"
      ></i>
      <i
        class="fa-solid fa-angles-right"
        :class="{ 'disabled-icon': current_page === total_page }"
        @click="goToLastPage"
      ></i>
    </div>
    <div class="end"></div>
  </div>
</template>

<style>
.paginationContainer {
  height: 40px;
  background-color: rgb(183 192 198);
  display: flex;
  justify-content: space-between;
}
.pagination_actions i {
  padding: 10px;
}

.disabled-icon {
  opacity: 0.4;
  pointer-events: none; /* ❌ no click */
  cursor: not-allowed;
}
</style>
