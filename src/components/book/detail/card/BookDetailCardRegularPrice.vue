<script setup lang="ts">
import {formatDiscountedPrice} from "../../price/PriceCalculator";

defineProps<{
    price: number,
  salesRate: number,
}>();
</script>

<template>
  <div class="frame-1240">
    <div class="_18-000">{{formatDiscountedPrice(price, salesRate)}}</div>
    <div class="div9">원</div>
  </div>
</template>

<style scoped>

.frame-1240 {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
._18-000 {
  color: #000000;
  text-align: right;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
}
.div9 {
  color: #000000;
  text-align: center;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
}
</style>