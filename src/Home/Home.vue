<template>

<div id="home">

  <div class='header'>
    <!-- 搜索框 -->
    <div class="search" @click="goPath('/Search')">
      <!--            icon图标-->
      <i class="box iconfont icon-sousuo"></i>
      <input class="txt" type="text" placeholder="请输入商品名称">
    </div>

   <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2019/1125/bede17d0d9904dbea57aacac5a4b55db.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2019/1125/1ac3b7938ae04a9db6e89ada3f8d5932.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2019/0930/5e02e64bb8ef420fbf3cd806ab0fc3b8.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2019/1125/90111f6bc45348e08217056398a29a58.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2019/0903/91c7294745134d2ca597ca8abd4ca694.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2019/0903/91c7294745134d2ca597ca8abd4ca694.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2018/1210/8f63d19948434358961f84ec1aba5726.jpg'>
          </div>

          <div class="swiper-slide">
            <img src='http://img0.gjw.com/famous/2018/1210/8f63d19948434358961f84ec1aba5726.jpg'>
          </div>
        
          </div> 
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
    </div> 
  </div>



  <div class='container'>


      <!-- 购酒头条 -->
    <div class='buy'>
      <div class='buy_bar'>
        <img src='http://m.gjw.com/images/hot.png'>
      </div>
      <div class='white'>
        <span>|&nbsp;太白酒&nbsp;醇柔&nbsp;清仓特惠&nbsp;仅需29元</span>
      </div>
    </div>


   <!-- 白酒十个图片 -->
    <div class='baijiu'>
      <div class='baijiu_item' @click="goPath('/show')">        
       <img src='http://img0.gjw.com/famous/2018/0713/34c90a46f767478897208adca7681ae4.jpg'>
      </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0713/3f257a2d80cb49e5a1e65340201329f0.jpg'>
    </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0713/a8da83fed83c44f2a7a9f64862cd6489.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0713/229cbdd4a909417ba6218c7e21b48131.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0801/8bf04e420aa64ccfbb9ae530f82ddd7d.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0713/c7ee25ce88144ebe9f1c743c64df2000.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0801/8fccd4a2c00947869641bd32c0a4c42f.jpg'>
     </div>

     <div class='baijiu_item' @click="goPath('/show')">
       <img src='http://img0.gjw.com/famous/2018/0801/a4b34eda8bc24782994a4d86cd2528ce.jpg'>
     </div>
    </div>


    <!-- 掌上秒杀 -->
    <div class='miaosha'>
      <span class='miaosha_one'>掌上生活</span>
      <span class='miaosha_two'>距结束</span>

      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="data">{{ timeData.hours }}</span>
          <span class="data">{{ timeData.minutes }}</span>
          <span class="data">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>


    </div>

    <!-- 马上抢 -->
    <div class='shopping'>
      <img src='http://img0.gjw.com/product/2017/0617/6d54fc527f404267ac4cc4d722331125.jpg'>
      <span class='shopping_one'>50度 郎酒 郎牌特曲T6 精英版 500ml</span>
      <span class='shopping_two'>￥128</span>
      <div class='shopping_btn'>马上抢</div>
    </div>

    <!-- 生肖纪念 -->
    <div class='jinian'>
      <img src='http://img0.gjw.com/famous/2019/1125/734adddcccb843e1a775a60be00f0caf.jpg'>
      <img class='jinian_two'src='http://img0.gjw.com/famous/2019/1125/d9690880c9f1410590e8c550af337266.jpg'>
    </div>

    <!-- 买一送一 -->
    <div class='double'>
      <img class='double_one' src='http://img0.gjw.com/famous/2019/1126/0f4dccc072a44ff48b15f3c6f19869d6.jpg'>
      <img class='double_two' src='http://img0.gjw.com/famous/2019/1123/771f2ee6957b4a31833b5fc3d6577b1b.jpg'>
      <img class='double_three' src='http://img0.gjw.com/famous/2019/1123/9d16481e54d24168a3c90b3fe479991c.jpg'>
    </div>

    <!-- 正品保证 -->
    <div class='zhengpin'>
        <div class='zhengpin_one'>
          <i class="icon_one iconfont icon-duigou"></i>
          <span class='zhengpin_text'>正品保证</span>
          <i class="icon_one iconfont icon-boxxiangzi"></i>
          <span class='zhengpin_text'>开箱验货</span>
          <i class="icon_one iconfont icon-yusan01"></i>
          <span class='zhengpin_text'>赔付保障</span>
       </div>
    </div>
 

   <!-- 茅台    -->
   <div class='maotai'>
     <img src='http://img0.gjw.com/famous/2019/1125/a720d98487734b84ba992f156af78da2.jpg'>
   </div>
   <div class='maotai_two'>
     <img src='http://img0.gjw.com/famous/2019/1123/880727e4700346f3b102c1af06c5e346.jpg'>
   </div>

 </div>
  

  <!-- 精选 -->
  <div class='jingxuan'>
    <div class='jingxuan_img'>
      <van-tabs v-model="active">
        <van-tab title="精选">
          <ul class='liebiao'>
            <!-- ------------------------------------------------- -->
            <li class='liebiao_item' v-for="(homepic,index) in pictureList" :key="index">
              <img :src='homepic.img'>
              <span class='liebiao_text'>{{homepic.productname}}</span>
              <span class='liebiao_one'>{{homepic.name}}</span>
              <span class='liebiao_two'>￥{{homepic.price}}</span>
            </li>
          

           
            <!-- ------------------------------------------------- -->
          </ul>
        </van-tab>
        <!-- --------second----------- -->
        <van-tab title="白酒">
          <ul class='liebiao'>
            <!-- ------------------------------------------------- -->
            <li class='liebiao_item' v-for="(homepic,index) in pictureList" :key="index">
              <img :src='homepic.img'>
              <span class='liebiao_text'>{{homepic.productname}}</span>
              <span class='liebiao_one'>{{homepic.name}}</span>
              <span class='liebiao_two'>￥{{homepic.price}}</span>
            </li>
           
            <!-- ------------------------------------------------- -->
          </ul>
        </van-tab>
        <!-- ---------three----------- -->
        <van-tab title="葡萄酒">
          <ul class='liebiao'>
            <!-- ------------------------------------------------- -->
            <li class='liebiao_item' v-for="(homepic,index) in pictureList" :key="index">
              <img :src='homepic.img'>
              <span class='liebiao_text'>{{homepic.productname}}</span>
              <span class='liebiao_one'>{{homepic.name}}</span>
              <span class='liebiao_two'>￥{{homepic.price}}</span>
            </li>            
           
            <!-- ------------------------------------------------- -->
          </ul>
        </van-tab>
        <!-- ---------four----------- -->
        <van-tab title="清酒">
          <ul class='liebiao'>
            <!-- ------------------------------------------------- -->
            <li class='liebiao_item' v-for="(homepic,index) in pictureList" :key="index">
              <img :src='homepic.img'>
              <span class='liebiao_text'>{{homepic.productname}}</span>
              <span class='liebiao_one'>{{homepic.name}}</span>
              <span class='liebiao_two'>￥{{homepic.price}}</span>
            </li> 
           
            <!-- ------------------------------------------------- -->
          </ul>
        </van-tab>
        <!-- ---------five----------- -->
        <van-tab title="黄酒">
          <ul class='liebiao'>
            <!-- ------------------------------------------------- -->
            <li class='liebiao_item' v-for="(homepic,index) in pictureList" :key="index">
              <img :src='homepic.img'>
              <span class='liebiao_text'>{{homepic.productname}}</span>
              <span class='liebiao_one'>{{homepic.name}}</span>
              <span class='liebiao_two'>￥{{homepic.price}}</span>
            </li> 
           
            <!-- ------------------------------------------------- -->
          </ul>
        </van-tab>
        <!-- ---------six----------- -->
        <van-tab title="年份老酒">
          <ul class='liebiao'>
            <!-- ------------------------------------------------- -->
            <li class='liebiao_item' v-for="(homepic,index) in pictureList" :key="index">
              <img :src='homepic.img'>
              <span class='liebiao_text'>{{homepic.productname}}</span>
              <span class='liebiao_one'>{{homepic.name}}</span>
              <span class='liebiao_two'>￥{{homepic.price}}</span>
            </li> 
           
            <!-- ------------------------------------------------- -->
          </ul>
        </van-tab>                     
      </van-tabs>
    </div>
  </div>
</div>
</template>




<script type="text/ecmascript-6">

import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {mapState} from 'vuex'
import homeDate from '../data/home.json'
 
export default {
  data(){
    return{
      datas:{},      
      active: 2,
      time: 30 * 45 * 45 * 1000
    }
  },
   methods: {
      goPath(path){
      this.$route.path !== path && this.$router.replace(path)
      },     
    },
  async mounted() {
    this.$store.dispatch('getPictureListAction'),
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    }),
    this.datas = homeDate
  },
  computed:{
      ...mapState({
        pictureList: state => state.pictureList
      })
    },


}
</script>




<style lang="stylus" rel="stylesheet/stylus">
  #home
    width 100%
    height 100%
    position relative
    .header
      width 100%
      height 176px
      .search
        width 90%
        height 35px
        line-height 35px
        background-color #fff
        border 0.5px solid  #fff
        border-radius 5px
        margin 0 auto
        z-index 5
        position absolute
        top 5px
        left 20px
        .box
          padding 0 10px   
        .txt
          outline none 
          border none
          font-size 15px 
          color #ccc
      .swiper-container
        width 100%
        height 100%   
        .swiper-wrapper
          width 100%
          height 100% 
          .swiper-slide
            img
              width 100%
              height 100%
    .container
      width 100%
      height 950px
      .buy
        position relative
        width 100%
        height 30px
        margin-top 10px
        .buy_bar
          width 100%
          height 30px
          display inline-block
          img
            width 80px
            height 15px
            position absolute
            top 10px
            left 15px
        .white
          position absolute
          display inline-block
          height 16px
          left 100px
          top 10px
          span 
            font-size 13px
            color #333
            top 20px
      .baijiu
        width 100%
        height 200px
        .baijiu_item
          img
           width 69px
           height 69px
           float left 
           margin 25px 0 0 5px
      .miaosha
        width 100%
        height 44px
        .miaosha_one
          font-size 15px
          font-weight bold
          margin 0 10px 0 10px
          float left
        .miaosha_two
          font-size 16px
          color #6b6b6b
          margin 0 10px 0 0 
          float left 
        .data
          width 22px
          height 22px
          line-height 22px
          text-align center
          background #999
          border-radius 5px
          float left
          color #fff
          margin-left 5px
          margin-top -2px
      .shopping
        width 100%
        height 140px
        position relative
        img    
          width 110px
          height 110px
          padding 5px
        .shopping_one
          font-size 12px 
          font-weight bold
          position absolute
          top 20px
        .shopping_two
          color #ff4444
        .shopping_btn
          font-size 14px
          text-align center
          width 50px
          height 20px
          background #5eaffe
          line-height 20px
          border-radius 5px
          color #fff
          position absolute
          right 30px
          bottom 30px
      .jinian
        img
         width 182px
         height 150px 
        .jinian_two
          margin-left 10px 
      .double
        width 100%
        height 130px
        margin-top 10px
        .double_one
          width 172px
          height 111px 
          margin-left 15px      
        .double_two
          width 86px
          height 112px
        .double_three
          width 86px
          height 112px
      .zhengpin
        width 100%
        height 30px
        
      .icon_one
        font-size 25px
        color #ccc
        margin-left 20px
      .zhengpin_text 
        font-size 16px   
        color red
        margin-left 10px
      .maotai
        widht 80%
        height 110px
        margin-top 10px
        img
         width 100%
         height 120px
      .maotai_two
        margin-top 10px
        img
          width 100%
          height 65px
    .jingxuan
      width 100%  
      height 700px
      .jingxuan_img
        width 100%
        height 100%
        .liebiao
          .liebiao_item
            float left
            width 177px
            height 267px
            margin 10px 0 0 10px
            position relative
            img 
              width 168px
              height 168px
          .liebiao_text
            width 168px
            height 36px
            font-size 15px
            color #666 
            position absolute
            bottom 50px
            left 5px
            color #666
          .liebiao_one
            width 44px
            height 15px
            background #ffa855
            position absolute
            bottom 20px
            left 10px
            width 60px
            line-height 20px
            height 20px
            text-align center
            border-radius 20px
            color #fff
          .liebiao_two
            position absolute
            bottom 2px
            left 10px
            color red
            font-size 15px
</style>
