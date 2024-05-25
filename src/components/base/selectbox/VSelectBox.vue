<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import VDownButton from "@/components/base/direction-button/VDownButton.vue";

type SelectBoxType = 'review' | 'book';
type Option = { value: string; text: string; };

const props = defineProps<{
  selectBoxType: SelectBoxType,
}>();

const REVIEW_OPTIONS: Option[] = [
  {value: 'DATE', text: '최신순'},
  {value: 'REVIEW_SCORE_DESC', text: '평점 높은순'},
  {value: 'REVIEW_SCORE_ASC', text: '평점 낮은순'},
];
const BOOK_OPTIONS: Option[] = [
  {value: 'SALES_COUNT', text: '판매순'},
  {value: 'PRICE_DESC', text: '높은 가격순'},
  {value: 'PRICE_ASC', text: '낮은 가격순'},
  {value: 'COMMENT_COUNT', text: '서평 많은순 '},
  {value: 'DATE', text: '입고순'},
  {value: 'FAVORITE_COUNT', text: '즐겨찾기순'},
  {value: 'REVIEW_SCORE', text: '평점순'},
];

const getOptions = (selectBoxType: SelectBoxType): Option[] => {
  return selectBoxType === 'review' ? REVIEW_OPTIONS : BOOK_OPTIONS;
}

let selectBoxActive = ref<boolean>(false);
let selectedOption = ref<Option>(getOptions(props.selectBoxType)[0]);

const clickLabel = () => {
  selectBoxActive.value = !selectBoxActive.value;
}

const handleSelect = (value: Option) => {
  selectedOption.value = value;
  selectBoxActive.value = false;
}

const handleClose = (e: MouseEvent) => {
  const target = e.target as Element
  if (!target.classList.contains('label') && !target.classList.contains('optionItem')) {
    selectBoxActive.value = false;
  }
}

onMounted(() => {
  window.addEventListener('click', handleClose);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClose);
});
</script>

<template>
  <div class="selectBoxList">
    <div class="box">
      <div class="selectBox"
           :class="{ active: selectBoxActive }">
        <button
            class="label"
            @click="clickLabel">
          {{ selectedOption.text }}
        </button>
        <VDownButton />
        <ul class="optionList">
          <li class="optionItem"
              v-for="(option, index) in getOptions(selectBoxType)"
              :key="index"
              @click="handleSelect(option)">
            {{ option.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selectBoxList {
  display: flex;
}

.selectBox {
  box-sizing: border-box;
  position: relative;
  display: flex;
  z-index: 1;
  border-radius: 4px;
  cursor: pointer;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  border: none;
  color: var(--color-text-black);
  text-align: right;
  font-family: var(--font-family, "NanumSquare-Regular"), sans-serif;
  font-size: var(--font-size-11, 11px);
  flex: 1;
  appearance: none;
}

.selectBox .label {
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: 0 none;
  outline: 0 none;
  padding-left: 15px;
  background: transparent;
  cursor: pointer;
}

.selectBox .optionList {
  position: absolute;
  top: 28px;
  left: 0;
  width: 100%;
  background: var(--color-button-primary);
  color: var(--color-text-black);
  list-style-type: none;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  max-height: 0;
  transition: .3s ease-in;
}

.selectBox .optionList::-webkit-scrollbar {
  width: 6px;
}

.selectBox .optionList::-webkit-scrollbar-track {
  background: transparent;
}

.selectBox .optionList::-webkit-scrollbar-thumb {
  background: #303030;
  border-radius: 45px;
}

.selectBox .optionList::-webkit-scrollbar-thumb:hover {
  background: #303030;
}

.selectBox.active {
  z-index: 10;
}

.selectBox.active .optionList {
  max-height: 500px;
}

.selectBox .optionItem {
  border-bottom: 1px dashed rgb(170, 72, 72);
  padding: 5px 15px 5px;
  transition: .1s;
}

.selectBox .optionItem:hover {
  background: rgb(175, 93, 93);
}

.selectBox .optionItem:last-child {
  border-bottom: 0 none;
}
</style>