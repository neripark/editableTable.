<template lang="html">
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col">
            <span class="filterCol" @click="showChbGp(arguments[0], dataA)">
              {{dataA}}<span class="glyphicon glyphicon-filter"></span>
            </span>
          </th>
          <th scope="col" @click="showChbGp(arguments[0], dataB)"><span>{{dataB}}</span><span class="glyphicon glyphicon-filter"></span></th>
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
      vv: "string"
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
    showChbGp(e, data){
      //e.preventDefault = false;
      this.popOverShowFlg = !(this.popOverShowFlg);
      let offsetCenter = e.srcElement.offsetLeft + (e.srcElement.offsetWidth) / 2;
      this.right = window.innerWidth - offsetCenter;
      this.vv = data;
    }
  }
}
</script>

<style lang="scss">
  #eTable{
    position: relative;
    th .filterCol{
      background-color: #eee;
      width: 100%;
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
