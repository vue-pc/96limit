<template>
  <div id="home">
    <div class="header">


      <!-- 搜索框 -->
      <div class="search">
        <!--            icon图标-->
        <i class="box iconfont icon-sousuo"></i>
        <input class="txt" type="text" placeholder="请输入商品名称" />
      </div>

      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2019/1125/bede17d0d9904dbea57aacac5a4b55db.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2019/1125/1ac3b7938ae04a9db6e89ada3f8d5932.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2019/0930/5e02e64bb8ef420fbf3cd806ab0fc3b8.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2019/1125/90111f6bc45348e08217056398a29a58.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2019/0903/91c7294745134d2ca597ca8abd4ca694.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2019/0903/91c7294745134d2ca597ca8abd4ca694.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2018/1210/8f63d19948434358961f84ec1aba5726.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="http://img0.gjw.com/famous/2018/1210/8f63d19948434358961f84ec1aba5726.jpg" />
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>



    <div class="container">
      <!-- 购酒头条 -->
      <div class="buy">
        <div class="buy_bar">
          <img src="http://m.gjw.com/images/hot.png" />
        </div>
        <div class="white">
          <span>|&nbsp;太白酒&nbsp;醇柔&nbsp;清仓特惠&nbsp;仅需29元</span>
        </div>
      </div>

      <!-- 白酒十个图片 -->
      <div class="baijiu">
        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/34c90a46f767478897208adca7681ae4.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/3f257a2d80cb49e5a1e65340201329f0.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/a8da83fed83c44f2a7a9f64862cd6489.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/229cbdd4a909417ba6218c7e21b48131.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0801/8bf04e420aa64ccfbb9ae530f82ddd7d.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0713/c7ee25ce88144ebe9f1c743c64df2000.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0801/8fccd4a2c00947869641bd32c0a4c42f.jpg" />
        </div>

        <div class="baijiu_item">
          <img src="http://img0.gjw.com/famous/2018/0801/a4b34eda8bc24782994a4d86cd2528ce.jpg" />
        </div>
      </div>

      <!-- 掌上秒杀 -->
      <div class="miaosha">
        <span class="miaosha_one">掌上生活</span>
        <span class="miaosha_two">距结束</span>

        <div class="date">22</div>
        <div class="date">40</div>
        <div class="date">40</div>
      </div>

      <!-- 马上抢 -->
      <div class="shopping">
        <img src="http://img0.gjw.com/product/2017/0617/6d54fc527f404267ac4cc4d722331125.jpg" />
        <span class="shopping_one">50度 郎酒 郎牌特曲T6 精英版 500ml</span>
        <span class="shopping_two">￥128</span>
        <div class="shopping_btn">马上抢</div>
      </div>

      <!-- 生肖纪念 -->
      <div class="jinian">
        <img src="http://img0.gjw.com/famous/2019/1125/734adddcccb843e1a775a60be00f0caf.jpg" />
        <img
          class="jinian_two"
          src="http://img0.gjw.com/famous/2019/1125/d9690880c9f1410590e8c550af337266.jpg"
        />
      </div>

      <!-- 买一送一 -->
      <div class="double">
        <img
          class="double_one"
          src="http://img0.gjw.com/famous/2019/1126/0f4dccc072a44ff48b15f3c6f19869d6.jpg"
        />
        <img
          class="double_two"
          src="http://img0.gjw.com/famous/2019/1123/771f2ee6957b4a31833b5fc3d6577b1b.jpg"
        />
        <img
          class="double_three"
          src="http://img0.gjw.com/famous/2019/1123/9d16481e54d24168a3c90b3fe479991c.jpg"
        />
      </div>

      <!-- 正品保证 -->
      <div class="zhengpin">
        <div class="zhengpin_one">
          <i class="icon_one iconfont icon-duigou"></i>
          <span class="zhengpin_text">正品保证</span>
          <i class="icon_one iconfont icon-boxxiangzi"></i>
          <span class="zhengpin_text">开箱验货</span>
          <i class="icon_one iconfont icon-yusan01"></i>
          <span class="zhengpin_text">赔付保障</span>
        </div>
      </div>


      <!-- 茅台    -->
      <div class="maotai">
        <img src="http://img0.gjw.com/famous/2019/1125/a720d98487734b84ba992f156af78da2.jpg" />
      </div>
      <div class="maotai_two">
        <img src="http://img0.gjw.com/famous/2019/1123/880727e4700346f3b102c1af06c5e346.jpg" />
      </div>
    </div>


  </div>

</template>




<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>




<style lang="stylus" rel="stylesheet/stylus">
  
           
        

 
</style>
