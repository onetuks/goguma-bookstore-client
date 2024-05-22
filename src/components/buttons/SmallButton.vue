<script setup lang="ts">
import {ButtonState} from "@/components/buttons/ButtonState";

defineProps<{
  buttonName: string,
  buttonState: ButtonState
}>();

</script>

<template>
  <button
      class="property-wrapper"
      :class="buttonState"
  >
    {{ buttonName }}
  </button>
</template>

<style scoped>
.property-wrapper {
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

.property-wrapper.default {
  border-color: var(--color-button-primary);
  color: var(--color-text-primary);
}

.property-wrapper.disabled {
  border-color: var(--color-button-fourth);
  color: var(--color-text-fifth);
}

.property-wrapper.emphasis {
  border-color: var(--color-button-secondary);
  color: var(--color-text-primary);
}
</style>