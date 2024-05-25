<script lang="ts" setup>
import {ButtonState} from "@/components/base/button/ButtonState";

defineProps<{
  buttonName: string,
  buttonState: ButtonState
}>();
</script>

<template>
  <button
      :class="buttonState"
      class="big-button"
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
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  position: relative;
  text-align: center;
  color: var(--color-text-black, #000000);
  font-family: var(--font-family-extra-bold, 'NanumSquareExtraBold'), sans-serif;
  font-size: var(--font-size-16, 16px);
}

.big-button.default {
  border-color: var(--color-button-primary);
  color: var(--color-text-black);
}

.big-button.disabled {
  border-color: var(--color-button-fourth);
  color: var(--color-text-fifth);
}

.big-button.emphasis {
  border-color: var(--color-button-secondary);
  color: var(--color-text-black);
}
</style>