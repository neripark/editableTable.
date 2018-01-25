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
    allData: [],
    allHost: [],
    allStatus: []
  },
  mutations:{
    setAllData(state, obj){
      state.allData = obj;
    },
    setHost(state, obj){
      state.allHost = obj;
    },
    setStatus(state, obj){
      state.allStatus = obj;
    },
    updateShowFlg(state, payload){
      //console.log(state.allData[payload.index].show);
      state.allData[payload.index].show = payload.value;
    }
  },
  actions:{
    toggleShowHost(context, obj){
      // console.log(context);
      // console.log(obj.headTxt);
      // console.log(obj.headTxt.toLowerCase());
      // console.log(obj.value);
      // console.log(obj.checked);
      // console.log(context);
      // context.state[`all${obj.headTxt}`].forEach(function(arr){
      context.state.allData.forEach(function(arr,index){
        if(arr[`${obj.headTxt.toLowerCase()}Name`] === obj.value){
          //console.log(arr.guestName);
          console.log(index);
          let commitObj = {"index": index, "value": obj.checked};//id, boolean
          context.commit('updateShowFlg', commitObj);
        }
      });
      console.log('------------------');
    }
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
  store.commit('setAllData', response.data);
  //仮
  // store.state.allData[0].show = false;
  // store.state.allData[1].show = false;
  // store.state.allData[5].show = false;
});
Axios.get('/api/selectAllHosts.php')
.then(response => {
  store.commit('setHost', response.data);
  // store.state.allHost[4].show = false;
  // store.state.allHost[6].show = false;
  // store.state.allHost[7].show = false;
});
Axios.get('/api/selectAllStatus.php')
.then(response => {
  store.commit('setStatus', response.data);
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
