<template lang="html">
  <div id="eTable">

    <button type="button" class="btn btn-secondary" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>

    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col">Host</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <!-- <eTableRow :rows="this.rowsAll" :filteredStatus="this.selectedStatus"></eTableRow> -->
      <eTableRow :rows="rowsAll"></eTableRow>
    </table>
  </div>
</template>

<script>
import Axios from 'axios'
import eTableRow from './eTableRow.vue'
export default{
  created: function(){
    console.log('hogegege');
    $(function(){
      console.log('yomaremasia');
      $('[data-toggle="popover"]').popover()
    });
  },
  computed: {
    rowsAll(){
      return this.$store.state.allData
    }
  },
  components: {
    eTableRow
  }
}
</script>

<style lang="css">
  /* table{color: #57bd69;} */
</style>
