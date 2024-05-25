<script lang="ts" setup>
type Status = '미답변' | '답변완료';

defineProps<{
  status: Status;
}>();
</script>

<template>
  <div class="inquiry-status-label-wrapper">{{ status }}</div>
</template>

<style scoped>
.inquiry-status-label-wrapper {
  box-sizing: border-box;
  width: auto;
  height: 12px;
  position: relative;
  color: var(--color-text-black);
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-11, 11px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>