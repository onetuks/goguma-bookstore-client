<script lang="ts" setup>
import {ref} from "vue";

let starCount = ref<number>(0);

const clickStar = (index: number) => {
  starCount.value = index;
}
</script>

<template>
  <div class="_3">
    <svg
        v-for="index in 5"
        :key="index"
        class="div"
        fill="none"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        @click="() => clickStar(index)"
    >
      <path
          :fill="index <= starCount ? '#F7FFA2' : ''"
          d="M10.2758 2.14891C10.3675 1.9631 10.6325 1.9631 10.7242 2.14891L12.6806 6.11314C12.9356 6.62964 13.4283 6.98764 13.9983 7.07047L18.3731 7.70616C18.5781 7.73596 18.66 7.98795 18.5116 8.13258L15.346 11.2183C14.9336 11.6203 14.7453 12.1996 14.8427 12.7673L15.59 17.1244C15.625 17.3286 15.4107 17.4844 15.2273 17.3879L11.3143 15.3308C10.8045 15.0628 10.1955 15.0628 9.68565 15.3308L5.77272 17.3879C5.58931 17.4844 5.37496 17.3286 5.40998 17.1244L6.15729 12.7673C6.25465 12.1996 6.06644 11.6203 5.65399 11.2183L2.48836 8.13258C2.33999 7.98795 2.42186 7.73596 2.62692 7.70616L7.00171 7.07047C7.5717 6.98764 8.06444 6.62964 8.31935 6.11314L10.2758 2.14891Z"
          stroke="#CEA29B"
          stroke-width="1.5"
      />
    </svg>
  </div>
</template>

<style scoped>
._3,
._3 * {
  box-sizing: border-box;
}

._3 {
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.div,
.div * {
  box-sizing: border-box;
}

.div {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  position: relative;
  overflow: visible;
}
</style>