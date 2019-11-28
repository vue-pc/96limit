npm i babel-plugin-import -D<template>
  <header class="header">
    <i class="iconfont icon-jiantou"></i>
    <span>{{title}}</span>
    <slot></slot>


  </header>
</template>

<script>
export default {
  props:{
    title:{
      required:true,
      type:String
    }
  }
}
</script>

<style lang='stylus'>
.header 
  width 100%  
  height 45px
  background #fff
  text-align center
  line-height 45px
  i 
    float left
  span 
    font-size 16px

</style>