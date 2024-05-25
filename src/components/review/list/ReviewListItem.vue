<script setup lang="ts">
import VReviewStars from "@/components/star/VReviewStars.vue";
import VSmallButton from "@/components/button/VSmallButton.vue";

defineProps<{
  coverImgUrl: string,
  title: string,
  reviewScore: number,
  content: string,
}>();
</script>

<template>
  <div class="review-list-item-wrapper">
    <img class="image-frame"
         src="{{coverImgUrl}}"
         alt="book-cover-img"/>
    <div class="review-info">
      <div class="title-frame">{{ title }}</div>
      <VReviewStars :review-score="reviewScore"/>
      <div class="content-frame">{{ content }}</div>
      <div class="button-frame">
        <VSmallButton button-name="삭제" button-state="default"/>
        <VSmallButton button-name="수정" button-state="default"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.review-list-item-wrapper {
  box-sizing: border-box;
  background: var(--color-surface-tertiary, #f4f3ec);
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.image-frame {
  border-radius: 10px;
  flex-shrink: 0;
  width: 105px;
  height: 144px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
}

.review-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  position: relative;
}

.title-frame {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;

  color: var(--color-text-fourth, #756357);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  align-self: stretch;
}

.content-frame {
  color: #000000;
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  height: 60px;
  max-height: 60px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.button-frame {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

</style>