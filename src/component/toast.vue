<template lang="html">
  <!-- bootstrap element -->
  <div class="modal fade" id="toast" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Prease Edit.</h4>
        </div>
        <div class="modal-body">
          <p>ゲスト：{{ guestName }}</p>
          <p>ホスト：{{ hostName }}</p>
          <p>状態：{{ status }}</p>
          <p>状態ID：{{ statusId }}</p>
          <p>返答：{{ res }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="postEditData()">Save changes</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
import eventHub from '../hub.js';
import Axios from 'axios';
export default {
  created: function(){
    eventHub.$on('showToast', this.showToast);
  },
  props: ['rowData'],
  data: function(){
    return {
      guestName: null,
      hostName: null,
      status: null,
      statusId: null,
      res: ''
    }
  },
  methods: {
    showToast: function(rowData){
      this.guestName = rowData.guestName;
      this.hostName = rowData.hostName;
      this.status = rowData.status;
      this.statusId = rowData.statusId;
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
.modal.fade .modal-dialog{
  top: 55%;
  -webkit-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  -o-transform: translate(0,-50%);
  transform: translate(0,-50%);
  margin: 0 10px;
  transition: .3s;
}
.modal.in .modal-dialog {
  top: 50%;
  -webkit-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  -o-transform: translate(0,-50%);
  transform: translate(0,-50%);
  margin: 0 10px;
  transition: .3s;
}
</style>
