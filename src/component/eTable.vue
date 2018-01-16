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
          <th scope="col" @click="showChbGp(dataA)">{{dataA}}</th>
          <th scope="col" @click="showChbGp(dataB)">{{dataB}}</th>
        </tr>
      </thead>
      <!-- <eTableRow :rows="this.rowsAll" :filteredStatus="this.selectedStatus"></eTableRow> -->
      <eTableRow :rows="rowsAll"></eTableRow>
    </table>
    <popOver :uketori="displayCss" :vl="thr"></popOver>
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
      displayCss: false,
      thr: "string"
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
    showChbGp(val){
      console.log(`checkbox ${val}`);
      this.displayCss = !(this.displayCss);
      this.thr = val;
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
