<template>
  <div class="untask_bg">
    <vue-headful title="派发任务"></vue-headful>
    <van-row type="flex" justify="space-between" align="center" class="untask_row">
      <van-col span="6">
        <div class="untask_left">
          <img class="avatar" src="../../../../../../src/static/3.jpg">
          <span class="name">张三</span>
        </div>
      </van-col>
      <van-col span="13">
        <input type="text" class="input_div" v-model="value1">
        <input type="text" class="input_div" v-model="value1">
      </van-col>
      <van-col span="5">
        <van-button type="default" size="small" class="untask_btn">派发</van-button>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-between" align="center" class="untask_row">
      <van-col span="6">
        <div class="untask_left">
          <img class="avatar" src="../../../../../../src/static/3.jpg">
          <span class="name">张三</span>
        </div>
      </van-col>
      <van-col span="13">
        <input type="text" class="input_div" v-model="value1">
        <input type="text" class="input_div" v-model="value1">
      </van-col>
      <van-col span="5">
        <van-button type="default" size="small" class="untask_btn">派发</van-button>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-between" align="center" class="untask_row">
      <van-col span="6">
        <div class="untask_left">
          <img class="avatar" src="../../../../../../src/static/3.jpg">
          <span class="name">张三</span>
        </div>
      </van-col>
      <van-col span="13">
        <input type="text" class="input_div" v-model="value1">
        <input type="text" class="input_div" v-model="value1">
      </van-col>
      <van-col span="5">
        <van-button type="default" size="small" class="untask_btn">派发</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Untask',
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>
  .untask_bg{
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 1vh 4vw 0;
  }

  .untask_row{
    padding-bottom: 1vh;
  }

  .untask_left{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .untask_left .name{
    padding: 0 5px;
  }

  .input_div{
    width: 21vw;
    height: 3.5vh;
    margin: 0 1vw ;
  }

  .untask_btn{
    background-color:#6BB44E;
    color: #fff;
    border-radius: 4px;
  }
</style>
