<script lang="ts" setup>
import {useRouter} from "vue-router";

const moveToShoppingBasketPage = () => {
  useRouter().push('/shopping-basket');
}
</script>

<template>
  <div
      class="shopping-basket-button-wrapper"
      @click="moveToShoppingBasketPage"
  >
    <svg
        class="shopping-basket-icon"
        fill="none"
        height="22"
        viewBox="0 0 16 22"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          clip-rule="evenodd"
          d="M5.47465 4.73221C5.49958 4.68796 5.52496 4.6443 5.55079 4.60125C6.20029 3.51875 7.0812 2.91061 7.99974 2.91061C8.91827 2.91061 9.79919 3.51875 10.4487 4.60125C10.4745 4.6443 10.4999 4.68796 10.5248 4.73221C11.1266 5.80063 11.4631 7.21283 11.4631 8.68284H12.6338C12.6338 8.22465 12.6093 7.77066 12.5617 7.3257C12.4381 6.17227 12.1585 5.07955 11.7438 4.13179C11.6033 3.81065 11.4472 3.50616 11.2765 3.2216C10.4074 1.77318 9.22876 0.959473 7.99974 0.959473C6.77072 0.959473 5.59204 1.77318 4.72299 3.22159C4.55225 3.50616 4.39621 3.81065 4.25568 4.13178C3.84094 5.07955 3.56133 6.17227 3.4378 7.3257C3.39015 7.77066 3.36572 8.22465 3.36572 8.68284H4.5364C4.5364 7.21283 4.87284 5.80063 5.47465 4.73221ZM3.41034 19.2403L2.31567 10.4829H13.6844L12.5897 19.2403H3.41034ZM0.467345 10.2084C0.366093 9.39839 0.997689 8.68293 1.81401 8.68293H14.1861C15.0024 8.68293 15.634 9.39839 15.5327 10.2084L14.3273 19.8515C14.2424 20.5307 13.6651 21.0403 12.9807 21.0403H3.0194C2.33496 21.0403 1.75763 20.5307 1.67273 19.8515L0.467345 10.2084Z"
          fill="black"
          fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<style scoped>
.shopping-basket-button-wrapper {
  background: rgba(255, 255, 255, 0);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  position: relative;
}

.shopping-basket-icon {
  flex-shrink: 0;
  width: 15px;
  height: 20px;
  position: relative;
  overflow: visible;
}

</style>