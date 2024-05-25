<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

let clickCount = ref<number>(0);

const moveToEasterEggPage = () => {
  clickCount.value++;

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
  width: 30px;
  height: 30px;
  position: relative;
  padding: 10px;
}
</style>