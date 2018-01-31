<template lang="html">
  <div id="newRecordButton">
    <p @click="test"></p>
  </div>
</template>

<script>
export default {
  methods: {
    test(){
      console.log("a new record added.");
    }
  }
}
</script>

<style lang="scss">
@import '../sass/colors.scss';
#newRecordButton{
  position: absolute;
  top: 25px;
  right: 10px;
  box-sizing: border-box;
  background-color: $color_partsBase;
  border-radius: 50%;
  p{
    position: relative;
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
      transform: translateX(-50%) translateY(-50%);
    }
    &:before{width: 2px; height: 20px;}
    &:after{width: 20px; height: 2px;}
  }
}
</style>
