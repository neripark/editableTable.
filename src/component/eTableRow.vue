<template lang="html">
  <tbody>
    <!-- <tr v-for="(item, index) in sendrows" @click="openToast((index));"> -->
    <tr v-for="(item, index) in sendrows">
      <th scope="row">{{ index + 1 }}</th>
      <col01 :rowData="item.guestName"></col01>
      <td>{{ item.hostName }}</td>
      <td>{{ item.status }}</td>
    </tr>
  </tbody>
</template>

<script>
import col01 from './eTableRowCol01.vue'
export default {
  props: ['sendrows'],
  components: {
    col01
  },
  methods: {
    openToast: function (aaa){
      //console.log(this.sendrows[aaa].guestName);
      //console.log(this.sendrows);
      //this.sendrows[aaa].guestName = this.sendrows[aaa].status;
    }
  }
}
</script>
