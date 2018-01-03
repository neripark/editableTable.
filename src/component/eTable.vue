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
      <!-- <eTableRow :rows="this.rowsAll" :filteredStatus="this.selectedStatus"></eTableRow> -->
      <eTableRow :rows="rowsAll"></eTableRow>
    </table>
  </div>
</template>

<script>
import Axios from 'axios'
import eTableRow from './eTableRow.vue'
export default{
  computed: {
    rowsAll(){
      return this.$store.state.allData
    }
  },
  components: {
    eTableRow
  }
}
// export default {
//
//   created: function(){
//     this.getTableData();
//   },
//
//   components: {
//     eTableRow
//   },
//
//   data: function(){
//     return {
//       rowsAll: '', //Array
//       rows: '',
//       hostNameList: '',
//       statusList: '',
//       selectedStatus: ''
//     }
//   },
//
//   methods: {
//     test(){
//       console.log(this.$store.getters.getAllData);
//     },
//
//
//     getTableData: function(){
//       //apiをキックしテーブルデータを取得
//       Axios.get('/api/selectAll.php')
//       .then(response => {
//
//         //仮ハードコーディング,のちに動的に取れるようにする
//         this.selectedStatus = {selStatus: [
//           {"statusId" : "03"}
//         ]};
//         /////////////
//
//         //全データを確保
//         this.rowsAll = response.data;
//         //フィルタリング後のテーブルデータを確保
//         this.filterRows();
//         this.statusList = this.setDataLists('statusId');
//       })
//     },
//     filterRows: function(){
//       //レコードを特定のステータスのみに絞る関数
//       let tmp = this.rowsAll;
//       let tmp_st = this.selectedStatus.selStatus;
//       let filtered = {};
//       let tmpArray = [];
//
//       if (tmp_st.length > 0){
//         for (var i = 0; i < tmp.length; i++){
//           for (var j = 0; j < tmp_st.length; j++) {
//             if (tmp[i].statusId == tmp_st[j].statusId){
//               tmpArray.push(this.rowsAll[i]);
//             }
//           }
//         }
//         this.rows = tmpArray;
//       }
//     },
//     setDataLists: function(itemName){
//       // ステータスとHostをgroupByしてコンポーネントのデータにセットする関数
//       // GroupByでSQLを投げてもいいが通信回数を減らしたいため
//       let arrTmp = [];
//
//       for (let i = 0; i < this.rowsAll.length; i++) {
//         console.log(this.rowsAll[i][itemName]);
//         arrTmp.push(this.rowsAll[i][itemName]);
//       }
//
//       return arrTmp.filter(function(x, i, self){
//         return self.indexOf(x) === i;
//       });
//     }
//   }
// }
</script>

<style lang="css">
  /* table{color: #57bd69;} */
</style>
