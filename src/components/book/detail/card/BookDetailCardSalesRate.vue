<script setup lang="ts">
import {formatPrice} from '@/components/book/price/PriceCalculator';

defineProps<{
  price: number,
  salesRate: number,
}>();

</script>

<template>
  <div class="_10">{{salesRate}}%</div>
  <div class="_20-000">{{formatPrice(price)}} 원</div>
</template>

<style scoped>

._10 {
  color: #000000;
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

._20-000 {
  color: #8c8c8c;
  text-align: left;
  font-family: "NanumSquare-Regular", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-decoration: line-through;
  position: relative;
}
</style>