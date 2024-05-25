<script lang="ts" setup>
import VBackButton from "@/components/direction-button/VBackButton.vue";
import HeaderEasterEggButton from "@/components/header/elements/HeaderEasterEggButton.vue";
import HeaderSearchButton from "@/components/header/elements/HeaderSearchButton.vue";
import HeaderShoppingBasketButton from "@/components/header/elements/HeaderShoppingBasketButton.vue";

defineProps<{
  pageTitle: string,
}>();
</script>

<template>
  <div class="header-bar">
    <VBackButton/>
    <HeaderEasterEggButton/>
    <div class="header-bar-title">{{ pageTitle }}</div>
    <HeaderSearchButton/>
    <HeaderShoppingBasketButton/>
  </div>

</template>

<style scoped>
.header-bar {
  box-sizing: border-box;
  border-style: solid;
  border-color: var(--color-border-tertiary, #756357);
  border-width: 0 0 1px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  position: relative;
}

.header-bar-title {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-20, 20px);
  position: relative;
}
</style>