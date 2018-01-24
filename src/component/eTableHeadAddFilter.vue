<template lang="html">
  <th scope="col" @click="showPopover($event)">
    <span class="filterCol">{{headTxt}}</span>
    <span class="glyphicon glyphicon-filter"></span>
    <popover :showFlg="popoverShowFlg" :right="right" :headTxt="headTxt"></popover>
  </th>
</template>

<script>
import popover from './popover.vue'
export default {
  props: ['headTxt'],
  data: function(){
    return {
      popoverShowFlg: false,
      right: 0,
    }
  },
  components: {
    popover
  },
  methods: {
    showPopover(e){
      const offsetCenter = e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth) / 2;
      this.right = e.currentTarget.parentElement.offsetWidth - offsetCenter;
      this.selected = !(this.selected);
      this.popoverShowFlg = !(this.popoverShowFlg);
    }
  }
}
</script>

<style lang="scss">
  th{
    &.filterOn{ //フィルタpopoverが呼ばれたthに色をつける
      color: #52bd7e;
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
