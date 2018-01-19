<template lang="html">
  <div v-show="showFlg" class="popover bottom">
    <div class="arrow" :style="arrowStyle"></div>
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
    arrowStyle: function(){
      return {
          'right': `${this.right}px`
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
  min-width: 230px;
  &.bottom > .arrow{
    margin-left: 0;
    left: auto;
  }
}
</style>
