<template lang="html">
  <div id="eTable">
    <table class="table"><!-- bootstrap class -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest</th>
          <th scope="col" @click="showChbGp(dataA, 5)">{{dataA}}</th>
          <th scope="col" @click="showChbGp(dataB, 6)">{{dataB}}</th>
        </tr>
      </thead>
      <eTableRow :rows="rowsAll"></eTableRow>
    </table>
    <popOver :showFlg="popOverShowFlg" :right="right" :vl="vv"></popOver>
  </div>
</template>

<script>
import eTableRow from './eTableRow.vue'
import popOver from './popOver.vue'
export default{
  data: function() {
    return {
      dataA: "Host",
      dataB: "Guest",
      popOverShowFlg: false,
      right: 0,
      vv: "string"
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
    showChbGp(data,val){
      this.popOverShowFlg = !(this.popOverShowFlg);
      this.right = val;
      this.vv = data;
    }
  }
}
</script>

<style lang="css">
  #eTable{
    position: relative;
  }
</style>
