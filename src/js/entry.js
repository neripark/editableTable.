const Vue = require('vue/dist/vue.js');
const Axios = require('axios');


//テスト用
var app1 = new Vue({
  el: '#app1',
  data: () => {
    return { message: "hello vue!" };
  }
});

//テーブル行
var tableRow = new Vue({
  el: '#vueTable',
  data: () => {
    return {rows: [
      {guestName: 'おきあゆりょうたろう', hostName: 'neri', status: '回答待ち'},
      {guestName: 'いしだあきら', hostName: 'neri', status: '回答待ち'},
      {guestName: 'ほしそういちろう', hostName: 'neri', status: '○'},
      {guestName: 'わかもとのりお', hostName: 'neri', status: '×'},
      {guestName: 'よながつばさ', hostName: 'neri', status: '未'}
    ]}
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

