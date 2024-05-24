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
  <div class="property-1">
    <div class="div"
         :class="labelType == '배송완료' || labelType == '취소처리' ? 'done' : ''">
      <div class="div2"
           :class="labelType == '배송완료' || labelType == '취소처리' ? 'done' : ''"
      >{{ labelType }}
      </div>
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

.div.done {
  border-color: var(--color-border-secondary);
}

.div2 {
  color: var(--color-text-tertiary, #481c15);
  text-align: left;
  font-family: var(--font-family, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-14, 14px);
  position: relative;
}

.div2.done {
  color: var(--color-text-fifth);
}

</style>