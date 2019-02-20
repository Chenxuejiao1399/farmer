<template>
    <div>
      <vue-headful title="生产管理"></vue-headful>
      <div class="product_top">
        <img src="../../../static/images/product_bg.png">
        <div class="product_top_div">
          <div class="product_top_texts">
            <div class="product_top_name">毛栗村</div>
            <div>毛栗村生产合作社</div>
          </div>
          <!--<div class="product_top_menu">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chuangjianyingyong_fu1"></use>
            </svg>

          </div>-->
          <van-row class="product_top_menu" type="flex" justify="center">
            <van-col span="6">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chuangjianyingyong_fu1"></use>
              </svg>
              <div>创建新项目</div>
            </van-col>
            <van-col span="6">
              <svg class="icon" aria-hidden="true" style="color:#ea71a7">
                <use xlink:href="#icon-jihuasvg1"></use>
              </svg>
              <div>生产计划</div>
            </van-col>
            <van-col span="6">
              <svg class="icon" aria-hidden="true" style="color:#eb8344;">
                <use xlink:href="#icon-renyuanguanli"></use>
              </svg>
              <div>人员管理</div>
            </van-col>
            <van-col span="6">
              <svg class="icon" aria-hidden="true" style="color:#90d94c">
                <use xlink:href="#icon-nongye"></use>
              </svg>
              <div>农资管理</div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductManagement'
}
</script>

<style scoped>
  .product_top{
    background-size: 100% 100%;
  }

  .product_top img{
    height: 16vh;
    width: 100vw;
  }

  .product_top_div{
    position: absolute;
    top: 2vh;
    width: 100vw;
  }

  .product_top_texts{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }

  .product_top_texts .product_top_name{
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .product_top_menu{
    background-color: #ffffff;
    width: 93vw;
    box-shadow:3px 3px 15px #c9c9c9;
    border-radius: 5px;
    margin: 2vh auto 0;
    text-align: center;
    font-size: 12px;
    padding: 2vh 0;
  }

  .product_top_menu svg{
    font-size: 32px;
    padding-bottom: 6px;
  }
</style>
