import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';
import newRecordButton from './component/newRecordButton.vue';
import './sass/style.scss';
// import $ from 'jquery/dist/jquery.min.js';
// impor＄t jquery from 'jquery/dist/fugafuga';
// import popper from 'popper.js';
// import bootstrap from 'bootstrap';

// (jquery)();
// (popper)();
// (bootstrap)();

Vue.use(Vuex);
Vue.component('etable', eTableComponent);
Vue.component('toast', toast);
Vue.component('newRecordButton', newRecordButton);

//store
const store = new Vuex.Store({

  state: {
    allData: [],
    allHost: [],
    allStatus: []
  },

  mutations:{

    /* onload */
    setAllData(state, payload){state.allData = payload;},
    setHost(state, payload){state.allHost = payload;},
    setStatus(state, payload){state.allStatus = payload;},

    /* event */
    updateShowFlg(state, payload){
      state.allData[payload.tableRecordIndex][`showFlg_${payload.headTxt}`] = payload.value;
    },

    bulkUpdateShowFlg(state, payload){
      state.allData.forEach((arr, index) => {
        state.allData[index][`showFlg_${payload.headTxt}`] = payload.value;
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
        if(arr[`${obj.headTxt.toLowerCase()}Name`] === obj.label){
          obj.tableRecordIndex = index;
          context.commit('updateShowFlg', obj);
        }
      });
      context.commit('updateCheckBoxOnOff', obj);
    },

    bulkCheck(context, obj){
      //テーブルレコードを更新
      context.commit('bulkUpdateShowFlg', obj);
      //チェックボックスの状態を更新
      context.state[`all${obj.headTxt}`].forEach(function(arr, index){
        obj.index = index;
        context.commit('updateCheckBoxOnOff', obj);
      });
    }

  },

  getters: {
    onlyShowData: state => {
      return state.allData.filter(record => ((record.showFlg_Status && record.showFlg_Host)));
    },
    onlyNonCheckedData: state => headTxt => {
      return state[`all${headTxt}`].filter(record => !(record.show));
    }
  }
});

//ストアに初期データセット
Axios.get('/stub/guestData.json')
.then(response => {
  //レスポンスデータにフィルタの数だけフラグをセット
  Object.keys(response.data).forEach(function(i){
    this[i].showFlg_Host = true;
    this[i].showFlg_Status = true;
  }, response.data);
  store.commit('setAllData', response.data);
});

Axios.get('/stub/allHosts.json')
.then(response => {
  store.commit('setHost', response.data);
});

Axios.get('/stub/allStatus.json')
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
new Vue({
  el: '#newRecordButton',
  template: '<newRecordButton/>'
});
