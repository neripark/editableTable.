<template lang="html">
  <div id="eTable">

    <!-- <button type="button" class="btn btn-secondary" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button> -->

    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col" @click="showChbGp(dataA, 5)">{{dataA}}</th>
          <th scope="col" @click="showChbGp(dataB, 6)">{{dataB}}</th>
        </tr>
      </thead>
      <!-- <eTableRow :rows="this.rowsAll" :filteredStatus="this.selectedStatus"></eTableRow> -->
      <eTableRow :rows="rowsAll"></eTableRow>
    </table>
    <popOver :showFlg="popOverShowFlg" :right="right" :vl="vv"></popOver>
  </div>
</template>

<script>
//import Axios from 'axios'
import eTableRow from './eTableRow.vue'
import popOver from './popOver.vue'
export default{
  // created: function(){
  //   //console.log('hogegege');
  //   $(function(){
  //     //console.log('yomaremasia');
  //     $('[data-toggle="popover"]').popover()
  //   });
  // },
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
    showChbGp(data,val){
      console.log(`checkbox ${val}`);
      //console.log(this.getBoundingClientRect());
      this.popOverShowFlg = !(this.popOverShowFlg);
      this.right = val;
      this.vv = data;
      console.log('rightプロパティ：' + this.right);
    }
  }
}
</script>

<style lang="css">
  /* table{color: #57bd69;} */
  #eTable{
    position: relative;
  }
</style>
