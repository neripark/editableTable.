//const Vue = require('vue/dist/vue.js');
import Vue from 'vue';
const Axios = require('axios');

import eTableComponent from './component/eTable.vue';
//import from eTableRowComponent '../components/eTableRow.vue';

//Vue.component(eTableComponent);

Vue.config.productionTip = false

//インスタンス化
//var eTable = new Vue({
new Vue({
  el: '#eTable',
  template: '<etable/>',
  components: { eTableComponent }
})





//テスト用
var app1 = new Vue({
  el: '#app1',
  data: () => {
    return { message: "hello vue!" };
  }
});

var api = new Vue({
  el: '#getInfoTrigger',
  data: {info: 1},
  methods: {
    getAll: function(){
      this.info += 1;
    }
  }
})

var api2 = new Vue({
  el: '#getJson',
  data: {info: ""},
  methods: {
    getAll: function(){
      Axios.get('/api/getGuestInfo.php')
      .then(response => {
        this.info = response.data;
      })
    }
  }
})
