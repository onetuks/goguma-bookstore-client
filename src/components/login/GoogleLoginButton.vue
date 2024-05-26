<script setup lang="ts">

</script>

<template>
  <div class="google-login-button-wrapper">
    <img class="google-login-icon"
         src="@/assets/img/google-icon.png"
         alt="google-icon"/>
    <div class="google-login-button-text">구글 계정으로 로그인</div>
    <div class="button-idle"></div>
  </div>
</template>

<style scoped>

.google-login-button-wrapper {
  border-radius: 20px;
  border-style: solid;
  border-color: var(--color-text-black, #000000);
  border-width: 1px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: relative;
}

.google-login-icon {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  position: relative;
  object-fit: cover;
}

.google-login-button-text {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
  flex: 1;
}
</style>