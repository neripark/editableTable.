<template lang="html">
  <tbody>
    <tr v-for="(item, index) in sendrows">
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
  created: function(){
    console.log(this.sendrows);
  }
}
</script>
