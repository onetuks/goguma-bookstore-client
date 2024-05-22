<template>
  <ZzimIcon is-zzim-prop="false" />
  <CheckBoxIcon />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ZzimIcon from './components/zzim/ZzimIcon.vue';
import CheckBoxIcon from "@/components/checkbox/CheckBoxIcon.vue";

@Options({
  components: {
    CheckBoxIcon,
    ZzimIcon,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
