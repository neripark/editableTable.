<template lang="html">
  <tbody>
    <tr v-for="(item, index) in allData" :key="item.key" @click="triggerToast((index));">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ item.guestName }}</td>
      <td>{{ item.hostName }}</td>
      <td>{{ item.status }}</td>
    </tr>
  </tbody>
</template>

<script>
import eventHub from '../hub.js';
export default {
  computed: {
    allData: function(){
      return this.$store.state.allData
    }
  },
  methods: {
    triggerToast: function (index){
      eventHub.$emit('showToast', this.allData[index]);
    }
  }
}
</script>
