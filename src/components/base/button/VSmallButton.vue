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
      class="small-button"
  >
    {{ buttonName }}
  </button>
</template>

<style scoped>
.small-button {
  background-color: transparent;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 30px;
  justify-content: center;
  padding: 5px 10px;
  position: relative;
  text-align: center;
}

.small-button.default {
  border-color: var(--color-button-primary);
  color: var(--color-text-black);
}

.small-button.disabled {
  border-color: var(--color-button-fourth);
  color: var(--color-text-fifth);
}

.small-button.emphasis {
  border-color: var(--color-button-secondary);
  color: var(--color-text-black);
}
</style>