<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <div class="mypage-button">
    <svg
        fill="none"
        height="25"
        viewBox="0 0 25 25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          clip-rule="evenodd"
          d="M18.75 6.25C18.75 9.70178 15.9518 12.5 12.5 12.5C9.04822 12.5 6.25 9.70178 6.25 6.25C6.25 2.79822 9.04822 0 12.5 0C15.9518 0 18.75 2.79822 18.75 6.25ZM16.7763 6.25C16.7763 8.61174 14.8617 10.5263 12.5 10.5263C10.1383 10.5263 8.22368 8.61174 8.22368 6.25C8.22368 3.88826 10.1383 1.97368 12.5 1.97368C14.8617 1.97368 16.7763 3.88826 16.7763 6.25Z"
          fill-rule="evenodd"
      />
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          clip-rule="evenodd"
          d="M0 19.3257C0 16.4189 2.3564 14.0625 5.26316 14.0625H19.7368C22.6436 14.0625 25 16.4189 25 19.3257V25H0V19.3257ZM1.97368 19.3257C1.97368 17.5089 3.44643 16.0362 5.26316 16.0362H19.7368C21.5536 16.0362 23.0263 17.5089 23.0263 19.3257V23.0263H1.97368V19.3257Z"
          fill-rule="evenodd"
      />
    </svg>
  </div>

</template>

<style scoped>
.mypage-button {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
}
</style>