<script setup lang="ts">

import NaverLoginButton from "@/components/login/NaverLoginButton.vue";
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";
import KakaoLoginButton from "@/components/login/KakaoLoginButton.vue";

</script>

<template>
  <div class="login-view-wrapper">
    <div class="login-text">로그인</div>
    <div class="logo-image">
      <img src="@/assets/img/default-profile-img.png" alt="logo" width="300" height="300"/>
    </div>
    <div style="width: 100%; display: flex; flex-direction: column; gap: 10px">
      <KakaoLoginButton/>
      <GoogleLoginButton/>
      <NaverLoginButton/>
    </div>
  </div>

</template>

<style scoped>
.login-view-wrapper {
  box-sizing: border-box;
  background: var(--color-background-primary, #fefdf6);
  border-radius: 30px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 30px;
}

.login-text {
  border-style: solid;
  border-color: var(--color-border-tertiary, #756357);
  border-width: 0 0 1px 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  text-align: center;
  font-family: var(--font-family-extra-bold, "NanumSquare-ExtraBold"), sans-serif;
  font-size: var(--font-size-20, 20px);
  position: relative;
}

.logo-image {
  border-style: solid;
  border-color: #d9d9d9;
  border-width: 3px;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 50px;
}

</style>