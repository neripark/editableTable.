<template lang="html">
  <transition @before-enter="beforeEnter" @after-leave="afterLeave">
    <div v-show="showFlg">
      <div class="popover bottom">
        <div class="arrow" :style="arrowStyle"></div>
        <div class="popover-content">
          <div class="chbArea">
            <div class="checkbox" v-for="(item, index) in options" :key="item.key">
              <label><input type="checkbox" :checked="item.show" @change="chbChange((index), $event)" :value="item.name">{{item.name}}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay" @click.stop="close"></div>
    </div>
   </transition>
</template>

<script>
export default {
  props: ['showFlg', 'right', 'headTxt'],
  computed: {
    arrowStyle(){
      return {
          'right': `${this.right}px`
      }
    },
    options(){
      return this.$store.state[`all${this.headTxt}`];
    }
  },
  methods: {
    beforeEnter(){
      this.$emit('poToggle', true);
    },
    afterLeave(){
      this.$emit('poToggle', false);
    },
    chbChange(index, e){
      const obj = {
        "headTxt": this.headTxt,
        "value": e.currentTarget.value,
        "checked": e.currentTarget.checked,
        "chbIndex": index
      };
      this.$store.dispatch('toggleShow', obj);
    },
    close(){
      this.$emit('closePo');
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
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1050;
  background-color: rgba(255, 255, 255, .8);
}
//transition
.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
