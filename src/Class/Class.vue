<template>
  <div id="classContainer">
      <!-- 搜索栏 -->
    <div class="search">
      <div class="searchBox" @click="goPath('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>请输入商品名称</span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div class="box">
        <div class="title">
          <span>白酒</span>
          <a href="http://m.gjw.com/AllClass-1-baijiu.html">查看全部&nbsp;&gt;</a>
        </div>
         <ul class="listRow">
          <li class="spacerow" @click="goPath('/show')" >茅台</li>
          <li class="spacerow">习酒</li>
          <li class="spacerow" @click="goPath('/show')" >五粮液</li>
          <li class="spacerow">珍酒</li>
          <li class="spacerow" @click="goPath('/show')" >剑南春</li>
          <li class="spacerow">四特</li>
          <li class="spacerow" @click="goPath('/show')" >汾酒</li>
          <li class="spacerow">泸州老窖</li>
          <li class="spacerow" @click="goPath('/show')" >郎酒</li>
          <li class="spacerow">西凤</li>
          <li class="spacerow" @click="goPath('/show')" >古井贡酒</li>
          <li class="spacerow">杜康</li>
          <li class="spacerow" @click="goPath('/show')" >舍得</li>
          <li class="spacerow">全兴</li>
          <li class="spacerow" @click="goPath('/show')" >茅台</li>
          <li class="spacerow">国台</li>          
        </ul>
      </div>
      <div class="box">
        <div class="title">
          <span>葡萄酒</span>
          <a href="http://m.gjw.com/AllClass-1-baijiu.html">查看全部&nbsp;&gt;</a>
        </div>
        <ul class="listRow">
          <li class="spacerow" @click="goPath('/show')" >奔富</li>
          <li class="spacerow">拉菲</li>
          <li class="spacerow" @click="goPath('/show')" >中级庄</li>
          <li class="spacerow">红魔鬼</li>
          <li class="spacerow" @click="goPath('/show')" >长城</li>
          <li class="spacerow">王朝</li>
          <li class="spacerow" @click="goPath('/show')" >张裕</li>
          <li class="spacerow">马爹利</li>
          <li class="spacerow" @click="goPath('/show')" >人头马</li>
          <li class="spacerow">芝华士</li>
          <li class="spacerow" @click="goPath('/show')" >百龄坛</li>
          <li class="spacerow">女儿红</li>
          <li class="spacerow" @click="goPath('/show')" >一本义</li>
          <li class="spacerow">福佳</li>
          <li class="spacerow" @click="goPath('/show')" >1664</li>
          <li class="spacerow">科罗娜</li>          
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
          .spacerow 
            width 49%
            height 35px
            padding-right 1%
            line-height 35px            
            background-color #f3f3f3
            display inline-block
            margin-bottom 5px
            background-clip content-box

</style>