<template lang="html">
  <div id="newRecordButton">
    <p @click="triggerToast"></p>
  </div>
</template>

<script>
import eventHub from '../hub.js';
export default {
  methods: {
    triggerToast(){
      eventHub.$emit('showToast')
    }
  }
}
</script>

<style lang="scss">
@import '../sass/colors.scss';
#newRecordButton{
  position: absolute;
  //top: 29px;
  bottom: 29px;
  right: 10px;
  box-sizing: border-box;
  background-color: $color_partsBase;
  border-radius: 50%;
  p{
    //position: relative;
    width: 40px;
    height: 40px;
    margin: 0;
    &:before,&:after{
      display: block;
      content: "";
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      //transform: translateX(-50%) translateY(-50%);
    }
    &:before{width: 2px; height: 20px;}
    &:after{width: 20px; height: 2px;}
  }
}
</style>
