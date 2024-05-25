<script setup lang="ts">
defineProps<{
    onSale: boolean,
}>();
</script>

<template>
  <div class="book-sale-button">{{ onSale ? '판매 중지' : '판매 재개' }}</div>
</template>

<style scoped>
.book-sale-button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 0;
  position: relative;
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-button-primary, #e1ddcb);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 30px;
  color: var(--color-text-black, #000000);
  text-align: center;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  flex: 1;
}
</style>