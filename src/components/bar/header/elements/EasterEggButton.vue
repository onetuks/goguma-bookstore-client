<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

let clickCount = ref<number>(0);

const moveToEasterEggPage = () => {
  clickCount.value ++;

  if (clickCount.value >= 10) {
    useRouter().push('/easter-egg')
  }
}
</script>

<template>
  <div
      class="easter-egg-button"
      @click="moveToEasterEggPage"
  ></div>
</template>

<style scoped>
.easter-egg-button {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  position: relative;
}
</style>