<script lang="ts" setup>
import VBackButton from "@/components/base/direction-button/VBackButton.vue";
import ScmHeaderMyPageButton from "@/components/bar/header/elements/ScmHeaderMyPageButton.vue";
import VAlarmIcon from "@/components/base/alarm/VAlarmIcon.vue";
</script>

<template>
  <div class="property-1-variant-2">
    <VBackButton/>
    <VAlarmIcon :has-alarm='true'/>
    <div class="div3">
      <div class="div4">유통정보시스템</div>
    </div>
    <ScmHeaderMyPageButton/>
  </div>

</template>

<style scoped>
.property-1-variant-2,
.property-1-variant-2 * {
  box-sizing: border-box;
}

.property-1-variant-2 {
  border-style: solid;
  border-color: var(--color-border-primary, #e8e6d5);
  border-width: 0 0 1px 0;
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
}

.div3 {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-button-primary, #e1ddcb);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 30px;
  position: relative;
}

.div4 {
  color: var(--color-text-black, #000000);
  text-align: center;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>