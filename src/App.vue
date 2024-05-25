<template>
  <RouterView/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  components: {},
})
export default class App extends Vue {
}
</script>

<style>
@import '@/assets/fonts.css';
@import '@/assets/var.css';

#app {
  font-family: 'NanumSquare', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--color-background-primary);
}
</style>
