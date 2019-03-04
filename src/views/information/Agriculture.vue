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
            <span v-text="location"></span>
          </van-col>
          <van-col span="5" class="agriculture_top_tag">
            <span>云量{{weatherTopDataNow.cloud}}%</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="6" offset="2" class="agriculture_middle_left">
            <span>{{weatherTopDataNow.wind_dir}}{{weatherTopDataNow.wind_sc}}</span>
            <span>相对湿度 {{weatherTopDataNow.hum}}%</span>
          </van-col>
          <van-col span="6" class="agriculture_middle_center">
            <span v-text="weatherTopDataNow.tmp"></span></van-col>
          <van-col span="6" class="agriculture_middle_right"><span v-text="weatherTopDataNow.cond_txt"></span></van-col>
        </van-row>
        <div class="agriculture_hour">
          <div class="agriculture_hour_title">
            <svg class="icon" aria-hidden="true" style="font-size: 20px">
              <use xlink:href="#icon-shi"></use>
            </svg>
            <span>逐三小时预报</span>
          </div>
          <van-swipe :width="62" :height="100" :show-indicators="false" :loop="false" class="agriculture_hour_con">
            <van-swipe-item class="weather_item" v-for="(item,index) in weatherHourData" :key="index">
              <span v-text="item.time"></span>
              <svg class="icon" aria-hidden="true" style="font-size: 34px;">
                <use :xlink:href="$commonTools.setIcon(item.cond_code)"></use>
              </svg>
              <span v-text="item.cond_txt"></span>
              <span>{{item.tmp}}℃</span>
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
          <van-row type="flex" justify="center" class="agriculture_week_row" v-for="(item,index) in weatherWeekData" :key="index">
            <van-col span="6" v-text="item.date"></van-col>
            <van-col span="10" offset="4">
              <svg class="icon" aria-hidden="true" style="font-size: 24px">
                <use xlink:href="#icon-zhou"></use>
              </svg>
            </van-col>
            <van-col span="1">{{item.tmp_max}}</van-col>
            <van-col span="1" offset="1">{{item.tmp_min}}</van-col>
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
      isShow: true,
      weatherTopDataNow: '',
      location: '',
      weatherWeekData: [],
      weatherHourData: []
    }
  },
  mounted () {
    this.getWeatherTopData()
    this.getWeatherWeekData()
    this.getWeatherHourData()
  },
  methods: {
    getWeatherTopData () {
      let vm = this
      this.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/singleWeather'
      })
        .then(function (response) {
          vm.weatherTopDataNow = response.data.HeWeather6[0].now
          vm.location = response.data.HeWeather6[0].basic.location
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    getWeatherWeekData () {
      let vm = this
      this.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/weather'
      })
        .then(function (response) {
          vm.weatherWeekData = response.data.HeWeather6[0].daily_forecast
          vm.weatherWeekData.forEach(function (ele) {
             ele.date = vm.$commonTools.getWeek(ele.date)
          })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    getWeatherHourData () {
      let vm = this
      this.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/hours'
      })
        .then(function (response) {
          vm.weatherHourData = response.data.HeWeather6[0].hourly
          vm.weatherHourData.forEach(function (ele) {
            ele.time = ele.time.substr(11, 5)
          })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
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
