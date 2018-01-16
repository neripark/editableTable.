<template lang="html">
  <!-- <div class="popover" :class="displayCss"> -->
  <div v-show="uketori" class="popoverOrg">
    <p class="lead">This is lead text. {{vl}}</p>
    <div class="chbArea">
      <p>{{options}}</p>
      <label><input type="checkbox">テスト</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['uketori', 'vl']
}
</script>

<style lang="scss">
.popoverOrg{
  //display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  width: 70%;
  z-index: 1;
  &.show{
    display: block;
  }
}
</style>
