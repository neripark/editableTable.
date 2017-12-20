//const jQuery = require('jQuery');
//const bootstrap = require('bootstrap');
import Vue from 'vue';
//import Axios from 'axios';
//const Axios = require('axios');
import eTableComponent from './component/eTable.vue';
import toast from './component/toast.vue';
//import from eTableRowComponent '../components/eTableRow.vue';

Vue.component('etable', eTableComponent);
Vue.component('toast', toast);

//Vue.config.productionTip = false

//インスタンス化
new Vue({
  el: '#eTable',
  template: '<etable/>',
  components: {
    eTableComponent
  }
})
new Vue({
  el: '#toastArea',
  template: '<toast/>',
  components: {
    toast
  }
})

//toastを各rowから呼び出すための記述
// var eventHub = new Vue();
// module.exports = eventHub;
//export default eventHub;


// ////////
// var vue = new Vue({
//   el: '#hub',
//   data:{
//     rowData: null
//   },
//   components: {
//     etableRow: require('./component/eTableRow.vue'),
//     toast: require('./component/toast.vue'),
//   }
// });
// ////////
// この記述は結局ダメだった。Exportできなかった。なぜ。。
// ////////


//////////////////////////////////////////////////
//テスト用
//////////////////////////////////////////////////

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

// var api2 = new Vue({
//   el: '#getJson',
//   data: {info: ""},
//   methods: {
//     getAll: function(){
//       Axios.get('/api/getGuestInfo.php')
//       .then(response => {
//         this.info = response.data;
//       })
//     }
//   }
// })

////////コンポーネントのテスト（静的データ）////////
//親
Vue.component('compotesttag', {
  template: '<child message="「静的データ」"/>'
});
//子
Vue.component('child', {
  props: ['message'],
  template: '<p>子Pタグ！データ：{{message}}</p>'
});

//インスタンス化
new Vue({
  el: '#compotest',
  template: '<compotesttag/>'
});

////////コンポーネントのテスト（動的データ）////////
//親
Vue.component('compotesttag2', {
  data: function(){
    return {
      xxx: 0
    }
  },
  template: '<child2 :message="this.xxx"/>',
  created: function(){
    this.xxx = Math.random();
    console.log(this.xxx);
  }
});
//子
Vue.component('child2', {
  props: ['message'],
  template: '<p>子Pタグ！データ：{{message}}</p>'
});

//インスタンス化
new Vue({
  el: '#compotest2',
  template: '<compotesttag2/>'
});

//以下のように、コンポーネントにスタイルを記述するのはだめらしい。おそらく単一コンポーネントのみ。
//リファレンスみたらなかった。
// Vue.component('compotesttag', {
//   template: '<child message="「静的データ」"/>',
//   style: 'color: red;'
// });
