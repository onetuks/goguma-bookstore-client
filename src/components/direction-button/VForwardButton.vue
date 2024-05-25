<script lang="ts" setup>

</script>

<template>
  <div class="forward-button">
    <svg
        class="forward-button-icon"
        fill="none"
        height="18"
        viewBox="0 0 10 18"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M9.56067 8.96961L1.56067 0.969613L0.500011 2.03027L7.43935 8.96961L0.439349 15.9696L1.50001 17.0303L9.56067 8.96961Z"
          fill="black"
      />
    </svg>
  </div>
</template>

<style scoped>

.forward-button {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  position: relative;
}

.forward-button-icon {
  flex-shrink: 0;
  width: 9px;
  height: 16px;
  position: relative;
  overflow: visible;
}

</style>