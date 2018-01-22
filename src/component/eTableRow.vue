<template lang="html">
  <tbody>
    <tr v-for="(item, index) in onlyShowDatas" :key="item.key" @click="triggerToast((index));">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ item.guestName }}</td>
      <td>{{ item.hostName }}</td>
      <td>{{ item.status }}</td>
    </tr>
  </tbody>
</template>

<script>
import eventHub from '../hub.js';
export default {
  computed: {
    onlyShowDatas: function(){

      // let tmpArray = [];
      // console.log(typeof tmpArray);
      // tmpArray = this.$store.state.allData;
      // console.log(typeof tmpArray);
      // return tmpArray.filter(function(obj){
      //   return obj.show;
      return this.$store.getters.onlyShowData;
    }
  },
  data: function(){
    return {
      showRecordCnt: 0
    }
  },
  // filters: {
  //   fltr: function(){
  //     console.log('aaaa');
  //     console.log(this.$store.state.allData);
  //   }
  // },
  methods: {
    triggerToast: function (index){
      eventHub.$emit('showToast', this.allData[index]);
    },
    calcIndexNo: function(sh){
      // console.log(this.showRecordCnt);
      // console.log(sh);
      // console.log(this.showRecordCnt);
      //this.showRecordCnt = this.showRecordCnt + 1;



      // if(sh){
      //   this.showRecordCnt++;
      // }
      // return this.showRecordCnt;

      // return sh ? this.showRecordCnt + 1; this.showRecordCnt =++; : this.showRecordCnt;
      //return i;
    }
  }
}
</script>
