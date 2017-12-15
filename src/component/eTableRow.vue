<template lang="html">
  <th scope="row">{{ index + 1 }}</th>
  <td>{{ item.guestName }}</td>
  <td>{{ item.hostName }}</td>
  <td>{{ item.status }}</td>
</template>

<script>
export default {
  props: {
    rows: {
      type: Object,
      required: true
    }
  }
}
</script>
