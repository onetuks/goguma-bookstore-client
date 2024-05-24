<script setup lang="ts">
defineProps<{
    checked: boolean,
}>();

</script>

<template>
  <div class="property-1">
    <div v-if="checked" class="ellipse-31"/>
  </div>

</template>

<style scoped>
.property-1,
.property-1 * {
  box-sizing: border-box;
}
.property-1 {
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
.ellipse-31 {
  background: var(--color-surface-secondary, #153524);
  border-radius: 50%;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  position: relative;
}

</style>