<script lang="ts" setup>
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <div class="home-button">
    <svg
        class="home"
        fill="none"
        height="23"
        viewBox="0 0 25 23"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          :fill="active ? 'var(--color-button-secondary)' : 'white'"
          d="M12.1881 1.27185C12.3532 1.11591 12.6468 1.11592 12.8119 1.27185L23.7494 11.6018C23.8192 11.6677 23.8451 11.7425 23.8451 11.8056V21.5243C23.8451 21.6402 23.7257 21.8451 23.4375 21.8451H15.625C15.3368 21.8451 15.2174 21.6402 15.2174 21.5243V15.6216C15.2174 14.1074 13.9377 12.991 12.5 12.991C11.0623 12.991 9.7826 14.1074 9.7826 15.6216V21.5243C9.7826 21.6402 9.66319 21.8451 9.375 21.8451H1.5625C1.27431 21.8451 1.1549 21.6402 1.1549 21.5243V11.8056C1.1549 11.7425 1.18083 11.6677 1.25063 11.6018L12.1881 1.27185Z"
          stroke-width="2.3098"
      />
    </svg>
  </div>

</template>

<style scoped>
.home-button {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
}
</style>