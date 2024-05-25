<script setup lang="ts">
import {formatDiscountedPrice} from "../price/PriceCalculator";

defineProps<{
  coverImgUrl: string,
  title: string,
  price: number,
  salesRate: number,
}>();
</script>

<template>
  <div class="book-main-recommend-card">
    <div class="frame-1492">
      <img class="frame-1114"
           src="{{coverImgUrl}}"
           alt="book-cover"/>
    </div>
    <div class="frame-1477">
      <div class="div2">{{ title }}</div>
      <div class="frame-1475">
        <div class="_14-500">{{ formatDiscountedPrice(price, salesRate) }}</div>
      </div>
    </div>
  </div>

</template>


<style scoped>
.book-main-recommend-card,
.book-main-recommend-card * {
  box-sizing: border-box;
}

.book-main-recommend-card {
  width: 200px;
  background: var(--color-surface-tertiary, #f4f3ec);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1px;
  padding: 0 0 5px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.frame-1492 {
  background: var(--color-surface-fifth, #ffffff);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-secondary, #f4f3ec);
  border-width: 0 0 1px 0;
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  position: relative;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.frame-1114 {
  border-radius: 7.7px;
  width: 115px;
  height: 170px;
  position: absolute;
  left: 42px;
  top: 15px;
  overflow: hidden;
  object-fit: cover;
}

.frame-1477 {
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.div2 {
  color: var(--color-text-fourth, #756357);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
  align-self: stretch;
  max-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.frame-1475 {
  display: flex;
  flex-direction: column;
  gap: 2.76px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

._14-500 {
  color: var(--color-text-tertiary, #481c15);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
  align-self: stretch;
}

</style>