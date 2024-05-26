<script setup lang="ts">
import {onMounted} from "vue";
import axios from "axios";
import {ClientProvider} from "@/views/login/ClientProvider";
import {useRouter} from "vue-router";

type RoleType = "USER" | "AUTHOR" | "ADMIN";
type LoginResponse = {
  appToken: string;
  isNewMember: boolean;
  loginId: number;
  name: string;
  roleTypes: RoleType[];
}

const login = async (clientProvider: ClientProvider, code: string): Promise<LoginResponse | void> => {
  axios.post(
      `http://localhost:8080/auth/${clientProvider}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${code}`,
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.appToken);
        useRouter().push("/");
      })
      .catch((error) => {
        console.error("failed to receive server access token: ", error);
      });
};

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("code")) {
    login("kakao", urlParams.get("code") as string);
  }
});

</script>

<template>
  <div class="login-handler-wrapper">
    <div>로그인 중입니다.</div>
  </div>
</template>

<style scoped>
.login-handler-wrapper {
  background-color: var(--color-background-primary);
  font-family: var(--font-family), sans-serif;
  font-size: var(--font-size-20);
  color: #6A3E37;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
}
</style>