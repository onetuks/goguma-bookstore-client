<template>
  <h1>공용 컴포넌트</h1>
  <div></div>
  <div>
    <h4>플레이버튼</h4>
    <PlayButton />
    <hr>
  </div>
  <div>
    <h4>배송상태</h4>
    <DeliveryStatus status="배송준비중" />
    <DeliveryStatus status="배송중" />
    <DeliveryStatus status="배송완료" />
    <DeliveryStatus status="주문완료" />
    <hr>
  </div>
  <div>
    <h4>네비게이션바</h4>
    <NavigationBar />
    <hr>
  </div>
  <div>
    <h4>버튼</h4>
    <div>
      <h5>소버튼</h5>
      <SmallButton button-name='버튼' button-state="default" />
      <SmallButton button-name='버튼' button-state="disabled" />
      <SmallButton button-name='버튼' button-state="emphasis" />
    </div>
    <div>
      <h5>대버튼</h5>
      <BigButton button-name='버튼' button-state="default" />
      <BigButton button-name='버튼' button-state="disabled" />
      <BigButton button-name='버튼' button-state="emphasis" />
    </div>
    <div>
      <h5>구독버튼</h5>
      <SubscribeButton :is-subscribed='true' />
      <SubscribeButton :is-subscribed='false' />
    </div>
    <hr>
  </div>
  <div>
    <h4>찜콩</h4>
    <ZzimKong :is-zzim='true' />
    <ZzimKong :is-zzim='false' />
    <hr>
  </div>
  <div>
    <h4>체크박스</h4>
    <CheckBox :is-checked='true' />
    <CheckBox :is-checked='false' />
    <hr>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ZzimKong from "@/components/zzim/ZzimKong.vue";
import CheckBox from "@/components/checkbox/CheckBox.vue";
import SmallButton from "@/components/buttons/SmallButton.vue";
import BigButton from "@/components/buttons/BigButton.vue";
import SubscribeButton from "@/components/buttons/SubscribeButton.vue";
import NavigationBar from "@/components/navigation/NavigationBar.vue";
import DeliveryStatus from "@/components/delivery/DeliveryStatus.vue";
import PlayButton from "@/components/music/PlayButton.vue";

@Options({
  components: {
    PlayButton,
    DeliveryStatus,
    ZzimKong,
    CheckBox,
    SmallButton,
    BigButton,
    SubscribeButton,
    NavigationBar,
  },
})
export default class App extends Vue {}
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
}
</style>
