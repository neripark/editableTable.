<template lang="html">
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col">Hnpmost</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
        <tbody>
          <eTableRowComponent v-for="(item, index) in rows" :key="index">
          </eTableRowComponent>
        </tbody>
    </table>
  </div>
</template>

<script>
import eTableRowComponent from './eTableRow.vue'
export default {
  components: {
    eTableRowComponent
  },
  data: () => {
    return {rows: [
      {guestName: 'おきあゆりょうたろう', hostName: 'neri', status: '回答待ち'},
      {guestName: 'いしだあきら', hostName: 'neri', status: '回答待ち'},
      {guestName: 'ほしそういちろう', hostName: 'neri', status: '○'},
      {guestName: 'わかもとのりお', hostName: 'neri', status: '×'},
      {guestName: 'よながつばさ', hostName: 'neri', status: '未'}
    ]}
  }
}
</script>

<style lang="css">
</style>
