<script setup lang="ts">

</script>

<template>
  <div class="naver-login-button-wrapper">
    <img class="naver-login-icon"
         src="@/assets/img/naver-icon.png"
         alt="naver-icon"/>
    <div class="button-text">네이버 계정으로 로그인</div>
    <div class="button-idle"></div>
  </div>
</template>

<style scoped>

.naver-login-button-wrapper {
  background: #00c73c;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: relative;
}

.naver-login-icon {
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

.button-text {
  color: #ffffff;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
  flex: 1;
}
</style>