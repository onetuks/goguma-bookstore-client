<script setup lang="ts">
defineProps<{
    checked: boolean,
}>();

</script>

<template>
  <div class="vradio">
    <div v-if="checked" class="vradio-dot"/>
  </div>

</template>

<style scoped>
.vradio,
.vradio * {
  box-sizing: border-box;
}
.vradio {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 1.5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: relative;
}
.vradio-dot {
  background: var(--color-surface-secondary, #153524);
  border-radius: 50%;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  position: relative;
}

</style>