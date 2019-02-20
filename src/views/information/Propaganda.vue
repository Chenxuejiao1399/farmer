<template>
  <div class="propaganda_bg">
    <vue-headful
      title="宣传天地"
      description="宣传天地主页"
    />
    <van-tabs
      color="#6fb553"
      sticky
      @click="getActiveTab"
    >
      <van-tab title="最新政策">
        <policy-list></policy-list>
      </van-tab>
      <van-tab title="共建乡村">
        <div v-if="isShow">
          <div class="propaganda_top">
            <div class="propaganda_top_title">
              <span>刘能镇共建目标</span>
              <span>308座厂房</span>
            </div>
            <div class="propaganda_top_icon">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-jiangzhang"></use>
              </svg>
              扶贫模范
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-jiangzhang1"></use>
              </svg>
            </div>
            <swipe-card :listType="type"></swipe-card>
          </div>
          <div class="propaganda_middle">
            <van-tabs
              type="card"
              color="#6fb553"
              class="cardTab"
            >
              <van-tab title="帮扶人员分布">
                <div class="map_bg">
                  <mapDrag
                    @drag="dragMap"
                  ></mapDrag>
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
          </div>
          <div class="propaganda_bottom">
            <village-list></village-list>
            <div
              class="read_more"
              @click="getMore"
            >查看更多>></div>
          </div>
        </div>
        <village-list v-if="!isShow"></village-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import mapDrag from './components/AMap'
import PolicyList from './components/PolicyList'
import VillageList from './components/VillageList'
import SwipeCard from './components/SwipeCard'
export default {
  name: 'Propaganda',
  components: {
    mapDrag,
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
      grid: [{ top: 20, left: 20, bottom: 10, right: 20, show: true }]
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      images: [
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg'
      ],
      isShow: true,
      type: 'noTag',
      dragData: {
        lng: null,
        lat: null,
        address: null,
        nearestJunction: null,
        nearestRoad: null,
        nearestPOI: null
      }
    }
  },
  methods: {
    getMore () {
      this.isShow = false
    },
    getActiveTab (index) {
      if (index === 1) {
        this.isShow = true
      }
    },
    dragMap (data) {
      this.dragData = {
        lng: data.position.lng,
        lat: data.position.lat,
        address: data.address,
        nearestJunction: data.nearestJunction,
        nearestRoad: data.nearestRoad,
        nearestPOI: data.nearestPOI
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
  color: #fff;
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
