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
      <eTableRow :sendrows="this.sendrows.sendrows"></eTableRow>
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
      sendrows: ''
    }
  },
  methods: {
    getJson: function(){
      Axios.get('/api/getGuestInfo.php')
      .then(response => {
        console.log(JSON.parse(response.data));
        this.sendrows = JSON.parse(response.data);
      })
    }
  }
}
</script>

<style lang="css">
  /* table{color: #57bd69;} */
</style>
