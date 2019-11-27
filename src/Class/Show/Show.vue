<template>
  <div id="showBox">
    <Search />

    <van-tabs v-model="active">
      <van-tab title="综合">
        <ul class="container">
          <li class="container_left"  v-for="(list,index) in classList" :key="index">
            <img class="picture"  :src="list.img" >
            <p class="tit">{{list.productname}}</p>
            <div class="price">￥{{list.price}}</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
        </ul>
        
         
      </van-tab>
      <van-tab title="销量">
        <ul class="container">
          <li class="container_left"  v-for="(list,index) in classList" :key="index">
            <img class="picture":src="list.img" >
            <p class="tit">{{list.productname}}</p>
            <div class="price">￥{{list.price}}</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>



        </ul>        
      </van-tab>
      <van-tab title="价格">
        <ul class="container">
          <li class="container_left"  v-for="(list,index) in classList" :key="index">
            <img class="picture":src="list.img" >
            <p class="tit">{{list.productname}}</p>
            <div class="price">￥{{list.price}}</div>
            <div class="tip">666条好评<span></span>12%好评</div>
          </li>
        </ul>        
      </van-tab>
    </van-tabs>


  </div>
</template>

<script type="text/ecmascript-6">
import Search from '../../components/Search/Search'
 import {mapState} from 'vuex'
  export default {
    async mounted() {
      this.$store.dispatch('getClassListAction')
    },
    computed:{
      ...mapState({
        classList: state => state.classList
      })
    },
    components: {
      Search
    },
    data() {
      return {
        active: 2,
        imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
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
