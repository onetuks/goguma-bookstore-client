<script setup lang="ts">
defineProps<{
  message: string,
  confirmButtonText: string,
}>();
</script>

<template>
  <div class="popup-wrapper">
    <div class="message-frame">{{ message }}</div>
    <div class="button-frame">{{ confirmButtonText }}</div>
  </div>
</template>

<style scoped>
.popup-wrapper {
  border-color: rgba(232, 230, 213, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  text-align: center;
  justify-content: center;
  background-color: var(--color-surface-tertiary, #f4f3ec);
  width: auto;
  padding: 20px 30px;
}

.message-frame {
  color: var(--color-text-fourth, #756357);
  font-family: NanumSquare, sans-serif;
  font-weight: 800;
}

.button-frame {
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border-color: rgba(225, 221, 203, 1);
  border-style: solid;
  border-width: 2px;
  margin-top: 20px;
  color: var(--color-text-black, #000);
  white-space: nowrap;
  padding: 5px 10px;
  font: 16px NanumSquare, sans-serif;
}
</style>