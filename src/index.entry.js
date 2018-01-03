import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios'
// import {Popover, Switch, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';

//element-ui
// import ElementUI from 'element-ui'

import uiTestComponent from './component/uiTest.vue'

Vue.use(Vuex);
// Vue.use(ElementUI);

Vue.component('etable', eTableComponent);
Vue.component('toast', toast);
Vue.component('uitest', uiTestComponent);

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

//element-ui テスト
new Vue({
  el: "#uiTest",
  template: '<uitest/>',
  components: {
    uiTestComponent
  }
});



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
