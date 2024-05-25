<script setup lang="ts">
import VSmallButton from "@/components/button/VSmallButton.vue";

defineProps<{
  message: string,
  confirmButtonText: string,
  cancelButtonText: string,
}>();
</script>

<template>
  <div class="popup-wrapper">
    <div class="message-frame">{{ message }}</div>
    <div class="button-frame">
      <VSmallButton button-name="네" button-state="default" />
      <VSmallButton button-name="아니오" button-state="default" />
    </div>
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
  display: flex;
  margin-top: 20px;
  gap: 10px;
  color: var(--color-text-black, #000);
  font-weight: 700;
  white-space: nowrap;
  justify-content: center;
}
</style>