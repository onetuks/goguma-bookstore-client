<script setup lang="ts">
import MenuNavigation from "@/components/bar/navigation/elements/MenuNavigation.vue";
import HistoryNavigation from "@/components/bar/navigation/elements/HistoryNavigation.vue";
import MyPageNavigation from "@/components/bar/navigation/elements/MyPageNavigation.vue";
import FavoriteNavigation from "@/components/bar/navigation/elements/FavoriteNavigation.vue";
import HomeNavigation from "@/components/bar/navigation/elements/HomeNavigation.vue";
import {ref} from "vue";

type NavigationType = 'menu' | 'history' | 'mypage' | 'favorite' | 'home';

const activeNavigation = ref<NavigationType>('home');

const handleClick = (navigationTypeName: NavigationType) => {
  activeNavigation.value = navigationTypeName;
};
</script>

<template>
  <div class="navigation">
    <MenuNavigation
        :active="activeNavigation === 'menu'"
        @click="() => handleClick('menu')"
    />
    <HistoryNavigation
        :active="activeNavigation === 'history'"
        @click="() => handleClick('history')"
    />
    <MyPageNavigation
        :active="activeNavigation === 'mypage'"
        @click="() => handleClick('mypage')"
    />
    <FavoriteNavigation
        :active="activeNavigation === 'favorite'"
        @click="() => handleClick('favorite')"
    />
    <HomeNavigation
        :active="activeNavigation === 'home'"
        @click="() => handleClick('home')"
    />
  </div>

</template>

<style scoped>
.navigation,
.navigation * {
  box-sizing: border-box;
}

.navigation {
  background: var(--color-surface-fourth, #e9e8df);
  border-radius: 10px 10px 0 0;
  border-style: solid;
  border-color: var(--color-button-primary, #e1ddcb);
  border-width: 1px 0 0 0;
  padding: 17px 1px 17px 1px;
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: center;
  position: relative;
}

</style>