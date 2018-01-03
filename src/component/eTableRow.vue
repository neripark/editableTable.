<template lang="html">
  <tbody>
    <tr v-for="(item, index) in rows" :key="item.key" @click="triggerToast((index));">
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
  props: ['rows'],
  methods: {
    triggerToast: function (index){
      eventHub.$emit('showToast', this.rows[index]);
    }
  }
}
</script>
