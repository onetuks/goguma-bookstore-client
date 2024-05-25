<script lang="ts" setup>
type status = '배송준비중' | '배송중' | '배송완료' | '주문완료';

defineProps<{
  status: status;
}>();
</script>

<template>
  <div class="delivery-status-label-wrapper">{{ status }}</div>

</template>

<style scoped>
.delivery-status-label-wrapper {
  box-sizing: border-box;
  width: 65px;
  height: 20px;
  position: relative;
  color: var(--color-text-black, #000000);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
}
</style>