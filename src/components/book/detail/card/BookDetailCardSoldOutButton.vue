<script setup lang="ts">

</script>

<template>
  <div class="book-detail-card-bottom-sold-out-frame">
        <span>
          <span style="color: var(--color-text-fifth, #c8c8c8);">품절 </span>
          <span style="color: #8c8c8c">(재입고 알림 신청)</span>
        </span>
  </div>
</template>

<style scoped>


.book-detail-card-bottom-sold-out-frame {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-button-fourth, #c8c8c8);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
}
</style>