<template lang="html">
  <tbody>
    <tr v-for="(item, index) in sendrows" @click="openToast((index));">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ item.guestName }}</td>
      <td>{{ item.hostName }}</td>
      <td>{{ item.status }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ['sendrows'],
  methods: {
    openToast: function (aaa){
      console.log(this.sendrows[aaa].guestName);
      //console.log(this.sendrows);
      //this.sendrows[aaa].guestName = this.sendrows[aaa].status;
    }
  }
}
</script>
