<template>
  <!-- bootstrap element -->
  <div class="modal fade" id="toast" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <p>ゲスト名：{{ guestName }}</p>
          <p>ホスト名：{{ hostName }}</p>
          <p>状態：{{ statusName }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">キャンセル</button>
          <button type="button" class="btn btn-primary" @click="postEditData()">{{buttonLabel}}</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
import { eventHub } from '../hub.js';
import Axios from 'axios';
export default {
  created: function(){
    eventHub.$on('showToast', this.showToast);
  },
  props: ['rowData'],
  data: function(){
    return {
      title: null,
      buttonLabel: null,
      guestName: null,
      hostName: null,
      statusName: null,
      statusId: null,
      res: ''
    }
  },
  methods: {
    showToast: function(rowData){
      if(rowData){
        this.title = 'ゲスト情報更新';
        this.buttonLabel = '保存';
        this.guestName = rowData.guestName;
        this.hostName = rowData.hostName;
        this.statusName = rowData.statusName;
        this.statusId = rowData.statusId;
      }else{
        this.title = '新規ゲスト情報追加';
        this.buttonLabel = '登録';
        this.guestName = "";
        this.hostName = "";
        this.statusName = "";
        this.statusId = "";
      }
      $('#toast').modal('toggle');
    },
    postEditData: function(){
      Axios.post('/api/updateGuestInfo.php', this.guestName)
      .then(response => {
        this.res = response
      });
    }
  }
}
</script>

<style lang="scss">
// button{
//   &.btn.btn-default{
//     color: #119988;
//   }
// }
// .modal.fade .modal-dialog{
//   top: 55%;
//   left: calc(50% - 10px);
//   -webkit-transform: translate(-50%,-50%);
//   -ms-transform: translate(-50%,-50%);
//   -o-transform: translate(-50%,-50%);
//   transform: translate(-50%,-50%);
//   margin: 0 10px;
//   transition: .3s;
// }
// .modal.in .modal-dialog {
//   top: 50%;
//   transition: .3s;
// }
</style>
