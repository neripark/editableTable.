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
const store = new Vuex.Store({
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
      state.allData[payload.index].show = payload.value;
    },
    updateCheckBoxOnOff(state, payload){
      state[`all${payload.headTxt}`][payload.index].show = payload.value;
    }
  },
  actions:{
    toggleShow(context, obj){
      //テーブルレコードのフィルタ処理をcommit
      context.state.allData.forEach(function(arr,index){
        if(arr[`${obj.headTxt.toLowerCase()}Name`] === obj.value){
          let commitObjAll = {
            "index": index,
            "value": obj.checked
          };
          context.commit('updateShowFlg', commitObjAll);
        }
      });
      //チェックボックスの状態を更新処理をcommit
      const commitObjChb = {
        "index": obj.chbIndex,
        "value": obj.checked,
        "headTxt": obj.headTxt
      };
      context.commit('updateCheckBoxOnOff', commitObjChb);
    }
  },
  getters: {
    onlyShowData: state => {
      return state.allData.filter(record => record.show);
    },
    // onlyNonCheckedData: state => headTxt => {
    //   return state[`all${headTxt}`].filter(record => record.show);
    // }
    onlyNonCheckedData: function(state){
      return function(headTxt){
        return state[`all${headTxt}`].filter(record => !(record.show));
      }
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
