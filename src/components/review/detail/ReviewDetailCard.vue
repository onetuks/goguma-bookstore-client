<script setup lang="ts">
import VReviewStars from "@/components/base/star/VReviewStars.vue";

defineProps<{
  authorNickname: string,
  profileImgUrl: string,
  reviewScore: number,
  content: string,
  reviewImgUrls?: string[],
}>();
</script>

<template>
  <div class="property-1">
    <div class="frame-1417">
      <div class="frame-1415">
        <img class="frame-1412"
             src="{{profileImgUrl}}"
             alt="profile-img"/>
        <div class="frame-1414">
          <div class="frame-1413">
            <div class="div">{{ authorNickname }}</div>
          </div>
          <VReviewStars :review-score="reviewScore"/>
        </div>
      </div>
      <div class="div7">{{ content }}</div>
      <div v-if="reviewImgUrls === undefined || reviewImgUrls.length > 0"
           class="frame-1416">
        <img v-for="reviewImgUrl in reviewImgUrls"
             :key="reviewImgUrl"
             :src="reviewImgUrl"
             alt="review-img"
             class="rectangle-70"/>
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
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.frame-1417 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.frame-1415 {
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 340px;
  position: relative;
}

.frame-1412 {
  border-radius: 25px;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
}

.frame-1414 {
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.frame-1413 {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.div {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.div7 {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
  width: 340px;
  height: 200px;
}

.frame-1416 {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.rectangle-70 {
  background: linear-gradient(to left, #d9d9d9, #d9d9d9);
  border-radius: 10px;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  position: relative;
  object-fit: cover;
}

</style>