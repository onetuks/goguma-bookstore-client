<script setup lang="ts">
const getKakaoAuthUrl = (): string => {
  const CLIENT_ID = process.env.VUE_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/login/oauth2/callback`;
  return `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=select_account`;
}
</script>

<template>
  <a class="kakao-login-button-wrapper"
     :href="getKakaoAuthUrl()">
    <img class="kakao-login-icon"
         src="@/assets/img/kakao-icon.png"
         alt="kakao-icon"/>
    <div class="kakao-login-button-text">카카오 계정으로 로그인</div>
    <div class="button-idle"></div>
  </a>
</template>

<style scoped>

.kakao-login-button-wrapper {
  text-decoration: none;
  background: #fde500;
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

.kakao-login-button-text {
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-16, 16px);
  position: relative;
}
</style>