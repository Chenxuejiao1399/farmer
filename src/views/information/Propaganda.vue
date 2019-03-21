<template>
  <div class="propaganda_bg">
    <vue-headful title="宣传天地" description="宣传天地主页"/>
    <van-tabs color="#6fb553" sticky @click="getActiveTab">
      <van-tab title="最新政策">
        <policy-list :type="1"></policy-list>
      </van-tab>
      <van-tab title="共建乡村">
        <div v-if="isShow">
          <div class="propaganda_top">
            <div class="propaganda_top_title">
              <span v-text="targetTitle"></span>
              <span v-text="targetCon"></span>
            </div>
            <div class="propaganda_top_icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiangzhang"></use>
              </svg>
              扶贫模范
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiangzhang1"></use>
              </svg>
            </div>
            <swipe-card :listType="type"></swipe-card>
          </div>
          <div class="propaganda_middle">
            <van-tabs type="card" color="#6fb553" class="cardTab">
              <van-tab title="帮扶人员分布">
                <div class="map_bg">
                  <img src="http://farmerapi.companycheck.cn/api/amap/poor?zoom=15">
                </div>
                <div class="map-label">
                  <div>
                <span class="icon-wrapper">
                  <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                </span>
                    <span>牦牛村</span>
                  </div>
                  <div>
                <span class="icon-wrapper">
                  <svg class="icon"
                       aria-hidden="true"
                  >
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                </span>
                    <span>牦牛村</span>
                  </div>
                  <div>
                <span class="icon-wrapper">
                  <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                </span>
                    <span>牦牛村</span>
                  </div>
                  <div>
                <span class="icon-wrapper">
                  <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                </span>
                    <span>牦牛村</span>
                  </div>
                  <div>
                <span class="icon-wrapper">
                  <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-icon-test"></use>
                  </svg>
                </span>
                    <span>牦牛村</span>
                  </div>
                </div>
              </van-tab>
              <van-tab title="帮扶信息统计">
                <div class="chart_bg">
                  <ve-histogram
                    :data="chartData"
                    :extend="extend"
                    :tooltip-visible="false"
                    :legend-visible="false"
                    height="35vh"
                  ></ve-histogram>
                </div>
              </van-tab>
            </van-tabs>
          </div>
          <div class="propaganda_bottom">
            <village-list :type="2" :isPage = "0"></village-list>
            <div
              class="read_more"
              @click="getMore"
            >查看更多>></div>
          </div>
        </div>
        <village-list :type="2" v-if="!isShow" :isPage = "1"></village-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PolicyList from './components/PolicyList'
import VillageList from './components/VillageList'
import SwipeCard from './components/SwipeCard'
export default {
  name: 'Propaganda',
  components: {
    'policy-list': PolicyList,
    'village-list': VillageList,
    'swipe-card': SwipeCard
  },
  data () {
    this.extend = {
      series: {
        label: { show: true, position: 'top', color: '#000' },
        barWidth: 20
      },
      color: ['#f29530'],
      grid: [{ top: 20, left: 20, bottom: 10, right: 20, show: true }],
      xAxis: {
        axisLabel: {
          interval: 0 // 横轴信息全部显示
        }
      }
    }
    return {
      chartData: {
        columns: ['name', 'count'],
        rows: []
      },
      isShow: true, // 默认显示列表上面的内容
      type: 'noTag',
      targetTitle: '',
      targetCon: ''
    }
  },
  mounted () {
    this.getTarget()
    this.getChartData()
  },
  methods: {
    getTarget () {
      let vm = this
      this.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/plans',
        params: {}
      })
        .then(function (response) {
          if (response.status === 200) {
            vm.targetTitle = response.data.data[0].name
            vm.targetCon = response.data.data[0].description
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    getChartData () {
      let vm = this
      this.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/poor/info',
        params: {}
      })
        .then(function (response) {
          if (response.status === 200) {
            vm.chartData.rows = response.data.data
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    getMore () {
      this.isShow = false// 当点击更多时，不显示列表上面的内容
    },
    getActiveTab (index) {
      if (index === 1) {
        this.isShow = true
      }
    }
  }
}
</script>

<style scoped>
.propaganda_bg {
  background-color: #ebede9;
  min-height: 100vh;
}

.propaganda_top {
  margin: 1vh 0;
  background-color: #fff !important;
  background: url("../../static/images/village_bg.png") no-repeat;
  background-size: 100% 12vh;
}

.propaganda_top .propaganda_top_title {
  display: flex;
  height: 12vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.propaganda_top_title span {
  width: 54vw;
  text-align: center;
  color: #fff;
  overflow: hidden;/*超出部分隐藏*/
  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;/*超出部分文字以...显示*/
}

.propaganda_top_icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.propaganda_top_icon svg {
  font-size: 30px;
  color: #6bb44e;
}

.propaganda_middle {
  background-color: #fff;
  margin-bottom: 2vh;
  padding-top: 2vh;
  padding-bottom: 1vh;
  display: flex;
  flex-direction: column;
}
.map-label {
  display: flex;
  justify-content: space-evenly;
  padding: 4px;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin: auto;
  width: 91vw;
}

.map-label > div {
  display: flex;
}
.icon-wrapper {
  display: flex;
  align-items: center;
}
.chart_bg {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1vh;
}

.map_bg {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 2vh 2vh 1vh 2vh;
  height: 35vh;
}

.map_bg img{
  width: 92vw;
  height: 35vh;
  border-radius: 5px;
}

.propaganda_bottom {
  background-color: #fff;
  min-height: 25vh;
  margin-bottom: 2vh;
}
</style>

<style>
.van-tabs__nav--card {
  margin: 0 100px;
}

.anchorBL {
  display: none;
}
</style>
