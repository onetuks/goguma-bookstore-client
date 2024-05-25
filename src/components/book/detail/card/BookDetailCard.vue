<script setup lang="ts">

import BookDetailCardReviewStars from "@/components/star/VReviewStars.vue";
import BookDetailCardPrice from "@/components/book/detail/card/BookDetailCardRegularPrice.vue";
import BookDetailCardDeliveryFee from "@/components/book/detail/card/BookDetailCardDeliveryFee.vue";
import VZzimKongButton from "@/components/zzim/VZzimKongButton.vue";
import VCopyLinkButton from "@/components/zzim/VCopyLinkButton.vue";
import BookDetailCardSalesRate from "@/components/book/detail/card/BookDetailCardSalesRate.vue";
import BookDetailCardSoldOutButton from "@/components/book/detail/card/BookDetailCardSoldOutButton.vue";
import BookDetailCardPurchaseButton from "@/components/book/detail/card/BookDetailCardPurchaseButton.vue";

defineProps<{
  bookId: number,
  title: string,
  authorNickname: string,
  publisher: string,
  price: number,
  salesRate: number,
  stockCount: number
  deliveryFee: number,
  reviewScore: number,
}>();
</script>

<template>
  <div class="book-detail-card-wrapper">
    <div class="book-detail-card-content-frame">
      <div class="book-detail-card-title">{{ title }}</div>
      <div class="book-detail-card-nickname">{{ authorNickname }}</div>
      <div class="book-detail-card-content-third">
        <div class="book-detail-card-publisher">{{ publisher }}</div>
        <BookDetailCardSalesRate
            :price="price"
            :sales-rate="salesRate"
        />
      </div>
      <div class="book-detail-card-content-fourth">
        <BookDetailCardReviewStars :review-score="reviewScore"/>
        <BookDetailCardPrice
            :price="price"
            :sales-rate="salesRate"
        />
      </div>
      <BookDetailCardDeliveryFee
          style="width: 100%; justify-content: end; margin-bottom: 10px;"
          :delivery-fee="deliveryFee"/>
    </div>
    <div class="book-detail-card-bottom-frame">
      <VZzimKongButton :is-zzim="true"/>
      <VCopyLinkButton/>
      <BookDetailCardPurchaseButton v-if="stockCount > 0"/>
      <BookDetailCardSoldOutButton v-else/>
    </div>
  </div>

</template>

<style scoped>
.book-detail-card-wrapper {
  box-sizing: border-box;
  background: var(--color-surface-tertiary, #f4f3ec);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1px;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 10px;
}

.book-detail-card-content-frame {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  gap: 8px;
  align-items: flex-start;
}

.book-detail-card-title {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-20, 20px);
  position: relative;
}

.book-detail-card-nickname {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
}

.book-detail-card-content-third {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.book-detail-card-publisher {
  color: #000000;
  width: 100%;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
  flex: 1;
}

.book-detail-card-content-fourth {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
}

.book-detail-card-bottom-frame {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

</style>