<template>
    <div class="register_bg">
      <vue-headful title="注册"></vue-headful>
      <div class="register_title">用户登录</div>
      <van-cell-group>
        <van-field v-model="name" left-icon="contact" clearable label="姓名" placeholder="请输入姓名"/>
        <van-field v-model="idNum" left-icon="other-pay" clearable label="身份证" placeholder="请输入身份证"/>
      </van-cell-group>
      <div class="register_btn">
        <van-button size="normal">登录</van-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      idNum: ''
    }
  }
}
</script>

<style scoped>
  .register_bg{
    background-image: url("../static/images/register_bg.png");
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
  }

  .register_title{
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    padding-top: 20vh;
    text-align: center;
  }

  .register_btn{
    text-align: center;
  }
</style>

<style>
  .van-cell-group{
    margin: 6vh 11vw;
    background-color: transparent;
  }

  .van-cell{
    background-color: transparent;
    border: 1px solid #ccc;
    margin: 3vh 0;
    padding: 8px 10px;
    border-radius: 4px;
  }

  .van-field .van-cell__title{
    max-width: 60px;
  }

  .van-button--normal {
    padding: 0 45px;
    font-size: 14px;
    color: #fff;
    background-color: #6BB44E;
    border-radius: 4px;
  }
</style>
