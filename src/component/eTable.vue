<template lang="html">
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col">Host</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <eTableRow :rows="this.rows.jsonRows" :filteredStatus="this.selectedStatus"></eTableRow>
    </table>
  </div>
</template>

<script>
import Axios from 'axios'
import eTableRow from './eTableRow.vue'
export default {
  created: function(){
    this.getJson();
  },
  components: {
    eTableRow
  },
  data: function(){
    return {
      rows: '',
      selectedStatus: ''
    }
  },
  methods: {
    getJson: function(){
      Axios.get('/api/getGuestInfo.php')
      .then(response => {

        //仮ハードコーディング,のちに動的に取れるようにする
        this.selectedStatus = {selStatus: [
          {"statusId" : "03"}
        ]};
        /////////////

        this.rows = JSON.parse(response.data);
        this.filterRows();
      })
    },
    filterRows: function(){
      let tmp = this.rows.jsonRows;
      let tmp_f = this.selectedStatus.selStatus;
      let filtered = {};
      let tmpArray = [];

      //フィルタ処理
      if (tmp_f.length > 0){
        for (var i = 0; i < tmp.length; i++){
          for (var j = 0; j < tmp_f.length; j++) {
            if (tmp[i].statusId == tmp_f[j].statusId){
              tmpArray.push(this.rows.jsonRows[i]);
            }
          }
        }
        filtered.jsonRows = tmpArray;
        this.rows = filtered;
      }
    }
  }
}
</script>

<style lang="css">
  /* table{color: #57bd69;} */
</style>
