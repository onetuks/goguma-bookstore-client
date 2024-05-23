<script setup lang="ts">
type Status = '미답변' | '답변완료';

defineProps<{
  status: Status;
}>();
</script>

<template>
  <div class="property-1">
    <div class="div">{{status}}</div>
  </div>
</template>

<style scoped>
.property-1,
.property-1 * {
  box-sizing: border-box;
}
.property-1 {
  width: auto;
  height: 12px;
  position: relative;
}
.div {
  color: var(--color-text-black);
  text-align: left;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-11, 11px);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

</style>