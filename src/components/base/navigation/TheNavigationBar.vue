<script lang="ts" setup>
import NavigationMenuButton from "@/components/base/navigation/elements/NavigationMenuButton.vue";
import NavigationHistoryButton from "@/components/base/navigation/elements/NavigationHistoryButton.vue";
import NavigationMyPageButton from "@/components/base/navigation/elements/NavigationMyPageButton.vue";
import NavigationFavoriteButton from "@/components/base/navigation/elements/NavigationFavoriteButton.vue";
import NavigationHomeButton from "@/components/base/navigation/elements/NavigationHomeButton.vue";
import {ref} from "vue";
import NavigationDivider from "@/components/base/navigation/elements/NavigationDivider.vue";

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
    <NavigationDivider/>
    <NavigationHistoryButton
        :active="activeNavigation === 'history'"
        @click="() => handleClick('history')"
    />
    <NavigationDivider/>
    <NavigationMyPageButton
        :active="activeNavigation === 'mypage'"
        @click="() => handleClick('mypage')"
    />
    <NavigationDivider/>
    <NavigationFavoriteButton
        :active="activeNavigation === 'favorite'"
        @click="() => handleClick('favorite')"
    />
    <NavigationDivider/>
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
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
}

</style>