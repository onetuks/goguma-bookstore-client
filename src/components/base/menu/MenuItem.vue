<script lang="ts" setup>
import ForwardButton from "@/components/base/direction-button/VForwardButton.vue";
import {useRouter} from "vue-router";

type MenuType = '서평관리';

defineProps<{
  menuType: MenuType,
}>();

const getPathOfMenuType = (menuType: MenuType): string => {
  switch (menuType) {
    case '서평관리':
      return '/review';
    default:
      return '';
  }
}

const moveToMenuTypePage = (menuType: MenuType) => {
  let path: string = getPathOfMenuType(menuType);
  useRouter().push(path);
}
</script>

<template>
  <div
      class="menu"
      @click="() => moveToMenuTypePage(menuType)"
  >
    <div class="menu-idle"></div>
    <div class="menu-title">{{ menuType }}</div>
    <ForwardButton/>
  </div>

</template>

<style scoped>
.menu {
  box-sizing: border-box;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 0 0 1px 0;
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: center;
  height: 60px;
  position: relative;
}

.menu-idle {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 15px;
  height: 30px;
  position: relative;
}

.menu-title {
  color: var(--color-text-black, #000000);
  text-align: left;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
  flex: 1;
}

</style>