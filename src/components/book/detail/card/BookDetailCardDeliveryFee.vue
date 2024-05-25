<script setup lang="ts">
defineProps<{
    deliveryFee: number,
}>();

const formatDeliveryFee = (deliveryFee: number): string => {
    return deliveryFee.toLocaleString();
}
</script>

<template>
  <div class="book-detail-card-delivery-fee">
    <div class="book-detail-card-delivery-fee-text">배송비:</div>
    <div class="_3000">{{formatDeliveryFee(deliveryFee)}}</div>
    <div class="book-detail-card-delivery-fee-text">원</div>
  </div>
</template>

<style scoped>

.book-detail-card-delivery-fee {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
.book-detail-card-delivery-fee-text {
  color: #000000;
  text-align: center;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
}
._3000 {
  color: #000000;
  text-align: center;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
}
</style>