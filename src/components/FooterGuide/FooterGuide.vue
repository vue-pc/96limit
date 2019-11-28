<template>
  <div id="footer">
    <div class="guideItem" :class="{active:$route.path === '/home'}" @click="goPath('/home')">
      <span>
        <i class="iconfont "></i>
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/class'}" @click="goPath('/class')">
      <span>
        <i class="iconfont "></i>
      </span>
      <span>
        分类
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/detail'}" @click="goPath('/detail')">
      <span>
        <i class="iconfont "></i>
      </span>
      <span>
        专享福利
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/shop'}" @click="goPath('/shop')">
      <span>
        <i class="iconfont "></i>
      </span>
      <span>
        购物车
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/profile'}" @click="goPath('/profile')">
      <span>
        <i class="iconfont "></i>
      </span>
      <span>
        我的
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goPath(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 #footer
    position fixed
    left 0
    bottom 0
    width 100%
    height 7%
    border-top 1px solid #eee
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      span
        i
          font-size 50px
        &:first-child
          margin 6px 0
      &.active
        color red
</style>
