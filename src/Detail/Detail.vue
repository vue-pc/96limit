<template>
  <div id="detail">
    <div class="toper">
      <div class="back"><</div>
      <div class="top-title">中国 王朝 红葡萄酒 750ml</div>
    </div>
    <div class="kongbai"></div>
    <div class="nav">
      <ul class="navList">
        <li class="navItem active">商品</li>
      <li class="navItem">详情</li> 
        <li class="navItem">评价</li>
      </ul>
    </div>
    <div class="main">
      <ul class="mianList">
        <li class="mianItem">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../public/images/1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../public/images/2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../public/images/3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../public/images/4.jpg" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="hairline">
            <span class="hairTitle">53度 茅台飞天 （ 2019年产 ）200ml</span>
            <div class="guanzhu">
              <span class="xin">❤</span>
              <span class="gzt">关注</span>
            </div>
          </div>
          <div class="price">
              <span class="qian">￥3666</span>
              <span class="low">降价通知</span>
          </div>
          <div class="num">
            <span class="numer">数量</span>
            <div class="jisuan">
              <span class="jian"  :class="{active:this.num === 1 }" @click="lowNum">-</span>
              <span class="jian">{{num}}</span>
              <span class="jian" @click="upNum">+</span>
            </div>
          </div>
          <div class="songhuo">
            <div class="wenzi">
              <span>送至  上海市</span>
              <span class="redTitle">有货</span>
            </div>
            <div class="more">></div>
          </div>
          <div class="vanCell">
            <span>提示 两瓶配一个手提袋</span>
            <span class="yanse">此商品不能使用优惠券</span>
          </div>
          <div class="bj">
            <ul class="bjList">
              <li class="bjItem">
                <i class="iconfont icon-duihao"></i>购酒发货&amp;售后
              </li>
              <li class="bjItem">
                <i class="iconfont icon-duihao"></i>正品保障
              </li>
              <li class="bjItem">
                <i class="iconfont icon-duihao"></i>满100包邮
              </li>
              <li class="bjItem">
                <i class="iconfont icon-duihao"></i>七天退换
              </li>
            </ul>
          </div>
          <div class="review">
            <div class="reviewTitle">
              <span>评价(40)</span>
              <span>好评度</span>
            </div>
            <span>98%</span>
            <span>></span>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
  export default {
    data(){
      return{
        num:1
      }
    },
    mounted(){
       new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          pagination: {
            el: '.swiper-pagination',
          },
        })
    },
    methods:{
      upNum(){
        this.num = this.num + 1
      },
      lowNum(){
        if(this.num !=1){
          this.num = this.num - 1
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #detail
  .toper
    width 100%
    height 48px
    display flex
    align-items center
    position fixed
    top 0
    left 0
    background #fff
    border-bottom 1px solid #ee
    .back
      display flex
      width 36px
      height 36px
      padding 10px
      line-height 36px
      font-size 20px
    .top-title
      font-size 16px
      width 70%
      text-align center
  .kongbai
    margin-top 46px
    width 100%
    height 20px
    background #fff
    z-index 2
  .nav 
    width 100%
    height 44px
    top 66px
    left 0
    z-index 99
    overflow hidden
    position absolute
    background #fff
    .navList
      display flex
      align-items center
      .navItem
        width 33.33333%
        text-align center
        line-height 44px
        font-size 16px
        &.active
          color #f44
          border-bottom 1px solid #f44
  .main
    margin-top 44px
    .mianList
      .mianItem
        .swiper-container
          .swiper-wrapper
            .swiper-slide
              img
                width 100%
                height 375px
        .hairline
          width 100%
          height 55px
          display flex
          align-items center
          box-sizing border-box
          padding 10px 20px
          border-bottom 1px solid #eee
          .hairTitle
            width 85%
            text-align center
            font-size 16px
          .guanzhu
            display flex
            flex-direction column
            align-items center
            margin-left 10px
            .xin
            .gzt
              font-size 18px
        .price
          width 100%
          height 44px
          box-sizing border-box
          padding 10px 20px
          // background green
          display flex
          justify-content space-between
          border-bottom 1px solid #eee
          .qian
            color red
            font-size 16px
          .low
            border 1px solid #eee
        .num
          width 100%
          height 44px
          box-sizing border-box
          padding 10px 20px
          display flex
          align-items center
          font-size 16px
          border-bottom 1px solid #eee
          .jisuan
            display flex
            align-items center
            margin-left 10px
            .jian 
              display block
              width 30px
              height 20px
              text-align center
              line-height 20px
              border 1px solid #eee
              &.active
                background #eee
        .songhuo
          width 100%
          height 96px
          box-sizing border-box
          padding 10px 20px
          display flex
          justify-content space-between
          border-bottom 1px solid #eee
          .wenzi
            margin-top 9px
            display flex
            flex-direction column
            span 
              margin-bottom 20px
              font-size 14px
            .redTitle
              color red
          .more
            font-size 24px
            color #eee
        .vanCell
          width 100%
          height 96
          box-sizing border-box
          padding 10px 20px 
          display flex
          flex-direction column
          font-size 14px
          span 
            margin-bottom 10px
          .yanse
            color #999
        .bj
          width 100%
          height 35px
          background #f8f8f8
          box-sizing border-box
          padding 10px 10px
          .bjList
            display flex
            align-items center
            font-size 12px
            .bjItem
              margin-left 10px
              i 
                font-size 12px
                color red
                margin-right 5px
        .review
          height 44px
          width 100%
          display flex
          box-sizing border-box
          padding 10px 20px
          .reviewTitle
            width 90%
            display flex
            align-items center
            justify-content space-between
            font-size 16px
</style>
