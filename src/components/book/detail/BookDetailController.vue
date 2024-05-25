<script setup lang="ts">

</script>

<template>
  <div class="div">
    <div class="div2">관련상품</div>
    <div class="div2">상품 설명</div>
    <div class="div2">상품후기</div>
  </div>

</template>

<style scoped>
.div,
.div * {
  box-sizing: border-box;
}
.div {
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 0 0 1px 0;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 300px;
  position: relative;
}
.div2 {
  color: #000000;
  text-align: center;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-14, 14px);
  line-height: 20px;
  position: relative;
  width: 60px;
}

</style>