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
    <div class="book-card-frame">
      <img class="image-frame"
           src="{{coverImgUrl}}"
           alt="book-cover"/>
    </div>
    <div class="book-info-frame">
      <div class="title-frame">{{ title }}</div>
      <div class="price-frame">{{ formatDiscountedPrice(price, salesRate) }}</div>
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

.book-card-frame {
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

.image-frame {
  border-radius: 7.7px;
  width: 115px;
  height: 170px;
  position: absolute;
  left: 42px;
  top: 15px;
  overflow: hidden;
  object-fit: cover;
}

.book-info-frame {
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

.title-frame {
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

.price-frame {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  color: var(--color-text-tertiary, #481c15);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  align-self: stretch;
}

</style>