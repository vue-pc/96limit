<template>
<div class="app">
    <div class="header">
      <div class="usr_top">
        <div class="no_login">
          <img src="../../start/1.png">
          
          <div class="text">
            <p>登录/注册 &gt;</p>
          </div>    
        </div>        
      </div>
    </div>
    <!-- 内容区 -->
    <div class="conent">
      <div class="middle">
        <div class="nav">
            <p class="t1">我的订单</p>
            <p class="t2">查看全部订单></p>
        </div> 
        <ul class="list">
          <li class="item">
            <img src="../../start/2.png">
              <p>待付款</p>
          </li>
          <li class="item">
            <img src="../../start/3.png">
              <p>待发货</p>
          </li>
          <li class="item">
            <img src="../../start/4.png">
              <p>待收货</p>
          </li>
          <li class="item">
            <img src="../../start/5.png">
              <p>待评价</p>
          </li>
          
        </ul>
      
      <!-- 我的钱包 -->
      <div class="wallet">
          <div class="right">
            <p class="t3">我的钱包</p>
            <p class="t4">查看明细></p>
          </div>
           <div class="van-conent">
              <p class="zhuanghu">账户余额</p>
              <p class="zhuanghu"> 优惠券</p>
              <p class="zhuanghu"> 积分</p>
             
           </div>

      </div>
      </div>   
  </div>
    <div class="nav_top">
      <ul class="nav_list">
        <li class="nav_item">
          <img src="../../start/6.png">
          <p>商品收藏</p>
        </li>
        <li class="nav_item">
          <img src="../../start/7.png">
          <p>浏览器足迹</p>
        </li>
        <li class="nav_item">
          <img src="../../start/8.png">
          <p>400-722-1919</p>
        </li>
        <li class="nav_item">
          <img src="../../start/9.png">
          <p>领券福利</p>
        </li>
      </ul>
    </div>
    <div class="hot">
      <div class="bg_tit">
        <p>推荐商品</p>
      <div class="line"></div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.app
  width 100%
  height 750px
  background #ccc
  .header
   
    width 375px
    height 160px
    .usr_top 
      width 375px
      height 160px
      display flex
      .no_login
        width 100%
        background black
        img 
          width 80px
          height 80px
          margin 20px

        .text 
          font-size 15px
          margin-left 130px
          margin-top -80px
        p
          color white
  .conent
    .middle   
      .nav
        height 44px
        .t1
          float left
          padding 10px  
        .t2 
          float right 
          padding 17px
    .list 
      width 100%
      height 94px
      display flex
     .item
      width 94px
      height 30px
      
      margin-right 20px
      padding-top 40px
      padding 15px
      img 
        width 30px
        height 30px
        padding 5px

    .wallet 
      .right 
        height 44px 
        .t3
          float left 
          padding 10px
        .t4
          float right
          padding 10px
      .van-conent
          height 81px
        .zhuanghu
          float left
          margin-top 80px
          margin 30px
          font-size 13px
          color #33333
  .nav_top
      // width 375px
      // height 104px
    .nav_list 
      width 100%
      height 94px
      display flex
     .nav_item
      width 94px
      height 30px   
      img 
        width 30px
        height 30px
        padding 20px
        margin-right 50px
  .hot
    padding 13px
    .bg_tit 
      width 300px
      height 34px
      p 
        padding-left 130px 
        font-size 14px

    .line 
      height 1px
      background #EEAA22





</style>
