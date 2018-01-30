<template lang="html">
  <th scope="col" @click="showPo" :class="{poOn:poStyleFlg}">
    <span class="filterCol">{{headTxt}}</span>
    <span class="glyphicon glyphicon-filter" :class="{filterOn:filterOnFlg}"></span>
    <popover :showFlg="poShowFlg" :right="right" :headTxt="headTxt" @poToggle="poTransitionStyleToggle" @closePo="closePo"></popover>
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
  computed:{
    filterOnFlg(){
      const cntFalse = this.$store.getters.onlyNonCheckedData(this.headTxt).length;
      return Boolean(cntFalse);
    }
  },
  methods: {
    showPo(e){
      const offsetCenter = e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth) / 2;
      this.right = e.currentTarget.parentElement.offsetWidth - offsetCenter;
      this.poShowFlg = true;
    },
    closePo(){
      this.poShowFlg = false;
    },
    poTransitionStyleToggle(bool){ //popoverのtransition前後で発火
      this.poStyleFlg = bool;
    }
  }
}
</script>

<style lang="scss">
  th{
    &.poOn{
      & > .filterCol, & > .glyphicon.glyphicon-filter{
        position: relative;
        z-index: 1055;
      }
    }
    .glyphicon-filter{
      &.filterOn{ //フィルタpopoverが呼ばれたthに色をつける
        color: #52bd7e;
      }
      &:before{
        //フィルタアイコンの大きさ調整
        font-size: 0.8em;
      }
      &.glyphicon{
        //後続のglyphiconの重なり順がpopoverのTransition中だけおかしくなるためbootstrapクラスを上書き
        position: static;
        top: 0;
      }
    }
  }
</style>
