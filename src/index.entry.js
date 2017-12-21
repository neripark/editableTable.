import Vue from 'vue';
import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';

Vue.component('etable', eTableComponent);
Vue.component('toast', toast);

//インスタンス化
new Vue({
  el: '#eTable',
  template: '<etable/>',
  components: {
    eTableComponent
  }
})
new Vue({
  el: '#toastArea',
  template: '<toast/>',
  components: {
    toast
  }
})
//
