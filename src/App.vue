<template>
  <ZzimIcon :is-zzim='true' />
  <CheckBoxIcon :is-checked='true' />
  <SmallButton button-name='버튼' button-state="default" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ZzimIcon from './components/zzim/ZzimIcon.vue';
import CheckBoxIcon from "@/components/checkbox/CheckBoxIcon.vue";
import SmallButton from "@/components/buttons/small/SmallButton.vue";

@Options({
  components: {
    SmallButton,
    CheckBoxIcon,
    ZzimIcon,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url("https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css");
@import '@/assets/styles/var.css';
#app {
  font-family: 'NanumSquare', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
