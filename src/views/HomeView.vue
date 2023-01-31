<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is HomeView 58</h1>
  </div>
  <div v-if="isShowRefresh">
    <Notify :value="registration"></Notify>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeMount } from 'vue';
import Notify from '@/components/Notify.vue';
import { NotifyStore } from '../store/notify-sw';

let swNotify = NotifyStore();
//let isShowRefresh = swNotify.isShowNotify;
let isShowRefresh = ref(false);
let registration = ref(null);

const updateAvailable = (e:any) => {
  registration = e.detail
  isShowRefresh.value = true;
}

onBeforeMount(() => {
  document.addEventListener('swUpdated', updateAvailable, { once: true });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload()
    })
})
</script>

<style scoped>
.box {
  width: 1280px;
  border: 1px seagreen solid;
  max-width: 100%;
}
img {
  max-width: 100%;
}
</style>
