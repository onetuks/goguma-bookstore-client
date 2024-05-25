<script setup lang="ts">
import VLabel from "@/components/base/label/VLabel.vue";
import VZzimKongButton from "@/components/base/zzim/VZzimKongButton.vue";
import {Category} from "@/components/book/Category";

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
  <div class="div">
    <img
        loading="lazy"
        srcSet="..."
        class="img"
        alt="cover-img-url"
    />
    <div class="div-2">
      <div class="div-3">안녕, 둔촌주공아파트</div>
      <div class="div-4">이인규, 라야</div>
      <div class="div-5">
        <div class="div-6">
          <div class="div-7">14,900</div>
          <div class="div-8">원</div>
        </div>
        <div class="div-9">14,900원</div>
      </div>
      <div class="div-10">
        <div class="div-11">
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
.div {
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

.div-2 {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.div-3 {
  color: var(--color-text-fourth, #756357);
  font: 800 16px NanumSquare, sans-serif;
}

.div-4 {
  color: #000;
  margin-top: 5px;
  font: 400 14px/143% NanumSquare, sans-serif;
}

.div-5 {
  justify-content: end;
  display: flex;
  margin-top: 10px;
  gap: 10px;
  white-space: nowrap;
}

.div-6 {
  display: flex;
  gap: 3px;
  font-size: 14px;
  color: var(--color-text-tertiary, #481c15);
  font-weight: 800;
}

.div-7 {
  font-family: NanumSquare, sans-serif;
}

.div-8 {
  font-family: NanumSquare, sans-serif;
}

.div-9 {
  color: var(--color-text-fifth, #c8c8c8);
  text-decoration-line: line-through;
  font: 400 12px NanumSquare, sans-serif;
}

.div-10 {
  display: flex;
  margin-top: 40px;
  width: 100%;
  gap: 20px;
  font-size: 14px;
  color: var(--color-text-tertiary, #481c15);
  font-weight: 800;
  white-space: nowrap;
  justify-content: space-between;
}

.div-11 {
  display: flex;
  gap: 5px;
}
</style>