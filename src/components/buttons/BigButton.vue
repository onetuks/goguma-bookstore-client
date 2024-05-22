<script setup lang="ts">
import {ButtonState} from "@/components/buttons/ButtonState";

defineProps<{
  buttonName: string,
  buttonState: ButtonState
}>();
</script>

<template>
  <button
      class="big-button"
      :class="buttonState"
  >
    {{ buttonName }}
  </button>
</template>

<style scoped>
.big-button {
  background-color: transparent;
  border: 2px solid;
  border-radius: 15px;
  border-color: var(--color-button-primary, #e1ddcb);
  padding: 5px 10px 5px 10px;
  gap:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  position: relative;
  text-align: center;
  color: var(--color-text-primary, #000000);
  font-family: var(--font-family-extra-bold, 'NanumSquareExtraBold'), sans-serif;
  font-size: var(--font-size-16, 16px);
}
</style>