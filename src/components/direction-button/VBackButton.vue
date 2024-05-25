<script lang="ts" setup>
import {useRouter} from "vue-router";

const returnBack = () => {
  useRouter().back();
}
</script>

<template>
  <div @click="returnBack"
       class="back-button-wrapper">
    <svg
        class="back-button"
        fill="none"
        height="50"
        viewBox="0 0 50 50"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M20.4395 25.0304L28.4395 33.0304L29.5001 31.9697L22.5608 25.0304L29.5608 18.0304L28.5001 16.9697L20.4395 25.0304Z"
          fill="black"
      />
    </svg>
  </div>
</template>

<style scoped>
.back-button-wrapper {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  position: relative;
}

.back-button {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: visible;
}
</style>