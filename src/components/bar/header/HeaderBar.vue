<script setup lang="ts">
import BackButton from "@/components/bar/header/elements/BackButton.vue";
import EasterEggButton from "@/components/bar/header/elements/EasterEggButton.vue";
import SearchButton from "@/components/bar/header/elements/SearchButton.vue";
import ShoppingBasketButton from "@/components/bar/header/elements/ShoppingBasketButton.vue";

defineProps<{
  pageTitle: string,
}>();
</script>

<template>
  <div class="property-1">
    <BackButton />
    <EasterEggButton />
    <div class="header-bat-title">{{ pageTitle }}</div>
    <SearchButton />
    <ShoppingBasketButton />
  </div>

</template>

<style scoped>
.property-1,
.property-1 * {
  box-sizing: border-box;
}
.property-1 {
  border-style: solid;
  border-color: var(--color-border-tertiary, #756357);
  border-width: 0 0 1px 0;
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
}
.header-bat-title {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-20, 20px);
  position: relative;
  flex: 1;
}
</style>