<script setup lang="ts">
defineProps<{
  message: string,
  confirmButtonText: string,
  cancelButtonText: string,
}>();
</script>

<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">{{ message }}</div>
      <div class="div-4">
        <div class="div-5">{{ confirmButtonText }}</div>
        <div class="div-5">{{ cancelButtonText }}</div>
      </div>
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
  font-size: 14px;
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
  font-family: NanumSquare, sans-serif;
  font-weight: 800;
}

.div-4 {
  display: flex;
  margin-top: 20px;
  gap: 10px;
  color: var(--color-text-black, #000);
  font-weight: 700;
  white-space: nowrap;
  justify-content: center;
}

.div-5 {
  font-family: NanumSquare, sans-serif;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  border-color: rgba(225, 221, 203, 1);
  border-style: solid;
  border-width: 1px;
  padding: 5px 10px;
}
</style>