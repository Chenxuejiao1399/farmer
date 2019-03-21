<template>
  <div class="train_box">
    <vue-headful title="培训天地" description="培训天地的tab"></vue-headful>
    <div class="train_box_con">
      <training-index></training-index>
    </div>
    <div class="train_box_tab">
      <van-row class="train_box_row">
        <van-col span="12" class="train_box_col train_box_col_right">
          <div @click="goOffline">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xuexi"></use>
            </svg>
            线下学习
          </div>
        </van-col>
        <van-col span="12" class="train_box_col">
          <div @click="goOnline">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liuyan"></use>
            </svg>
            线上交流
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import TrainingIndex from './components/TrainingIndex'
export default {
  name: 'Training',
  components: {
    'training-index': TrainingIndex
  },
  data () {
    return {}
  },
  methods: {
    goOnline () {
      this.$router.push({ name: 'OnlineList' })
    },
    goOffline () {
      this.$router.push({ name: 'OfflineLearning' })
    }
  }
}
</script>

<style scoped>
  .train_box{
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .train_box_con{
    height: 93vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .train_box_tab{
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-shadow:4px 4px 15px #000;
  }

  .train_box_row{
    height: 7vh;
    line-height: 7vh;
    text-align: center;
  }

  .train_box_col{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .train_box_col_right{
    border-right: 1px solid #e6e6e6;
  }

  .train_box_row svg{
    font-size: 20px;
  }

</style>
