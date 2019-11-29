<template>
  <div>
     <div class="header">
      <mt-header class="head2" fixed title="手机快捷登录">
        <router-link to="/" slot="right">
          <mt-button>注册</mt-button>
        </router-link>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>  
    <div class="login">
        <div class="user">    
            <img src="../../start/15.png" />
            <mt-field
             name="phone" 
             v-validate="'required|phone'" 
             type='tel' 
             :attr="{oninput:'if(value.length>11)value=value.slice(0,11)'}" 
             placeholder="请输入11位手机号" ></mt-field>
              <!-- <input v-validate="'required|phone'" type="tel" maxlength="11" placeholder="手机号"> -->
              <span style="color:red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
        </div> 
        <div class="cade">
            <img src="../../start/2.png" />
            <mt-field 
              name="code" 
              v-validate="'required|code'" 
              type='tel' 
              :attr="{oninput:'if(value.length>6)value=value.slice(0,6)'}" 
              placeholder="请输入短信验证码">
            </mt-field>
              
              <span style="color:red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
              <mt-button  class="btn" :class="isRightPhoneNumber?'right_phone_number':''" type="danger" @click.prevent="sedCode">获取验证码</mt-button>
                
            <!-- </mt-field> -->
        </div>
</div>
        <mt-button class="t3" @click="login">验证登录</mt-button>
        <p class="t4">账号登录</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { Field } from 'mint-ui';
import { Header } from "mint-ui";
import { Button } from "mint-ui";
import Vue from "vue";
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
  export default {
    data(){
      return{
        isPassWordLogin:false,
        name:'',
        password:'',
        phone:'',
        code:'',
        
      }
    },
      methods:{
        async login(){
          let {isPassWordLogin} = this
          let names = isPassWordLogin? ['username', 'pwd', ]: ['phone', 'code']
          const success = await this.$validator.validateAll(names) // 对所有表单项进行验证
        // console.log(success);
          console.log(names) 
          if(names){
            alert('前端验证成功')
          }else{
            alert('前端验证失败')
          }
        },
         sedCode(){
          console.log('发送验证码')
     }
  },
    
      goPath(path){
        this.$route.path !== path && this.$router.replace(path) 
    },  
  
  computed:{
    isRightPhoneNumber(){
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
    }
  }
      
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
 .header {
    width: 100%;
    height: 40px;

  .head2 {
    background-color: white;
    color: black;
    font-size 16px
    position relative
  }
    .back{
      // margin-right 50px
      padding-right 50px
      position absolute
    }

}  
 .login{
    margin-top: 0px;
    width: 100%;
    .user{
        img {
            float left;
            width 15px;
            height 24px;
            padding 5px;
        }
    }
    .cade{
        position relative
        img{
            float left;
            width 16px;
            height 24px;
            padding 10px;  
        }
         
        .t1{
            width 50px
            height 18px
            color #f444
        } 
        .btn {
            position absolute
            right 0px 
            top 0px
        }
          
       
    }
    
 }
    .t3
        width 100%
        background #ccc
        // padding 5px
    .t4
        margin-bottom 40px
        padding-left 300px
        // padding-bottom 20px
        margin 7px
        font-size 15px
</style>
