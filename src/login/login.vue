<template>
  <div>
    <div class="header">
      <mt-header class="head1" fixed title="账号登录">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="login">
      <div class="user">
         <img src="../../start/15.png" />
        <!-- label="用户名" -->
        <mt-field  v-model="name" name="username" v-validate="'required|phone'" type="tel"  maxlength="11" placeholder="用户名/邮箱/手机" ></mt-field>
          <span style="color:red;" v-show="errors.has('username')">{{errors.first('username')}}</span>
      </div>
      <div class="password">
        <img src="../../start/14.png" />
        <mt-field  
          v-validate="'required|code'"
           maxlength="8" 
          placeholder="密码"
          name= 'password'
          v-model='password'
          >
          <span style="color:red;" v-show="errors.has('password')">{{errors.first('password')}}</span>
          </mt-field>
         
      </div>
    </div>
    <div class="list">
      <p class="left">
        <a href="/forget.html">忘记密码</a>
      </p>
      <p class="right">
        <a href="/register.html" class="fr">注册</a>
      </p>
    </div>
    <div class="pass_login">
      <mt-button class="button" type="default" size="large" @click="login">登录</mt-button>
    </div>
    <div class="mes_login">
        <!-- plain幽灵按钮也就是镂空按钮 
        style="border-radius:30px"-->
      <mt-button class="button" name="captcha" v-validate="'require'" type="danger" maxLengeth="6" size="large"  @click="goPath('/note')" plain>短信验证码登录</mt-button>
      <span style="color:red;" v-show="errors.has('captcha')">{{errors.first('captcha')}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Field } from "mint-ui";
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
   methods: {
     async login(){
      let {isPassWordLogin} = this
        let names = isPassWordLogin? ['username', 'password', ]: ['phone', 'code']
        const success = await this.$validator.validateAll(names) // 对所有表单项进行验证
        console.log(success);
      //  console.log(names)
     },
      goPath(path){
      this.$route.path !== path && this.$router.replace(path)
    }
  }, 





};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header {
  width: 100%;
  height: 40px;

  .head1 {
    background-color: white;
    color: black;
    font-size 16px
  }
    

  img {
    width: 30px;
    height: 20px;
    opacity: 0.5;
    padding: 10px;
  }
}

.login {
  margin-top: 0px;
  width: 100%;
  .user{
     
    img {
        float left 
        width 15px
        height 24px
        padding 10px
    }
  }
  .password{
     
    img {
        float left
        width 22px
        height 22px
        padding 10px
    } 
  }
}

.left {
  float: left;
  font-size: 14px;
  padding: 5px;
  padding-left: 10px;
}

.right {
  float: right;
  font-size: 14px;
  padding: 5px;
  padding-right: 10px;
}

.pass_login {
  margin-top: 20px;
  padding: 5px 10px 5px 10px;
  border-radius: 30px;

  .button {
    border-radius: 30px;
    height: 50px;
  }
}

.mes_login {
  margin-top: 5px;
  padding: 0 10px 0 10px;

  .button {
    height: 50px;
    border-radius: 30px;
  }
}
</style>
