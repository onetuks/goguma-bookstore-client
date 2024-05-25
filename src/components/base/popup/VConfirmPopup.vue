<script setup lang="ts">
defineProps<{
  message: string,
  confirmButtonText: string,
}>();
</script>

<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">{{message}}</div>
      <div class="div-4"
      >{{confirmButtonText}}</div>
    </div>
  </div>
</template>

<style scoped>
.div {
  border-color: rgba(232, 230, 213, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  max-width: 330px;
  flex-direction: column;
  font-weight: 800;
  text-align: center;
  justify-content: center;
}

.div-2 {
  background-color: var(--color-surface-tertiary, #f4f3ec);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 30px;
}

.div-3 {
  color: var(--color-text-fourth, #756357);
  font: 14px NanumSquare, sans-serif;
}

.div-4 {
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