<template>
  <div id="showBox">
    <div>
      <i class="iconfont icon-jiantouyou"></i>
    </div>
        <!-- 搜索框 -->
    <div class="search">
      <!--            icon图标-->
      <i class="box iconfont icon-sousuo"></i>
      <input class="txt" type="text" placeholder="请输入商品名称">
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goPath(path){
      this.$route.path !== path && this.$router.replace(path)
      },     
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #showBox
    width 100%
    height 100%
    .search
      background-color rgb(204,204,204)
      width 265px
      height 35px
      line-height 35px
      position absolute
      top 5px
      left 20px
      .box
        padding 0 10px   
      .txt
        outline none 
        border none
        width 220px
        height 22px
        background-color #cccccc

</style>
