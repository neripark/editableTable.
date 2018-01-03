import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';

Vue.use(Vuex);
Vue.component('etable', eTableComponent);
Vue.component('toast', toast);

//store
const store = new Vuex.Store({
  state: {
    allData: {}
  },
  mutations:{
    saveAllData(tmp){
      state = tmp;
    }
  },
  actions:{
    // getAllData(){
    //
    // }
  },
  getters: {
    getUniqueStatuses: state => {
      return state.allData;
    }
  }
});

//ストアに初期データセット
Axios.get('/api/selectAll.php')
.then(response => {
  store.state.allData = response.data;
});


//vuexテスト用
// const store = new Vuex.Store({
//   state: {
//     count:0
//   },
//   mutations: {
//     increment: state => state.count++,
//     decrement: state => state.count--
//   }
// });
//
// new Vue({
//   el: '#testVuex',
//   // data: {
//   //     cccc: store.state.count
//   // },
//   // dataではなぜいけないのか？最初からリアクティブではないから？
//   computed: {
//     cccc(){
//       return store.state.count
//     }
//   },
//   methods: {
//     up(){
//       store.commit('increment');
//     },
//     down(){
//       store.commit('decrement');
//     }
//   }
// });


//インスタンス化
new Vue({
  el: '#eTable',
  store,
  template: '<etable/>',
  components: {
    eTableComponent
  }
})
new Vue({
  el: '#toastArea',
  store,
  template: '<toast/>',
  components: {
    toast
  }
})
//
