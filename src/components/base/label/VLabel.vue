<script setup lang="ts">
const LabelType = {
  Enroll: 'enroll',
  Registration: 'registration',
  Delivery: 'delivery'
}

type EnrollType = {
  type: typeof LabelType.Enroll;
  value: '승인완료' | '반려' | '검토중';
}

type RegistrationType = {
  type: typeof LabelType.Registration;
  value: '미검토' | '검토완료';
}

type DeliveryType = {
  type: typeof LabelType.Delivery;
  value: '미접수' | '접수완료' | '발송완료' | '배송완료 ' | '취소처리';
}

type LabelValueType = EnrollType | RegistrationType | DeliveryType;

defineProps<{
  labelValue: LabelValueType
}>();

</script>

<template>
  <div class="property-1">
    <div class="div">
      <div class="div2">{{labelValue}}</div>
    </div>
  </div>

</template>

<style scoped>
.property-1,
.property-1 * {
  box-sizing: border-box;
}

.property-1 {
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.div {
  border-radius: 15px;
  border-style: solid;
  border-color: var(--color-border-tertiary, #756357);
  border-width: 1px;
  padding: 5px 10px 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.div2 {
  color: var(--color-text-tertiary, #481c15);
  text-align: left;
  font-family: var(--font-family, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
}

</style>