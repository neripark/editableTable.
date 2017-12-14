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
			{guestName: 'おきあゆりょうたろう', hostName: 'neri', status: '送った'},
			{guestName: 'いしだあきら', hostName: 'neri', status: '送った'},
			{guestName: 'ほしそういちろう', hostName: 'neri', status: '○'},
			{guestName: 'わかもとのりお', hostName: 'neri', status: '×'}
		]}
	}
});

//console.log($('h1').text());
var api = new Vue({
	el: '#getInfoTrigger',
	data: {info: ""},
	methods: {
		getAll: function(){
			// console.log(this.xxxx);
			// this.xxxx += 1;
			
		}
	}
})