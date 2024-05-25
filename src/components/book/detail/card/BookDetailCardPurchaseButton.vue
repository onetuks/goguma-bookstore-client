<script setup lang="ts">

import VSmallButton from "@/components/button/VSmallButton.vue";
</script>

<template>
  <div class="book-detail-card-bottom-purchase-frame">
    <VSmallButton button-name="장바구니" button-state="default"/>
    <VSmallButton button-name="바로구매" button-state="default"/>
  </div>
</template>

<style scoped>

.book-detail-card-bottom-purchase-frame {
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
}
</style>