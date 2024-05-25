<script lang="ts" setup>
import {useRouter} from "vue-router";

defineProps<{
  hasAlarm: boolean;
}>();

const moveToAlarmPage = () => {
  useRouter().push('/alarm');
}
</script>

<template>
  <div
      class="valarm-wrapper"
      @click="moveToAlarmPage"
  >
    <div class="valarm">
      <svg
          class="alarm-button"
          fill="none"
          height="20"
          viewBox="0 0 16 20"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            clip-rule="evenodd"
            d="M15.7703 18C15.911 18 16.0187 17.8907 15.9973 17.7696L13.7441 5.01512C13.7423 5.00505 13.7414 4.9948 13.7414 4.98462C13.7319 2.23026 11.165 0 8 0C4.83499 0 2.26813 2.23026 2.25861 4.98462C2.25857 4.9948 2.25769 5.00505 2.25591 5.01512L0.00271981 17.7696C-0.0186827 17.8907 0.0889529 18 0.229706 18H5.47378C5.60061 18 5.70223 18.0898 5.71474 18.1997C5.82982 19.2105 6.80904 20 8 20C9.19096 20 10.1702 19.2105 10.2853 18.1997C10.2978 18.0898 10.3994 18 10.5262 18H15.7703ZM12.019 5V5.09941C12.019 5.1096 12.0199 5.11976 12.0217 5.12983L13.9896 16.2696C14.011 16.3907 13.9034 16.5 13.7626 16.5H2.25844C2.11769 16.5 1.989 16.3907 2.0104 16.2696L3.97834 5.12983C3.98011 5.11976 3.98101 5.1096 3.98101 5.09942V5C3.98101 3.067 5.78037 1.5 8 1.5C10.2196 1.5 12.0189 3 12.019 5ZM8.52896 18.1947C8.5784 18.093 8.47132 18 8.34449 18H7.65551C7.52868 18 7.4216 18.093 7.47104 18.1947C7.55823 18.3741 7.76224 18.5 8 18.5C8.23776 18.5 8.44177 18.3741 8.52896 18.1947Z"
            fill="white"
            fill-rule="evenodd"
        />
      </svg>
      <div v-if="hasAlarm" class="red-dot"></div>
    </div>
  </div>
</template>

<style scoped>
.valarm {
  box-sizing: border-box;
  width: 18px;
  height: 21px;
  position: relative;
}

.valarm-wrapper {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  position: relative;
}

.alarm-button {
  width: 88.89%;
  height: 95.24%;
  position: absolute;
  right: 11.11%;
  top: 4.76%;
  overflow: visible;
}

.red-dot {
  background: #ff0000;
  border-radius: 50%;
  width: 22.22%;
  height: 19.05%;
  position: absolute;
  left: 77.78%;
  bottom: 80.95%;
}

</style>