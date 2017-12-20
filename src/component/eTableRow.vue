<template lang="html">
  <tbody>
    <tr v-for="(item, index) in sendrows" @click="triggerToast((index));">
    <!-- <tr v-for="(item, index) in sendrows"> -->
      <th scope="row">{{ index + 1 }}</th>
      <!-- <col01 :rowData="item.guestName"></col01> -->
      <td>{{ item.guestName }}</td>
      <td>{{ item.hostName }}</td>
      <td>{{ item.status }}</td>
    </tr>
  </tbody>
</template>

<script>
// import col01 from './eTableRowCol01.vue'
import eventHub from '../hub.js';
export default {
  props: ['sendrows'],
  methods: {
    triggerToast: function (index){
      eventHub.$emit('showToast', this.sendrows[index]);
    }
  }
}
</script>
