<template>
  <div :class="{ 'agriculture_bg': isShow }">
    <vue-headful title="农业气象"/>
    <van-tabs sticky :class="{ 'agriculture_tab': isShow }" @click="getActiveTab">
      <van-tab title="农业气象">
        <van-row type="flex" justify="space-between" class="agriculture_top">
          <van-col span="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-didian"></use>
            </svg>
            百花湖镇
          </van-col>
          <van-col span="5" class="agriculture_top_tag">
            <span>大雾预警</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="6" offset="2" class="agriculture_middle_left">
            <span>西南风一级</span>
            <span>相对湿度 59%</span>
          </van-col>
          <van-col span="6" class="agriculture_middle_center">
            <span>18</span></van-col>
          <van-col span="6" class="agriculture_middle_right"><span>晴</span></van-col>
        </van-row>
        <div class="agriculture_hour">
          <div class="agriculture_hour_title">
            <svg class="icon" aria-hidden="true" style="font-size: 20px">
              <use xlink:href="#icon-shi"></use>
            </svg>
            <span>逐小时预报</span>
          </div>
          <van-swipe :width="62" :height="100" :show-indicators="false" class="agriculture_hour_con">
            <van-swipe-item class="weather_item" v-for="(item,index) in weather" :key="index">
              <span v-text="item"></span>
              <svg class="icon" aria-hidden="true" style="font-size: 34px;">
                <use xlink:href="#icon-ugrave"></use>
              </svg>
              <span>多云</span>
              <span>13℃</span>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="agriculture_week">
          <div class="agriculture_hour_title">
            <svg class="icon" aria-hidden="true" style="font-size: 20px">
              <use xlink:href="#icon-zhou"></use>
            </svg>
            <span>一周预报</span>
          </div>
          <van-row type="flex" justify="space-between" class="agriculture_week_row" v-for="(item,index) in week" :key="index">
            <van-col span="6" v-text="item"></van-col>
            <van-col span="6">
              <svg class="icon" aria-hidden="true" style="font-size: 24px">
                <use xlink:href="#icon-zhou"></use>
              </svg>
            </van-col>
            <van-col span="3">11&emsp;8</van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="农业科技">

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Agriculture',
  data () {
    return {
      weather: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
      week: ['星期五', '星期六', '星期日', '星期一', '星期二', '星期三', '星期四'],
      isShow: true
    }
  },
  mounted () {
    /* this.$nextTick(() => {
      let c = document.getElementById('myCanvas')
      this.$commonTools.drawLine(c)
    }) */
  },
  methods: {
    getActiveTab (index) {
      if (index === 0) {
        this.isShow = true
      } else if (index === 1) {
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped>
.agriculture_bg{
  background: url("../../static/images/weather_bg.png") no-repeat ;
  background-size: 100% 100%;
  min-height: 100vh;
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
}

.agriculture_top{
  margin: 3vh 0 3vh 2vh;
}

  .agriculture_top_tag{
    background-color: transparent;
    border: 1px solid #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 2px 0;
    display: flex;
    justify-content: center;
  }

  .agriculture_middle_left{
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    justify-content: flex-end;
  }

  .agriculture_middle_center{
    font-size: 70px;
    font-weight: 600;
    position: relative;
    text-align: center;
  }

  .agriculture_middle_center::after{
    content: '。';
    font-size: 45px;
    position: absolute;
    top:-35px;
  }

  .agriculture_middle_right{
    display: flex;
    align-items: flex-end;
    margin:0 0 2vh 4vw;
  }

  .agriculture_hour{
    margin: 2vh;
  }
  .agriculture_hour_title{
    display: flex;
  }
  .agriculture_hour_con{
    margin: 1vh 2vw;
  }
  .weather_item{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .agriculture_week{
    margin: 2vh;
  }
  .agriculture_week_row{
    height: 5vh;
    display: flex;
    align-items: center;
    padding: 0 5vw;
  }
</style>
