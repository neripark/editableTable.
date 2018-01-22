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
    allStatus: [],
    allHosts: []
  },
  mutations:{
    setAllData(state, obj){
      state.allData = obj;
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
  store.commit('setAllData', response.data);
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
