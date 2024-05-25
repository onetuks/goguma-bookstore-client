<template>
  <h1>공용 컴포넌트</h1>
  <div>
    <h4>상품정보 카드</h4>
    <BookDetailCard
        :book-id="1"
        title="안녕둔촌주공아파트"
        author-nickname="홍길동과 양반들"
        publisher="동해번쩍북스"
        :delivery-fee="3000"
        :price="20000"
        :sales-rate="10"
        stock-count="4"
        review-score="3.4"/>
    <BookDetailCard
        :book-id="1"
        title="안녕둔촌주공아파트"
        author-nickname="홍길동과 양반들"
        publisher="동해번쩍북스"
        :delivery-fee="3000"
        :price="20000"
        :sales-rate="10"
        stock-count="0"
        review-score="3.4"/>
  </div>
  <div>
    <h4>에러 아이콘</h4>
    <VErrorIcon/>
  </div>
  <div>
    <h4>판매중지/재개버튼</h4>
    <BookSaleButton :onSale='true'/>
    <BookSaleButton :onSale='false'/>
  </div>
  <div style="display: flex; gap: 15px">
    <h4>라벨</h4>
    <div style="flex-direction: row">
      <h5>입점승인</h5>
      <VLabel label-type='승인완료'/>
      <VLabel label-type='반려'/>
      <VLabel label-type='검토중'/>
    </div>
    <div style="flex-direction: row">
      <h5>신간등록검토</h5>
      <VLabel label-type='미검토'/>
      <VLabel label-type='검토완료'/>
    </div>
    <div style="flex-direction: row">
      <h5>발송상태</h5>
      <VLabel label-type='승인완료'/>
      <VLabel label-type='접수완료'/>
      <VLabel label-type='발송완료'/>
      <VLabel label-type='배송완료'/>
      <VLabel label-type='취소처리'/>
    </div>
    <div style="flex-direction: row">
      <h5>카테고리</h5>
      <VLabel label-type='시집'/>
      <VLabel label-type='에세이'/>
      <VLabel label-type='여행'/>
      <VLabel label-type='사진집'/>
      <VLabel label-type='일러스트'/>
      <VLabel label-type='카툰'/>
      <VLabel label-type='매거진'/>
      <VLabel label-type='소설'/>
      <VLabel label-type='엽서'/>
      <VLabel label-type='스티커'/>
      <VLabel label-type='액세서리'/>
      <VLabel label-type='기타'/>
      <VLabel label-type='문화생활'/>
      <VLabel label-type='강좌'/>
    </div>
  </div>
  <div>
    <h4>라디오버튼</h4>
    <div style="display: flex">
      <VRadioBox :checked='true'/>
      <VRadioBox :checked='false'/>
    </div>
  </div>
  <div>
    <h4>도서 상세 페이지 컨트롤</h4>
    <BookDetailController/>
  </div>
  <div>
    <h4>정렬</h4>
    <h6>후기정렬기준</h6>
    <VSelectBox select-box-type="review"/>
    <h6>도서정렬기준</h6>
    <VSelectBox select-box-type="book"/>
  </div>
  <div>
    <h4>별점</h4>
    <ReviewStars/>
  </div>
  <div>
    <h4>메뉴 리스트</h4>
    <MenuItem menu-type="서평관리"/>
  </div>
  <div style="background-color: lightgray">
    <h4>독자용 상단바</h4>
    <HeaderBar page-title="여기에 제목"/>
    <hr>
    <h4>유통시스템 상단바</h4>
    <ScmHeaderBar/>
    <hr>
  </div>
  <div style="background-color: gray">
    <h4>알림 아이콘</h4>
    <AlarmIcon :has-alarm='true'/>
    <AlarmIcon :has-alarm='false'/>
  </div>
  <div>
    <h4>플레이버튼</h4>
    <PlayButton/>
    <hr>
  </div>
  <div>
    <h4>상태 컴포넌트</h4>
    <h6>배송상태</h6>
    <DeliveryStatus status="배송준비중"/>
    <DeliveryStatus status="배송중"/>
    <DeliveryStatus status="배송완료"/>
    <DeliveryStatus status="주문완료"/>
    <hr>
    <h6>문의상태</h6>
    <FnAStatus status="미답변"/>
    <FnAStatus status="답변완료"/>
  </div>
  <div>
    <h4>네비게이션바</h4>
    <NavigationBar/>
    <hr>
  </div>
  <div>
    <h4>버튼</h4>
    <div>
      <h5>소버튼</h5>
      <SmallButton button-name='버튼' button-state="default"/>
      <SmallButton button-name='버튼' button-state="disabled"/>
      <SmallButton button-name='버튼' button-state="emphasis"/>
    </div>
    <div>
      <h5>대버튼</h5>
      <BigButton button-name='버튼' button-state="default"/>
      <BigButton button-name='버튼' button-state="disabled"/>
      <BigButton button-name='버튼' button-state="emphasis"/>
    </div>
    <div>
      <h5>구독버튼</h5>
      <SubscribeButton :is-subscribed='true'/>
      <SubscribeButton :is-subscribed='false'/>
    </div>
    <hr>
  </div>
  <div>
    <h4>찜콩</h4>
    <VZzimKongButton :is-zzim='true'/>
    <VZzimKongButton :is-zzim='false'/>
    <hr>
  </div>
  <div>
    <h4>체크박스</h4>
    <CheckBox :checked='true'/>
    <CheckBox :checked='false'/>
    <hr>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import VZzimKongButton from "@/components/base/zzim/VZzimKongButton.vue";
import VCheckBox from "@/components/base/checkbox/VCheckBox.vue";
import VSmallButton from "@/components/base/button/VSmallButton.vue";
import VBigButton from "@/components/base/button/VBigButton.vue";
import SubscribeButton from "@/components/base/button/VSubscribeButton.vue";
import NavigationBar from "@/components/base/navigation/TheNavigationBar.vue";
import DeliveryStatus from "@/components/status/DeliveryStatus.vue";
import PlayButton from "@/components/music/PlayButton.vue";
import AlarmIcon from "@/components/base/alarm/VAlarmIcon.vue";
import HeaderBar from "@/components/base/header/TheHeaderBar.vue";
import ScmHeaderBar from "@/components/base/header/TheScmHeaderBar.vue";
import FnAStatus from "@/components/status/InquiryStatus.vue";
import MenuItem from "@/components/base/menu/MenuItem.vue";
import ReviewStars from "@/components/review/ReviewStars.vue";
import VSelectBox from "@/components/base/selectbox/VSelectBox.vue";
import BookDetailController from "@/components/book/detail/BookDetailController.vue";
import VRadioBox from "@/components/base/radiobox/VRadioBox.vue";
import VLabel from "@/components/base/label/VLabel.vue";
import BookSaleButton from "@/components/book/BookSaleButton.vue";
import VErrorIcon from "@/components/base/error/VErrorIcon.vue";
import BookDetailCard from "@/components/book/detail/card/BookDetailCard.vue";

@Options({
  components: {
    BookDetailCard,
    VErrorIcon,
    BookSaleButton,
    VLabel,
    VRadioBox,
    BookDetailController,
    VSelectBox,
    ReviewStars,
    MenuItem,
    FnAStatus,
    ScmHeaderBar,
    HeaderBar,
    AlarmIcon,
    PlayButton,
    DeliveryStatus,
    VZzimKongButton,
    CheckBox: VCheckBox,
    SmallButton: VSmallButton,
    BigButton: VBigButton,
    SubscribeButton,
    NavigationBar,
  },
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
