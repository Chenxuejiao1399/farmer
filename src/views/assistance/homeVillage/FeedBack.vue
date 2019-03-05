<template>
    <div>
      <div class="feedback_bg">
        <img src="../../../static/images/feedback_bg.png">
        <div class="feedback_title">球盖菇种植项目</div>
      </div>
      <van-cell-group>
        <div class="subTitle">今日心得或反馈：</div>
        <van-field type="textarea" rows="10" autosize v-model="con" placeholder="请输入自己的心得或工作反馈~" />
      </van-cell-group>
      <div class="btn_div">
        <van-button type="default">默认按钮</van-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FeedBack',
  data () {
    return {
      con: ''
    }
  }
}
</script>

<style scoped>
.feedback_bg{
  background-size: 100% 100%;
}

  .feedback_bg img{
    width: 100vw;
    height: 16vh;
  }

  .feedback_bg .feedback_title{
    position: absolute;
    top: 0;
    width: 100vw;
    height:16vh;
    line-height: 16vh;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .subTitle{
    font-size: 16px;
    padding:1vh 0 0 4vw;
  }

  .btn_div{
    position: absolute;
    bottom: 10vh;
    width: 90vw;
    left: 50%;
    margin-left: -45vw;
  }
</style>
