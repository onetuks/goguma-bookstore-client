<script lang="ts" setup>

</script>

<template>
  <div class="play-button">
    <svg
        class="polygon-2"
        fill="none"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M11.26 5.26336C12.7819 6.14201 13.5428 6.58133 13.8097 7.14844C14.0634 7.68778 14.0634 8.31222 13.8097 8.85156C13.5428 9.41867 12.7819 9.85799 11.26 10.7366L8.74 12.1916C7.21814 13.0702 6.45721 13.5095 5.83264 13.4571C5.23866 13.4072 4.69789 13.095 4.3577 12.6055C4 12.0909 4 11.2122 4 9.45492L4 6.54507C4 4.78778 4 3.90914 4.3577 3.39447C4.69789 2.90501 5.23866 2.59279 5.83264 2.54291C6.45721 2.49047 7.21814 2.92979 8.74 3.80844L11.26 5.26336Z"
          fill="white"
      />
    </svg>
  </div>

</template>

<style scoped>
.play-button,
.play-button * {
  box-sizing: border-box;
}

.play-button {
  background: #a9a9a9;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: relative;
}

.polygon-2 {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}

</style>