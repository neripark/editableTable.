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
      <eTableRow :sendrows="this.sendrows"></eTableRow>
    </table>
  </div>
</template>

<script>
import eTableRow from './eTableRow.vue'
export default {
  components: {
    eTableRow
  },
  data: () => {
    return {sendrows: [
      {guestName: 'おきあゆりょうたろう', hostName: 'neri', status: '回答待ち'},
      {guestName: 'いしだあきら', hostName: 'neri', status: '回答待ち'},
      {guestName: 'ほしそういちろう', hostName: 'neri', status: '○'},
      {guestName: 'わかもとのりお', hostName: 'neri', status: '×'},
      {guestName: 'よながつばさ', hostName: 'neri', status: '未'},
      {guestName: 'しまざきのぶなが', hostName: 'neri', status: '○'}
    ]}
  }
}
</script>

<style lang="css">
  /* table{color: #57bd69;} */
</style>
