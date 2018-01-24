<template lang="html">
  <div v-show="showFlg" class="popover bottom">
    <div class="arrow" :style="arrowStyle"></div>
    <div class="popover-content">
      <div class="chbArea">
        <div class="checkbox" v-for="(item) in options" :key="item.key">
          <label><input type="checkbox" checked>{{item.name}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showFlg', 'right', 'headTxt'],
  computed: {
    arrowStyle: function(){
      return {
          'right': `${this.right}px`
      }
    },
    options: function(){
      return this.$store.state[`all${this.headTxt}`];
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
  .checkbox{
    display: inline-block;
    margin-right: 15px;
  }
}
</style>
