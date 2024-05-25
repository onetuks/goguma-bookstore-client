<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <div class="favorite-button-wrapper">
    <svg
        fill="none"
        height="27"
        viewBox="0 0 28 27"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          d="M13.7033 2.77466C13.8271 2.5327 14.1729 2.5327 14.2967 2.77466L16.9086 7.87792C17.2549 8.55458 17.9092 9.02013 18.6619 9.12561L24.4203 9.93246C24.6974 9.9713 24.8062 10.3138 24.6023 10.5055L20.4985 14.3629C19.9242 14.9026 19.6612 15.6957 19.7993 16.4716L20.7765 21.9657C20.8246 22.2364 20.5428 22.4457 20.2976 22.3214L15.0551 19.6637C14.3919 19.3275 13.6081 19.3275 12.9449 19.6637L7.70244 22.3214C7.45721 22.4457 7.17539 22.2364 7.22354 21.9657L8.20075 16.4716C8.33876 15.6957 8.07578 14.9026 7.50155 14.3629L3.39769 10.5055C3.19376 10.3138 3.30257 9.9713 3.57973 9.93246L9.33806 9.12561C10.0908 9.02013 10.7451 8.55458 11.0914 7.87792L13.7033 2.77466Z"
          stroke-width="2"
      />
    </svg>
  </div>

</template>

<style scoped>
.favorite-button-wrapper {
  padding: 20px;
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
}
</style>