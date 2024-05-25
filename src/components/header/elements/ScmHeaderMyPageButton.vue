<script lang="ts" setup>
import {useRouter} from "vue-router";

const moveToAuthorMyPage = () => {
  useRouter().push('/mypage/author');
}
</script>

<template>
  <div
      class="scm-header-my-page-wrapper"
      @click="moveToAuthorMyPage"
  >
    <svg
        class="scm-header-my-page-icon"
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          clip-rule="evenodd"
          d="M14.75 5.25C14.75 7.87335 12.6234 10 10 10C7.37665 10 5.25 7.87335 5.25 5.25C5.25 2.62665 7.37665 0.5 10 0.5C12.6234 0.5 14.75 2.62665 14.75 5.25ZM13.25 5.25C13.25 7.04493 11.7949 8.5 10 8.5C8.20507 8.5 6.75 7.04493 6.75 5.25C6.75 3.45507 8.20507 2 10 2C11.7949 2 13.25 3.45507 13.25 5.25Z"
          fill="black"
          fill-rule="evenodd"
      />
      <path
          clip-rule="evenodd"
          d="M0.5 15.1875C0.5 12.9784 2.29086 11.1875 4.5 11.1875H15.5C17.7091 11.1875 19.5 12.9784 19.5 15.1875V19.5H0.5V15.1875ZM2 15.1875C2 13.8068 3.11929 12.6875 4.5 12.6875H15.5C16.8807 12.6875 18 13.8068 18 15.1875V18H2V15.1875Z"
          fill="black"
          fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<style scoped>

.scm-header-my-page-wrapper {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  position: relative;
}

.scm-header-my-page-icon {
  flex-shrink: 0;
  width: 19px;
  height: 19px;
  position: relative;
  overflow: visible;
}

</style>