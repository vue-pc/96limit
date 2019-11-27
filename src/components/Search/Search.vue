<template>
  <div id="searchBox">
    <div class="headerContainer">
      <div class="showBox_icon">
        <i class="iconfont icon-jiantouyou" @click="goPath('/class')"></i>
      </div>

      <!-- 搜索框 -->
      <div class="search">
        <i class="box iconfont icon-sousuo"></i>
        <input class="txt" type="text" placeholder="请输入商品名称" />
      </div>

      <!-- 搜索 -->
      <div class="sousuo">
        <span>搜索</span>
      </div>
    </div>
    <div class="hotSearch">
      <i class="iconfont icon-more">热门搜索</i>
      <span>白酒</span>
      <span>红酒</span>
      <span>洋酒</span>
      <span>百威</span>
      <span>雪花</span>
      <span>燕京</span>
      <span>福佳白</span>
      <span>风花雪月</span>
    </div>
    <div class="searcgHistory">
      <i class="iconfont icon-more">搜索历史</i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goPath(path) {
      this.$route.path !== path && this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchBox
    width 100%
    height 100%
    position relative
    .headerContainer
      width 100%
      height 50px
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
    .hotSearch
      width 100%
      height 100%
      padding-left 15px
      padding-right 15px
      i 
        display block
        margin-top 10px
      span
        display inline-block
        width 60px
        height 23px
        line-height 23px
        text-align center
        background-color #cccccc
        color #333
        border-radius 15px
        margin-top 15px
        margin-left 10px
    .searcgHistory
      width 100%
      height 20px
      padding-left 15px
      padding-right 15px
      i 
        display block
        margin-top 10px

</style>
