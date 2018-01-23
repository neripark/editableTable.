<template lang="html">
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col" @click="showChbGp($event)" :class="{'filterOn': selected}">
            <span class="filterCol">Host</span>
            <span class="glyphicon glyphicon-filter"></span>
          </th>
          <th scope="col" @click="showChbGp($event)" :class="{'filterOn': selected}">
            <span class="filterCol">Status</span>
            <span class="glyphicon glyphicon-filter"></span>
          </th>
        </tr>
      </thead>
      <eTableRow></eTableRow>
    </table>
    <popOver :showFlg="popOverShowFlg" :right="right"></popOver>
  </div>
</template>

<script>
import eTableRow from './eTableRow.vue'
import popOver from './popOver.vue'
export default{
  data: function() {
    return {
      popOverShowFlg: false,
      right: 0,
      selected: false
    };
  },
  computed: {
    rowsAll(){
      return this.$store.state.allData
    }
  },
  components: {
    eTableRow, popOver
  },
  methods: {
    showChbGp(e){
      const offsetCenter = e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth) / 2;
      this.right = e.currentTarget.parentElement.offsetWidth - offsetCenter;
      this.selected = !(this.selected);
      this.popOverShowFlg = !(this.popOverShowFlg);
    }
  }
}
</script>

<style lang="scss">
#eTable{
  position: relative;
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
}
</style>
