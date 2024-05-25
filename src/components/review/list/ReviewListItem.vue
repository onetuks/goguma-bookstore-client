<script setup lang="ts">
import VReviewStars from "@/components/base/star/VReviewStars.vue";

defineProps<{
  coverImgUrl: string,
  title: string,
  reviewScore: number,
  content: string,
}>();
</script>

<template>
  <div class="div">
    <img class="frame-1079"
         src="{{coverImgUrl}}"
         alt="book-cover-img"/>
    <div class="frame-1487">
      <div class="frame-1465">
        <div class="frame-1461">
          <div class="div2">{{ title }}</div>
        </div>
        <VReviewStars :review-score="reviewScore"/>
      </div>
      <div class="div8">{{ content }}</div>
      <div class="frame-1486">
        <div class="div9">
          <div class="div10">삭제</div>
        </div>
        <div class="div9">
          <div class="div10">수정</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.div,
.div * {
  box-sizing: border-box;
}

.div {
  background: var(--color-surface-tertiary, #f4f3ec);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.frame-1079 {
  border-radius: 10px;
  flex-shrink: 0;
  width: 105px;
  height: 144px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
}

.frame-1487 {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 225px;
  position: relative;
}

.frame-1465 {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 225px;
  position: relative;
}

.frame-1461 {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 225px;
  position: relative;
}

.div2 {
  color: var(--color-text-fourth, #756357);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
  align-self: stretch;
}

.frame-1161 {
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.div3 {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  position: relative;
  overflow: visible;
}

.div4 {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  position: relative;
  overflow: visible;
}

.div5 {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  position: relative;
  overflow: visible;
}

.div6 {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  position: relative;
  overflow: visible;
}

.div7 {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  position: relative;
  overflow: visible;
}

.div8 {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  width: 225px;
  height: 60px;
  max-height: 60px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.frame-1486 {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.div9 {
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
  width: 110px;
  height: 30px;
  position: relative;
}

.div10 {
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

</style>