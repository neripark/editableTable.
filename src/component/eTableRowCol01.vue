<template lang="html">
  <td @click="openW();">{{this.rowData}}</td>
  <!-- <td>{{this.rowData}}</td> -->
</template>

<script>
export default {
  props: ['rowData'],
  methods: {
    openW: function(){
      console.log(this.rowData);
      $('#toast').modal('toggle');
    }
  }
}
</script>
