import { defineStore } from 'pinia';

export const NotifyStore = defineStore('notify', {
  state: () => {
    return {
      isShowNotify: false,
    };
  },
  getters: {},
  actions: {
    showNotify() {
        this.isShowNotify = true;
    }
  },
});
