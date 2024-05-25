<script setup lang="ts">
import VLabel from "@/components/label/VLabel.vue";
import VZzimKongButton from "@/components/zzim/VZzimKongButton.vue";
import {Category} from "@/components/book/Category";
import {formatDiscountedPrice, formatPrice} from "../price/PriceCalculator";

defineProps<{
  title: string,
  coverImgUrl: string,
  authorNickname: string,
  publisher: string,
  price: number,
  salesRate: number,
  categories: Category[],
}>();
</script>

<template>
  <div class="book-list-horizontal-item-wrapper">
    <img loading="lazy"
         src="{{coverImgUrl}}"
         class="img"
         alt="cover-img-url"/>
    <div class="book-list-horizontal-info-frame">
      <div class="title-frame">{{title}}</div>
      <div class="nickname-frame">{{authorNickname}}</div>
      <div class="price-frame">
        <div class="purchase-price-frame">{{ formatDiscountedPrice(price, salesRate) }} 원</div>
        <div class="regular-price-frame">{{ formatPrice(price) }}원</div>
      </div>
      <div class="book-list-horizontal-bottom-frame">
        <div class="category-frame">
          <VLabel v-for="(category, index) in categories"
                  :key="index"
                  :label-type="category"/>
        </div>
        <VZzimKongButton :is-zzim="true"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-list-horizontal-item-wrapper {
  border-radius: 20px;
  border-color: rgba(232, 230, 213, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--color-surface-tertiary, #f4f3ec);
  display: flex;
  gap: 10px;
  padding: 10px 15px;
}

.img {
  aspect-ratio: 0.74;
  object-fit: fill;
  object-position: center;
  width: 100px;
  max-width: 100%;
}

.book-list-horizontal-info-frame {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.title-frame {
  color: var(--color-text-fourth, #756357);
  font: 800 16px NanumSquare, sans-serif;
}

.nickname-frame {
  color: #000;
  margin-top: 5px;
  font: 400 14px/143% NanumSquare, sans-serif;
}

.price-frame {
  justify-content: end;
  display: flex;
  margin-top: 10px;
  gap: 10px;
  white-space: nowrap;
  font-size: 14px;
  color: var(--color-text-tertiary, #481c15);
  font-family: NanumSquare, sans-serif;
}

.regular-price-frame {
  color: var(--color-text-fifth, #c8c8c8);
  text-decoration-line: line-through;
  font: 400 12px NanumSquare, sans-serif;
}

.book-list-horizontal-bottom-frame {
  display: flex;
  margin-top: 40px;
  width: 100%;
  gap: 50px;
  font-size: 14px;
  color: var(--color-text-tertiary, #481c15);
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
}

.category-frame {
  display: flex;
  gap: 5px;
  height: auto;
}
</style>