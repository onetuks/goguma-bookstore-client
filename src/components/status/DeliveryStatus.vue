<script lang="ts" setup>
type status = '배송준비중' | '배송중' | '배송완료' | '주문완료';

defineProps<{
  status: status;
}>();
</script>

<template>
  <div class="property-wrapper">
    <div class="delivery-status">
      {{ status }}
    </div>
  </div>

</template>

<style scoped>
.property-wrapper,
.property-wrapper * {
  box-sizing: border-box;
}

.property-wrapper {
  width: 65px;
  height: 20px;
  position: relative;
}

.delivery-status {
  color: var(--color-text-black, #000000);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: absolute;
  width: 100%;
  bottom: 20%;
  height: 80%;
}

</style>