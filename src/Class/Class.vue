<template>
  <div id="classContainer">
      <!-- 搜索栏 -->
    <div class="search">
      <div class="searchBox">
        <i class="iconfont icon-sousuo"></i>
        <span>请输入商品名称</span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div class="box">
        <div class="title">
          <span>你懂的</span>
          <a href="http://m.gjw.com/AllClass-1-baijiu.html">查看全部&nbsp;&gt;</a>
        </div>
        <ul class="listRow">
          <li  @click="goPath('/show')">大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
        </ul>
      </div>
      <div class="box">
        <div class="title">
          <span>点进来</span>
          <a href="http://m.gjw.com/AllClass-1-baijiu.html">查看全部&nbsp;&gt;</a>
        </div>
        <ul class="listRow">
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          <li class="rightRow">渣渣灰</li>
          <li>大学委</li>
          
        </ul>
      </div>
      <div class="box">
        <div class="title">
          <span>洋酒</span>
          <a href="http://m.gjw.com/AllClass-1-baijiu.html">查看全部&nbsp;&gt;</a>
        </div>
        <ul class="listRow">
          <li>芝华士</li>
          <li class="rightRow">人头马</li>
          <li>XO</li>
          <li class="rightRow">轩尸尼</li>
          <li>杰克丹尼</li>
          <li class="rightRow">福佳白</li>  
        </ul>
      </div>
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
  #classContainer
    width 100%
    height 100%
    .search
      width 100%
      height 35px
      .searchBox
        background #ececec
        width 80%
        height 25px
        line-height 25px
        margin 5px auto
        border-radius 6px
        padding 5px 5%
        .icon-sousuo
          color rgb(204,204,204)
        span 
          width 120px
          height 4px
          font-size 14px 
          color rgb(204,204,204)
          padding-left 10px 
    .list
      margin-top 5px
      border-top 1px #eee solid
      color #525252
      .box
        width 100%
        
        .title 
          height 35px
          line-height 35px
          span 
            font-size 18px
          a 
            float right
            font-size 12px
        .listRow
          font-size 13px
          li 
            width 48%
            height 35px
            padding-left 1%
            line-height 35px            
            background-color #f3f3f3
            display inline-block
            margin-bottom 5px
          .rightRow
            float right 
            width 49%
            margin-left 1% 

</style>