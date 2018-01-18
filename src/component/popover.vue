<template lang="html">
  <div v-show="showFlg" class="popover bottom" :style="popOverStyle">
    <div class="arrow"></div>
    <div class="popover-content">
      <p class="lead">This is lead text. </p>
      <div class="chbArea">
        <p>{{vl}}</p>
        <label><input type="checkbox">テスト</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showFlg', 'right', 'vl'],
  computed: {
    popOverStyle: function(){
      return {
          right: `${this.right}px`
      }
    }
  }
}
</script>

<style lang="scss">
.popover{
  display: block;//bootstrap初期状態だと表示されていないため上書き
  top: 32px;
  left: auto;
  right: 0;
}
</style>
