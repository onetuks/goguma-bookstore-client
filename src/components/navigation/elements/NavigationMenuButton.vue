<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <div class="menu-button">
    <svg
        fill="none"
        height="15"
        viewBox="0 0 25 15"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          d="M0 1.09585C0 0.490629 0.498483 0 1.11339 0H23.8866C24.5015 0 25 0.490629 25 1.09585C25 1.70107 24.5015 2.1917 23.8866 2.1917H1.11339C0.498483 2.1917 0 1.70107 0 1.09585Z"
      />
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          d="M0 13.9041C0 13.2989 0.498483 12.8083 1.11339 12.8083H23.8866C24.5015 12.8083 25 13.2989 25 13.9041C25 14.5094 24.5015 15 23.8866 15H1.11339C0.498483 15 0 14.5094 0 13.9041Z"
      />
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          d="M1.11339 6.40415C0.498483 6.40415 0 6.89478 0 7.5C0 8.10522 0.498483 8.59585 1.11339 8.59585H23.8866C24.5015 8.59585 25 8.10522 25 7.5C25 6.89478 24.5015 6.40415 23.8866 6.40415H1.11339Z"
      />
    </svg>
  </div>

</template>

<style scoped>
.menu-button {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
}
</style>