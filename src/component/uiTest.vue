<template lang="html">
  <div>
    <el-popover
      ref="popover2"
      placement="bottom"
      title="Title"
      width="200"
      trigger="click"
      content="this is content, this is content, this is content">
    </el-popover>
    <el-button v-popover:popover2>Click to activate</el-button>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

export default {
  created(){
    console.log('uiTestコンポーネント Created');
  }
}
</script>

<style lang="css">
</style>
