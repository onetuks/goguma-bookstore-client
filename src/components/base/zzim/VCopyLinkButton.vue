<script setup lang="ts">

const copyCurrentUrlToClipboard = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
  .then(() => {
    console.log('copied: ', currentUrl)
  })
  .catch(err => {
    console.error('failed', err);
  })
};

</script>

<template>
  <div class="frame-1237" @click="copyCurrentUrlToClipboard">
    <svg
        class="div12"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8461 5.63465C13.9082 5.63465 14.7692 4.77366 14.7692 3.71158C14.7692 2.64949 13.9082 1.7885 12.8461 1.7885C11.784 1.7885 10.9231 2.64949 10.9231 3.71158C10.9231 4.77366 11.784 5.63465 12.8461 5.63465ZM12.8461 7.07696C14.7048 7.07696 16.2115 5.57023 16.2115 3.71158C16.2115 1.85293 14.7048 0.346191 12.8461 0.346191C10.9875 0.346191 9.48075 1.85293 9.48075 3.71158C9.48075 4.04958 9.53058 4.37595 9.6233 4.68374L6.16861 6.75655C5.61368 6.35328 4.93076 6.11542 4.19229 6.11542C2.33364 6.11542 0.826904 7.62216 0.826904 9.48081C0.826904 11.3395 2.33364 12.8462 4.19229 12.8462C5.4176 12.8462 6.48997 12.1914 7.07852 11.2125L10.5848 13.3163C10.4921 13.6241 10.4423 13.9505 10.4423 14.2885C10.4423 16.1471 11.949 17.6539 13.8077 17.6539C15.6663 17.6539 17.1731 16.1471 17.1731 14.2885C17.1731 12.4298 15.6663 10.9231 13.8077 10.9231C12.8053 10.9231 11.9053 11.3613 11.2887 12.0567L7.54192 9.80858C7.55234 9.70073 7.55767 9.59139 7.55767 9.48081C7.55767 8.89145 7.40618 8.33749 7.14001 7.85572L10.3272 5.9434C10.9437 6.63873 11.8438 7.07696 12.8461 7.07696ZM13.8077 16.2116C14.8698 16.2116 15.7308 15.3506 15.7308 14.2885C15.7308 13.2264 14.8698 12.3654 13.8077 12.3654C12.7456 12.3654 11.8846 13.2264 11.8846 14.2885C11.8846 15.3506 12.7456 16.2116 13.8077 16.2116ZM6.11537 9.48081C6.11537 10.5429 5.25437 11.4039 4.19229 11.4039C3.1302 11.4039 2.26921 10.5429 2.26921 9.48081C2.26921 8.41872 3.1302 7.55773 4.19229 7.55773C5.25437 7.55773 6.11537 8.41872 6.11537 9.48081Z"
          fill="black"
      />
    </svg>
  </div>
</template>

<style scoped>
.frame-1237 {
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color-border-tertiary, #756357);
  border-width: 1px;
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
.div12 {
  flex-shrink: 0;
  width: 16px;
  height: 17px;
  position: relative;
  overflow: visible;
}
</style>