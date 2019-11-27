<template>
  <div id="pinglun">
    <div class="review">
            <div class="reviewTitle" @click="goBack">
              <span>< 评价(40)</span>
              <span>好评度</span>
            </div>
            <span class="imp">98%</span>
            <i class="iconfont icon-label_arrow"></i>
          </div>
          <div class="detail">
            <ul class="detailList">
              <li class="detailItem" v-for="(data, index) in pinglun" :key="index">
                <div class="left">
                  <img src="../../../public/images/user.png" alt="">
                </div>
                <div class="right">
                  <div class="juyou">
                    <p>{{data.Usr_NiceName}}</p>
                    <p class="juyouTitile">{{data.Usr_LeveName}}</p>
                  </div>
                  <div class="star">
                    <img src="../../../public/images/xx.png" alt="">
                    <img src="../../../public/images/xx.png" alt="">
                    <img src="../../../public/images/xx.png" alt="">
                    <img src="../../../public/images/xx.png" alt="">
                    <img src="../../../public/images/xx.png" alt="">
                    <span class="date">{{data.CreateTime}}</span>
                  </div>
                  <p class="text">
                     {{data.Content}}
                  </p>
                </div>
              </li>

            </ul>
          </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    data(){
      return{
        datas:{}
      }
    },
    mounted(){
      this.$store.dispatch('getPinglunAction')
    },
    methods:{
      goBack(){
        this.$router.replace('/detail')
      }
    },

    computed:{
      ...mapState({
        pinglun : state => state.pinglun.pinglun.data
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #pinglun 
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
</style>
