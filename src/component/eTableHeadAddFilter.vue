<template lang="html">
  <th scope="col" @click="showPo($event)" :class="{poOn:poStyleFlg}">
    <span class="filterCol">{{headTxt}}</span>
    <span class="glyphicon glyphicon-filter"></span>
    <popover :showFlg="poShowFlg" :right="right" :headTxt="headTxt" @poToggle="poToggleStyle"></popover>
  </th>
</template>

<script>
import popover from './popover.vue'
export default {
  props: ['headTxt'],
  data: function(){
    return {
      poShowFlg: false,
      poStyleFlg: false,
      right: 0,
    }
  },
  components: {
    popover
  },
  methods: {
    showPo(e){
      const offsetCenter = e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth) / 2;
      this.right = e.currentTarget.parentElement.offsetWidth - offsetCenter;
      this.selected = !(this.selected);
      this.poShowFlg = !(this.poShowFlg);
    },
    poToggleStyle(bool){ //popoverのtransition前後で発火
      this.poStyleFlg = bool;
    }
  }
}
</script>

<style lang="scss">
  th{
    &.filterOn{ //フィルタpopoverが呼ばれたthに色をつける
      color: #52bd7e;
    }
    &.poOn > span{
      position: relative;
      z-index: 1055;
    }
    .filterCol{
      box-sizing: border-box;
      display: inline-block;
      .glyphicon-filter:before{
        //フィルタアイコンの大きさ調整
        font-size: 0.8em;
        padding-left: 0.4em;
      }
    }
  }
</style>
