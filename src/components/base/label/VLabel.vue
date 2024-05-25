<script setup lang="ts">
type LabelType =
    '승인완료' | '반려' | '검토중'
    | '미검토' | '검토완료'
    | '미접수' | '접수완료' | '발송완료' | '배송완료' | '취소처리'
    | '시집' | '에세이' | '여행' | '사진집' | '일러스트' | '카툰' | '매거진'
    | '소설' | '엽서' | '스티커' | '액세서리' | '기타' | '문화생활' | '강좌';

defineProps<{
  labelType: LabelType
}>();
</script>
<template>
  <div class="vlabel"
       :class="labelType == '배송완료' || labelType == '취소처리' ? 'done' : ''">
    {{ labelType }}
  </div>
</template>

<style scoped>
.vlabel {
  justify-content: center;
  border-radius: 15px;
  border-color: rgba(117, 99, 87, 1);
  border-style: solid;
  border-width: 1px;
  color: var(--color-text-tertiary, #481c15);
  white-space: nowrap;
  padding: 5px 10px;
  font: 800 14px NanumSquare, sans-serif;
}
</style>