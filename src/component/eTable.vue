<template lang="html">
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col" @click="showChbGp(dataA, $event)" :class="{'filterOn': selected}">
            <span class="filterCol">{{dataA}}</span>
            <span class="glyphicon glyphicon-filter"></span>
          </th>
          <th scope="col" @click="showChbGp(dataB, $event)" :class="{'filterOn': selected}">
            <span class="filterCol">{{dataB}}</span>
            <span class="glyphicon glyphicon-filter"></span>
          </th>
        </tr>
      </thead>
      <eTableRow :rows="rowsAll"></eTableRow>
    </table>
    <popOver :showFlg="popOverShowFlg" :right="right" :vl="vv"></popOver>
  </div>
</template>

<script>
import eTableRow from './eTableRow.vue'
import popOver from './popOver.vue'
export default{
  data: function() {
    return {
      dataA: "Host",
      dataB: "Guest",
      popOverShowFlg: false,
      right: 0,
      vv: "string",
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
    showChbGp(data, e){
      console.log(e.currentTarget.parentElement.offsetWidth);

      console.log('------');

      this.popOverShowFlg = !(this.popOverShowFlg);
      const offsetCenter = e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth) / 2;
      this.right = e.currentTarget.parentElement.offsetWidth - offsetCenter;
      this.vv = data;
      this.selected = !(this.selected);
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
