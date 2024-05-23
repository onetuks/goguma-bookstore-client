<script setup lang="ts">
defineProps<{
  active: boolean
}>();
</script>

<template>
  <div class="property-wrapper">
    <svg
        class="history"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M20.0726 22.4451C17.896 24.1025 15.2358 25 12.5 25V22.6106C14.7128 22.6106 16.8646 21.8847 18.6251 20.5441C20.3856 19.2036 21.6578 17.3225 22.2464 15.1894C22.835 13.0562 22.7075 10.7889 21.8836 8.73524C21.0596 6.68154 19.5846 4.95487 17.6849 3.82009C15.7852 2.6853 13.5657 2.20509 11.3668 2.4531C9.16794 2.70111 7.11114 3.66365 5.51193 5.19307C3.91273 6.72249 2.85943 8.73433 2.51362 10.92C2.16781 13.1056 2.54858 15.3443 3.59753 17.2927L1.49366 18.4254C0.196822 16.0165 -0.273936 13.2487 0.153598 10.5466C0.581133 7.84441 1.88335 5.35713 3.86049 3.46627C5.83763 1.57541 8.3805 0.385395 11.099 0.0787742C13.8176 -0.227847 16.5616 0.365858 18.9103 1.76882C21.2589 3.17177 23.0824 5.3065 24.1011 7.84554C25.1198 10.3846 25.2774 13.1877 24.5497 15.8249C23.822 18.4621 22.2492 20.7878 20.0726 22.4451Z"
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
      />
      <path
          d="M18.9103 14.375H9.99999V6.87499H12.5V11.875H18.9103V14.375Z"
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
      />
    </svg>
  </div>

</template>

<style scoped>
.property-wrapper,
.property-wrapper * {
  box-sizing: border-box;
}
.property-wrapper {
  border-style: solid;
  border-color: var(--color-text-white, #ffffff);
  border-width: 0 2px 0 0;
  padding: 5px 26px 5px 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.history {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  overflow: visible;
}

</style>