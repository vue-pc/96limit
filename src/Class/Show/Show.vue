<template>
  <div id="showBox">
    <Show/>
    <van-tabs v-model="active">
      <van-tab title="综合">
        <ul class="container">
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="销量">
        <ul class="container">
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
        </ul>        
      </van-tab>
      <van-tab title="价格">
        <ul class="container">
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
          <li class="container_left">
            <img class="picture" src="http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd_2.jpg" alt="">
            <p class="tit">53度 茅台 飞天带杯（ 2019年产 ）500ml</p>
            <div class="price">￥99999</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
        </ul>        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import Show from '../../components/Search/Search'
  export default {
    components: {
      Show
    },
    data() {
      return {
        active: 2
      };
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #showBox
    width 100%
    height 100%
    .container
      width 100%
      height 100%
      .container_left
        margin-top 10px 
        width 175px
        height 290px
        float left      
        margin-left 10px
        .picture
          width 160px
          height 160px 
        .tit
          width 160px
          height 36px
          color #444
          margin 5px 0
          font-size 12px
        .price
          width 160px
          height 14px
          color red
          font-size 16px
          font-weight bold
        .tip  
          width 160px
          height 22px
          color #999
          margin-top 10px
          display flex
          justify-content space-between

</style>
