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
  <div class="review-detail-card-wrapper">
      <div class="review-header-frame">
        <img class="profile-image"
             src="{{profileImgUrl}}"
             alt="profile-img"/>
        <div class="review-info-frame">
          <div class="nickname-frame">{{ authorNickname }}</div>
          <VReviewStars :review-score="reviewScore"/>
        </div>
      </div>
      <div class="content-frame">{{ content }}</div>
      <div v-if="reviewImgUrls === undefined || reviewImgUrls.length > 0"
           class="review-profile-image">
        <img v-for="reviewImgUrl in reviewImgUrls"
             :key="reviewImgUrl"
             :src="reviewImgUrl"
             alt="review-img"
             class="review-image"/>
      </div>
    </div>
</template>

<style scoped>
.review-detail-card-wrapper {
  box-sizing: border-box;
  background: var(--color-surface-tertiary, #f4f3ec);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.review-header-frame {
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 340px;
  position: relative;
}

.profile-image {
  border-radius: 25px;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
}

.review-info-frame {
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.nickname-frame {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
}

.content-frame {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
  width: 340px;
  height: 200px;
}

.review-profile-image {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.review-image {
  background: linear-gradient(to left, #d9d9d9, #d9d9d9);
  border-radius: 10px;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  position: relative;
  object-fit: cover;
}

</style>