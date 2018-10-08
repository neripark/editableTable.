<template>
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <eTableHeadAddFilter :headTxt="'Host'"></eTableHeadAddFilter>
          <eTableHeadAddFilter :headTxt="'Status'"></eTableHeadAddFilter>
        </tr>
      </thead>
      <eTableRow></eTableRow>
    </table>
  </div>
</template>

<script>
import eTableRow from './eTableRow.vue'
import eTableHeadAddFilter from './eTableHeadAddFilter.vue'
export default{
  computed: {
    rowsAll(){
      return this.$store.state.allData
    }
  },
  components: {
    eTableRow, eTableHeadAddFilter
  }
}
</script>

<style lang="scss">
#eTable{
  position: relative;
}
</style>
