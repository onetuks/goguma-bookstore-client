<script setup lang="ts">
import {useRouter} from "vue-router";

const moveToSearchPage = () => {
  useRouter().push('/search');
}
</script>

<template>
  <div
      class="search-button"
      @click="moveToSearchPage"
  >
    <svg
        class="search-button-icon"
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.4653 8.04939C12.4653 10.9241 10.1349 13.2545 7.2602 13.2545C4.38548 13.2545 2.05505 10.9241 2.05505 8.04939C2.05505 5.17466 4.38548 2.84424 7.2602 2.84424C10.1349 2.84424 12.4653 5.17466 12.4653 8.04939ZM11.581 13.8157C10.3772 14.7192 8.88123 15.2545 7.2602 15.2545C3.28091 15.2545 0.0550537 12.0287 0.0550537 8.04939C0.0550537 4.07009 3.28091 0.844238 7.2602 0.844238C11.2395 0.844238 14.4653 4.07009 14.4653 8.04939C14.4653 9.78642 13.8507 11.3799 12.827 12.6241L20.0049 19.8021C20.3955 20.1927 20.3955 20.8258 20.0049 21.2163C19.6144 21.6069 18.9812 21.6069 18.5907 21.2163L11.3856 14.0112L11.581 13.8157Z"
          fill="black"
      />
    </svg>
  </div>
</template>

<style scoped>

.search-button {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  position: relative;
}

.search-button-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  overflow: visible;
}
</style>