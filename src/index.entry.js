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
    setAllData(state, payload){
      state.allData = payload;
    },
    setHost(state, payload){
      state.allHost = payload;
    },
    setStatus(state, payload){
      state.allStatus = payload;
    },
    updateShowFlg(state, payload){
      state.allData[payload.index].show = payload.value;
    },
    bulkUpdateShowFlg(state, val){
      state.allData.forEach((arr, index) => {
         state.allData[index].show = val;
      });
    },
    updateCheckBoxOnOff(state, payload){
      state[`all${payload.headTxt}`][payload.index].show = payload.value;
    }
  },

  actions:{
    toggleShow(context, obj){
      //テーブルレコードを更新
      context.state.allData.forEach(function(arr,index){
        if(arr[`${obj.headTxt.toLowerCase()}Name`] === obj.value){
          let commitObjAll = {
            "index": index,
            "value": obj.checked
          };
          context.commit('updateShowFlg', commitObjAll);
        }
      });
      //チェックボックスの状態を更新
      const commitObjChb = {
        "index": obj.chbIndex,
        "value": obj.checked,
        "headTxt": obj.headTxt
      };
      context.commit('updateCheckBoxOnOff', commitObjChb);
    },

    bulkCheck(context, obj){
      //テーブルレコードを更新
      context.commit('bulkUpdateShowFlg', obj.value);
      //チェックボックスの状態を更新
      context.state[`all${obj.headTxt}`].forEach(function(arr, index){
        obj.index = index;
        context.commit('updateCheckBoxOnOff', obj);
      });
    }

  },

  getters: {
    onlyShowData: state => {
      return state.allData.filter(record => record.show);
    },
    onlyNonCheckedData: state => headTxt => {
      return state[`all${headTxt}`].filter(record => !(record.show));
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
