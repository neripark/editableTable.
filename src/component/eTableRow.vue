<template lang="html">
  <tbody>
    <tr v-for="(item, index) in onlyShowDatas" :key="item.key" @click="triggerToast((index));">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ item.guestName }}</td>
      <td>{{ item.hostName }}</td>
      <td>{{ item.statusName }}</td>
    </tr>
  </tbody>
</template>

<script>
import eventHub from '../hub.js';
export default {
  computed: {
    onlyShowDatas(){
      return this.$store.getters.onlyShowData;
    }
  },
  methods: {
    triggerToast(index){
      eventHub.$emit('showToast', this.onlyShowDatas[index]);
    }
  }
}
</script>
