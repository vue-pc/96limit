<template>
  <div id="searchBox">
    <div class='showBox_icon'>
      <i class="iconfont icon-jiantouyou" @click="goPath('/home')"></i>
    </div>

        <!-- 搜索框 -->
     <div class="search">
     
      <i class="box iconfont icon-sousuo"></i>
      <input class="txt" type="text" placeholder="请输入商品名称">
      </div>

      <!-- 搜索 -->
      <div class='sousuo'>
        <span>搜索</span>
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
  #searchBox
    width 100%
    height 50px
    position relative
    .showBox_icon
      .icon-jiantouyou
        position absolute
        top 20px
        left 10px
        color #949494
    .search
      background #ececec
      width 265px
      height 35px
      line-height 35px
      position absolute
      top 5px
      left 20px
      position absolute
      left 45px
      top 10px
      border-radius 5px
      .box
        padding 0 10px   
      .txt
        outline none 
        border none
        width 220px
        height 22px
        background-color #ececec
        font-size 15px
    .sousuo
      span
        position absolute
        right 20px
        top 20px
        color #949494
        font-size 15px


</style>
