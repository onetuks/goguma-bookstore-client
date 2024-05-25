<script lang="ts" setup>
import NavigationMenuButton from "@/components/base/navigation/elements/NavigationMenuButton.vue";
import NavigationHistoryButton from "@/components/base/navigation/elements/NavigationHistoryButton.vue";
import NavigationMyPageButton from "@/components/base/navigation/elements/NavigationMyPageButton.vue";
import NavigationFavoriteButton from "@/components/base/navigation/elements/NavigationFavoriteButton.vue";
import NavigationHomeButton from "@/components/base/navigation/elements/NavigationHomeButton.vue";
import {ref} from "vue";

type NavigationType = 'menu' | 'history' | 'mypage' | 'favorite' | 'home';

const activeNavigation = ref<NavigationType>('home');

const handleClick = (navigationTypeName: NavigationType) => {
  activeNavigation.value = navigationTypeName;
};
</script>

<template>
  <div class="navigation">
    <NavigationMenuButton
        :active="activeNavigation === 'menu'"
        @click="() => handleClick('menu')"
    />
    <NavigationHistoryButton
        :active="activeNavigation === 'history'"
        @click="() => handleClick('history')"
    />
    <NavigationMyPageButton
        :active="activeNavigation === 'mypage'"
        @click="() => handleClick('mypage')"
    />
    <NavigationFavoriteButton
        :active="activeNavigation === 'favorite'"
        @click="() => handleClick('favorite')"
    />
    <NavigationHomeButton
        :active="activeNavigation === 'home'"
        @click="() => handleClick('home')"
    />
  </div>

</template>

<style scoped>
.navigation {
  box-sizing: border-box;
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