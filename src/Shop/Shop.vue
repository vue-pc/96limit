<template>
  <div class="G-headerWrap">
    <HeaderGuide title="购物车">
      <span class="nav-bar" @click="isFont = !isFont">{{
        isFont ? font : "完成"
      }}</span>
    </HeaderGuide>
    <div class="goods" v-if="!this.$store.state.wines">
      <div class="tip">
        <i class="iconfont icon-iconset0308"></i>
      </div>
      <h5>您的购物车还没有商品</h5>
      <p>快去逛逛~</p>
      <button class="btn" @click="$router.replace('/home')">去首页</button>
      <p class="like">你可能喜欢</p>
    </div>
    <!-- 全选 收藏 删除 -->
    <div class="cart_del">
      <!-- <input class="check" type="checkbox" />全选 -->
      <van-checkbox v-model="Checked" class="check" @click="checkAll($event)">全选</van-checkbox>
      <div class="btn_com" v-show="isFont">
        <span
          >合计:
          <p>￥0.00</p></span
        >
        <div class="button">结算(0)</div>
      </div>
      <div class="btn_com" v-show="!isFont">
        <div class="button_1">放入收藏</div>
        <div class="button">删除</div>
      </div>
    </div>
    <Shopcart v-if="this.$store.state.wines" :Checked="Checked" />
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderGuide from '../components/HeaderGuide/HeaderGuide'

import Shopcart from '../Shopcart/Shopcart'
import {mapState} from 'vuex'
  export default {
    data(){
      return{
        font:'编辑',
        isFont:true,
        Checked: false

      }
    },
    components:{
      HeaderGuide,
      Shopcart
    },
    mounted(){
      // this.data = ulList
      console.log(this.wines)
    },
    computed:{
      ...mapState({
        // wines:result.jiuxianziying
        wines:state => state.wines
      }),
    // this.$emit('')
    },
    methods:{
     checkAll(event){
       var e = event.currentTarget;
       console.log(e)
       
     }
    }
  }
</script>

<style lang="stylus" scoped>
.G-headerWrap
  .nav-bar
    float: right
  .goods
    width 100%
    height 283px
    background #F4F5F7
    text-align center
    .tip
      margin 0 auto
      width 55px
      height 55px
      border-radius 50%
      background #fff
      text-align center
      line-height 55px
      i
        font-size 30px
    h5
      margin 30px
    .btn
      width 60px
      height 30px
      background #fb223e
      border: 1px solid #fb223e;
      margin-top 20px
      border-radius 5px
      color #fff
    .like
      font-size 18px
      margin-top 50px
  .cart_del
    width 100%
    position fixed
    bottom 46px
    left 0
    background #fff
    z-index 10
    .check
      position absolute
      top 10px
      left 10px
      // border 1px solid black
      // width 20px
      // height 20px
      // margin-top 10px
    .btn_com
      width 220px
      height 50px
      float right
      display flex
      float right

      span
        display flex
        color #666
        font-size 16px
        width 50%
        margin 15px 0px
        p
          color red
      .button
        width 50%
        color #999;
        background-color #e8e8e8
        font-size 16px
        line-height 50px
        text-align center
      .button_1
        width 50%
        color #999;
        background-color #e8e8e8
        font-size 16px
        line-height 50px
        text-align center
</style>



