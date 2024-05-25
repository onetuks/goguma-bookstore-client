<script setup lang="ts">

import BookDetailCardReviewStars from "@/components/base/star/VReviewStars.vue";
import BookDetailCardPrice from "@/components/book/detail/card/BookDetailCardRegularPrice.vue";
import BookDetailCardDeliveryFee from "@/components/book/detail/card/BookDetailCardDeliveryFee.vue";
import VZzimKongButton from "@/components/base/zzim/VZzimKongButton.vue";
import VCopyLinkButton from "@/components/base/zzim/VCopyLinkButton.vue";
import BookDetailCardSalesRate from "@/components/book/detail/card/BookDetailCardSalesRate.vue";

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
  <div class="property-1">
    <div class="frame-1430">
      <div class="frame-1429">
        <div class="frame-1426">
          <div class="div">{{ title }}</div>
          <div class="div2">{{ authorNickname }}</div>
          <div class="frame-1425">
            <div class="div3">{{ publisher }}</div>
            <BookDetailCardSalesRate
                :price="price"
                :sales-rate="salesRate"
            />
          </div>
        </div>
        <div class="frame-1427">
          <div class="frame-1238">
            <BookDetailCardReviewStars :review-score="reviewScore"/>
          </div>
          <div class="frame-1239"></div>
          <BookDetailCardPrice
              :price="price"
              :sales-rate="salesRate"
          />
        </div>
        <BookDetailCardDeliveryFee :delivery-fee="deliveryFee"/>
      </div>
      <div class="frame-1173">
        <VZzimKongButton :is-zzim="true"/>
        <VCopyLinkButton/>
        <div v-if="stockCount > 0"
             style="display: flex; gap: 10px">
          <div class="div13">
            <div class="div14">장바구니</div>
          </div>
          <div class="div15">
            <div class="div14">바로구매</div>
          </div>
        </div>
        <div v-else
             class="div11">
          <div class="div12">
          <span>
            <span class="div-12-span">품절</span>
            <span class="div-12-span2">(재입고 알림 신청)</span>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.property-1,
.property-1 * {
  box-sizing: border-box;
}

.property-1 {
  background: var(--color-surface-tertiary, #f4f3ec);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1px;
  padding: 10px;
  height: 190px;
  position: relative;
}

.frame-1430 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 10px;
  top: 10px;
}

.frame-1429 {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.frame-1426 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.div {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-20, 20px);
  position: relative;
}

.div2 {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
}

.frame-1425 {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 340px;
  position: relative;
}

.div3 {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
  flex: 1;
}

.frame-1427 {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.frame-1238 {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  position: relative;
}

.frame-1239 {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 149px;
  height: 19px;
  position: relative;
}

.frame-1173 {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.div11 {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-button-fourth, #c8c8c8);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 268px;
  height: 30px;
  position: relative;
}

.div12 {
  text-align: center;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.div-12-span {
  color: var(--color-text-fifth, #c8c8c8);
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
}

.div-12-span2 {
  color: #8c8c8c;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
}

.div13 {
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
  width: 130px;
  height: 30px;
  position: relative;
}

.div14 {
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

.div15 {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-button-secondary, #6a3e37);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 130px;
  height: 30px;
  position: relative;
}

</style>