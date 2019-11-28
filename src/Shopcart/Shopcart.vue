<template>
  <div class="wrapper">
    <ul class="cart_list">
      <li v-for="(item, index) in wines" :key="item.id">
        <!-- <input type="checkbox" v-model="item.Checked"> -->
        <van-checkbox v-model="item.Checked" class="check" @click="changeTitle" ref="name"></van-checkbox>
        <img :src="item.image" alt="" />
        <div class="card_content">
          <div class="trade">
            <span>{{ item.title }}</span>
            <span>现实抢购</span>
          </div>
          <div class="price">
            <span class="red">{{ item.price }}</span>
            <!-- 加减 -->
            <Cartadd />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Bscroll from 'better-scroll'
import Cartadd from '../components/Cartadd/Cardadd'
export default {
  // name:''
  data(){
     return {
      // isCheck: ture
      // show:null、
      // wines.:null
      // Checked
      
    }
  },
  props:{
    Checked:Boolean
  },
  components:{
   Cartadd
 },
  mounted(){
     this.$store.dispatch('getWinesAction'),
     this.leftScroll = new Bscroll('.wrapper',{
        scrollX: false,
        scrollY:true,
        click:true
      }) 
  },
  methods: {
    changeTitle(){
      console.log(this.$refs.name)
      
    }
  },

  computed:{
    ...mapState({
      // wines:result.jiuxianziying
      wines:state => state.wines
    })
  },
  watch:{
    Checked(value){
      this.$store.commit('checkAll',{flag:value,that:this})
     console.log(value)
    },
    
  }

}
</script>

<style lang="stylus">
.wrapper
  position absolute
  top 50px
  bottom 105px
  overflow hidden
  .cart_list
    background #fff
    // position absolute
    // position fixed
    // width 100%
    // top 50px

    // margin-bottom 50px
    // overflow hidden
    li
      display flex
      height 100px
      border-bottom 3px solid #ECECEC
      .check
        margin 0px 10px
      img
        width 90px
        height 90px
        border-radius 5px
      .card_content
        .trade
          width 220px
          // background pink
          margin-left 10px
          span:nth-child(1)
            font-size 13px
          span:nth-child(2)
            display block
            color #fff
            // font-size 30px
            width 52px
            height 18px
            background #F9CC9D
            line-height 18px
            border-radius 8px
            text-align center
        .price
            background pink
            position relative
            .red
              color red
              position absolute
              left 30px
              top 20px
              font-size 16px
</style>
