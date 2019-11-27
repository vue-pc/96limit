<template>
  <div id="detail">
    <div class="toper">
      <div class="back"><</div>
      <div class="top-title">53度 茅台飞天 （ 2019年产 ）200ml</div>
    </div>
    <div class="kongbai"></div>
    <div class="nav" :class="{active: this.scrollTop*1 >= 66}">
      <ul class="navList" >
        <li class="navItem"  
        data-id="shoper" 
        :class="{active:this.scrollTop*1 >= 0 && this.scrollTop*1 < 780}"
        >商品</li>

        <li class="navItem"  
        data-id="pingjia" 
         @click="toChange('/pinglun')"
         :class="{active:this.scrollTop*1 >780 && this.scrollTop*1 < 2555}"
        >评价</li>

        <li class="navItem"  
        data-id="xiangqing" 
        :class="{active:this.scrollTop*1 > 2555}"
        >详情</li> 
      </ul>
    </div>
    <div class="main wrapper">
      <ul class="mianList content">
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
          <div class="songhuo"  @click="toShow">
            <div class="wenzi">
              <span>送至  上海市</span>
              <span class="redTitle">有货</span>
            </div>
            <div class="more">></div>
          </div>
          <div class="cover" v-show="!show" @click="toShow">
            <div class="citybox">
              <div class="city">
                <van-area
                  :area-list="areaList"
                  title="选择城市"
                  value="110101"
                />
              </div>
            </div>
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
            <span class="imp">98%</span>
            <i class="iconfont icon-label_arrow"></i>
          </div>
          <div class="detail">
            <ul class="detailList">
              <li class="detailItem" v-for="(data, index) in datas" :key="index">
                <div class="left">
                  <img src="../../public/images/user.png" alt="">
                </div>
                <div class="right">
                  <div class="juyou">
                    <p>{{data.Usr_NiceName}}</p>
                    <p class="juyouTitile">{{data.Usr_LeveName}}</p>
                  </div>
                  <div class="star">
                    <img src="../../public/images/xx.png" alt="">
                    <img src="../../public/images/xx.png" alt="">
                    <img src="../../public/images/xx.png" alt="">
                    <img src="../../public/images/xx.png" alt="">
                    <img src="../../public/images/xx.png" alt="">
                    <span class="date">{{data.CreateTime}}</span>
                  </div>
                  <p class="text">
                     {{data.Content}}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="mianItem">
          <div class="default" @click="toChange('/pinglun')">
            查看全部评论
            <i class="iconfont icon-label_arrow"></i>
          </div>
          <div class="vanTap">
              <div class="vanTapNav">
                <router-link to="/detail/shoper" class="vanTapNav1">商品介绍</router-link>
                <router-link to="/detail/parameter" class="vanTapNav2">规格参考</router-link>
                <router-link to="/detail/pack" class="vanTapNav3">包装售后</router-link>
              </div>
              <router-view></router-view>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="home">
        <i class="iconfont icon-shouye"></i>首页
      </div>
      <div class="shoping">
        <i class="iconfont icon-gouwuche"></i>购物车
        <span class="num">{{Bnum}}</span>
      </div>
      <div class="buy" @click="upBnum">
        加入购物车
        </div>
      <div class="nowbuy">立即购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import BScroll from 'better-scroll'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Area } from 'vant'



import Pinglun from '../pages/Pinglun/Pinglun'
import {mapState} from 'vuex'
  export default {
    data(){
      return{
        num:1,
        scrollTop:0,
        datas:{},
        Bnum:0,
        show:true
      }
    },
    components:{
      Pinglun
    },
    mounted(){
      this.$store.dispatch('getDetailRevAction')
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      }),
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      upNum($event){
        this.num = this.num + 1
        console.log($event)
      },
      lowNum(){
        if(this.num !=1){
          this.num = this.num - 1
        }
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.scrollTop = scrollTop
      },
      toChange(path){
        this.show = !this.show
        this.$router.replace(path)
      },
      upBnum(){
        if(this.num != 1){
          this.Bnum = this.Bnum + this.num
        }else{
          this.Bnum = this.Bnum + 1
        }
      },
      toShow(){
        this.show = !this.show
      }
    
    },
    computed:{
      ...mapState({
        mainRev : state => state.mainrev.mainRev.data
      }),
    },
    watch:{
      mainRev(){
        this.$nextTick(()=>{
          this.datas = this.mainRev
        })
        
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
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
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
    &.active
      position fixed
      top 0
      left 0
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
    height calc(100vh - 110px)
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
        .cover
          position fixed
          z-index 100
          top 0
          bottom 0
          background rgba(0,0,0,0.5)
          width 100%
          height 100%
          .citybox
            position fixed
            left 0
            bottom 0
            width 100%
            height 260px
            margin 0 auto
            background #fff
            .city
              width 100%
              background pink
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
          align-items center
          box-sizing border-box
          padding 10px 20px
          border-bottom 1px solid #eee
          .reviewTitle
            width 90%
            display flex
            align-items center
            justify-content space-between
            font-size 16px
          span 
            font-size 16px
          .imp
            color red
          .icon-label_arrow
            color #999
        .detail
          .detailList
            .detailItem
              display flex
              box-sizing border-box
              padding 5px
              border-top 1px solid #eee
              .left
                img 
                  width 55px
                  height 55px
                  box-sizing border-box 
                  padding 10px
              .right
                box-sizing border-box
                padding-right 20px
                .juyou
                  display flex
                  .juyouTitile
                    border-radius 5px
                    background #FF7F00
                    color #fff
                    font-weight normal
                    font-size 12px
                    margin-left 15px
                    padding 2px 5px
                .star
                  img 
                    width 15px
                    height 15px
                  .date
                    margin-left 80px
                    color #999
                .text
                  box-sizing border-box
                  padding 10px 0px
                  font-size 14px
                  color #666
        .default
          width 360px
          height 50px
          margin 0 auto
          border 1px solid #999
          border-radius 15px
          text-align center
          line-height 50px
          font-size 16px
        .vanTap
          box-sizing border-box
          padding-top 5px
          display flex
          flex-direction column
          .vanTapNav
            height 44px
            width 100%
            font-size 16px
            text-align center
            line-height 44px
            display flex
            .vanTapNav1
              width 33.33%
            .vanTapNav2
              width 33.33%
              border-left 1px solid #999
              border-right 1px solid #999
            .vanTapNav3
              width 33.33%
  .footer
    position fixed
    bottom 0
    left 0
    height 50px
    width 100% 
    display flex
    background #fff
    .home
      width 56px
      height 50px
      display flex
      align-items center
      flex-direction column
      box-sizing border-box
      padding 5px
      border-right 1px solid #eee
      color #666
      .icon-shouye
        font-size 24px
    .shoping
      width 56px
      height 50px
      display flex
      align-items center
      flex-direction column
      box-sizing border-box
      padding 5px
      border-right 1px solid #eee
      color #666
      .icon-gouwuche
        font-size 24px
      .num
        display block
        width 14px
        height 14px
        border-radius 50%
        text-align center
        line-height 14px
        background red
        color #fff
        position absolute
        bottom 35px
        left 85px
    .buy
      width 132px
      height 50px
      background #f85
      text-align center
      line-height 50px
      font-size 16px
      color #fff
    .nowbuy
      width 132px
      height 50px
      background #f44
      text-align center
      line-height 50px
      font-size 16px
      color #fff
</style>
