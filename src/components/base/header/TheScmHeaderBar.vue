<script lang="ts" setup>
import VBackButton from "@/components/base/direction-button/VBackButton.vue";
import ScmHeaderMyPageButton from "@/components/base/header/elements/ScmHeaderMyPageButton.vue";
import VAlarmIcon from "@/components/base/alarm/VAlarmIcon.vue";
</script>

<template>
  <div class="scm-header-bar">
    <VBackButton/>
    <VAlarmIcon :has-alarm='true'/>
    <div class="scm-header-bar-title">
      <div class="div4">유통정보시스템</div>
    </div>
    <ScmHeaderMyPageButton/>
  </div>

</template>

<style scoped>
.scm-header-bar {
  box-sizing: border-box;
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

.scm-header-bar-title {
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
  height: 30px;
  position: relative;
  color: var(--color-text-black, #000000);
  text-align: center;
  font-family: var(--font-family-bold, "NanumSquare-Bold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  flex: 1;
}
</style>