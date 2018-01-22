import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';
import './sass/style.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

Vue.use(Vuex);
Vue.component('etable', eTableComponent);
Vue.component('toast', toast);

//store
let store = new Vuex.Store({
  state: {
    allData: [
      {guestGroup: "G1",guestId: "0005",guestName: "よなが",hostName: "koteiData",show: true,status: "未",statusId: "01"},
      {guestGroup: "G1",guestId: "0006",guestName: "つばさ",hostName: "koteiData",show: true,status: "未",statusId: "01"}
    ],
    allStatus: {},
    allHosts: {}
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
    onlyShowData: state => {
      return state.allData.filter(record => record.show);
    }
  }
});

//ストアに初期データセット
Axios.get('/api/selectAll.php')
.then(response => {
  // store.state.allData = response.data;
  console.log(response.data[0]);
  console.log(store.state.allData[0]);
  //仮
  // store.state.allData[0].show = false;
  // store.state.allData[1].show = false;
  // store.state.allData[5].show = false;
});
Axios.get('/api/selectAllStatus.php')
.then(response => {
  store.state.allStatus = response.data;
});
Axios.get('/api/selectAllHosts.php')
.then(response => {
  store.state.allHosts = response.data;
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
