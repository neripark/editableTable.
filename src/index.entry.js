import Vue from 'vue';
import Vuex from 'vuex';
import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';

Vue.component('etable', eTableComponent);
Vue.component('toast', toast);
Vue.use(Vuex);


//vuexテスト用
const store = new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});

new Vue({
  el: '#testVuex',
  // data: {
  //     cccc: store.state.count
  // },
  // dataではなぜいけないのか？最初からリアクティブではないから？
  computed: {
    cccc(){
      return store.state.count
    }
  },
  methods: {
    up(){
      store.commit('increment');
    },
    down(){
      store.commit('decrement');
    }
  }
});


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
