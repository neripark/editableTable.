<template lang="html">
  <tbody v-model="filteredStatus">
    <tr v-for="(item, index) in rows" :key="item.key" @click="triggerToast((index));">
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
  props: ['rows','filteredStatus'],
  methods: {
    triggerToast: function (index){
      eventHub.$emit('showToast', this.rows[index]);
      //console.log(this.filteredStatus);
    }
  }
}
</script>
