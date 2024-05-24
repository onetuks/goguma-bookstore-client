<script setup lang="ts">
defineProps<{
    onSale: boolean,
}>();
</script>

<template>
  <div class="property-1">
    <div class="div">
      <div class="div2">{{ onSale ? '판매 중지' : '판매 재개' }}</div>
    </div>
  </div>

</template>

<style scoped>
.property-1,
.property-1 * {
  box-sizing: border-box;
}
.property-1 {
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.div {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-button-primary, #e1ddcb);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 175px;
  height: 30px;
  position: relative;
}
.div2 {
  color: var(--color-text-black, #000000);
  text-align: center;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>