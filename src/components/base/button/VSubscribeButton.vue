<script lang="ts" setup>
defineProps<{
  isSubscribed: boolean
}>();
</script>

<template>
  <button
      :class="isSubscribed ? 'active' : 'inactive'"
      class="subscribe-button"
  >
    {{ isSubscribed ? '구독중' : '구독하기' }}
  </button>
</template>

<style scoped>
.subscribe-button {
  background-color: transparent;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 80px;
  height: 30px;
  position: relative;
  text-align: center;
  color: var(--color-text-fourth, #756357);
  font-family: var(--font-family-bold), sans-serif;
  font-size: var(--font-size-14);
  font-weight: 700;
}

.subscribe-button.active {
  border-color: var(--color-button-primary, #e1ddcb);
}

.subscribe-button.inactive {
  border-color: var(--color-border-tertiary, #756357);
}
</style>