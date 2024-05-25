<script setup lang="ts">
import {formatDiscountedPrice} from "@/components/book/price/PriceCalculator";
import VZzimKongButton from "@/components/zzim/VZzimKongButton.vue";

defineProps<{
    coverImgUrl: string,
  title: string,
  publisher: string,
  price: number,
  salesRate: number
}>();
</script>

<template>
  <div class="book-list-vertical-item-wrapper">
    <img
        loading="lazy"
        src="{{coverImgUrl}}"
        class="img"
        alt="book-cover-image"
    />
    <div class="title-frame">{{title}}</div>
    <div class="book-info-frame">
      <div class="book-info-detail-frame">
        <div class="publisher-frame">{{publisher}}</div>
        <div class="price-frame">{{ formatDiscountedPrice(price, salesRate) }}</div>
      </div>
      <VZzimKongButton :is-zzim="true" />
    </div>
  </div>
</template>

<style scoped>
.book-list-vertical-item-wrapper {
  border-radius: 20px;
  border-color: rgba(232, 230, 213, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--color-surface-tertiary, #f4f3ec);
  display: flex;
  max-width: 175px;
  flex-direction: column;
  padding: 10px;
  align-items: start;
}

.img {
  aspect-ratio: 0.68;
  object-fit: fill;
  object-position: center;
  width: 100%;
  align-self: center;
}

.title-frame {
  color: var(--color-text-fourth, #756357);
  margin-top: 10px;
  font: 800 16px NanumSquare, sans-serif;
}

.book-info-frame {
  justify-content: space-between;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  width: 100%;
}

.book-info-detail-frame {
  display: flex;
  align-items: start;
  flex-direction: column;
}

.publisher-frame {
  color: #000;
  font: 400 12px NanumSquare, sans-serif;
}

.price-frame {
  color: var(--color-text-tertiary, #481c15);
  font: 800 14px NanumSquare, sans-serif;
}
</style>