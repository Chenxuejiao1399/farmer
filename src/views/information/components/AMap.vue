
<template>
  <div class="m-map">
    <div
      class="search"
      v-if="placeSearch"
    >
      <input
        type="text"
        placeholder="请输入关键字"
        v-model="searchKey"
      >
      <button
        type="button"
        @click="handleSearch"
      >搜索</button>
      <div
        id="js-result"
        v-show="searchKey"
        class="result"
      ></div>
    </div>
    <div
      id="js-container"
      class="map"
    >正在加载数据 ...</div>
  </div>
</template>

<script>
import { MapKey, MapCityName } from './mapConfig/AmapConfig.js'
import remoteLoad from './mapConfig/remoteLoad.js'
export default {
  name: 'amap',
  props: ['lat', 'lng'],
  data () {
    return {
      searchKey: '',
      placeSearch: null,
      dragStatus: false,
      AMapUI: null,
      AMap: null
    }
  },
  watch: {
    searchKey () {
      if (this.searchKey === '') {
        this.placeSearch.clear()
      }
    }
  },
  methods: {
    // 搜索
    handleSearch () {
      if (this.searchKey) {
        this.placeSearch.search(this.searchKey)
      }
    },
    // 实例化地图
    initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 15,
          cityName: MapCityName
        }

        let map = new AMap.Map('js-container', mapConfig)
        // 启用工具条
        AMap.plugin(['AMap.ToolBar'], function () {
          map.addControl(new AMap.ToolBar({
            position: 'RB'
          }))
        })
        /** 构建地图  使用font-awesome ** */
        AMapUI.loadUI(['overlay/SvgMarker'], function (SvgMarker) {
          if (!SvgMarker.supportSvg) {
            alert('当前环境不支持SVG')
          }

          var lngLats = getGridLngLats(map.getCenter(), 2, 4, 200, 200)

          var marker1 = new SvgMarker(
            new SvgMarker.Shape.IconFont({
              // 参见 symbol引用, http://www.iconfont.cn/plus/help/detail?helptype=code
              symbolJs: null,
              icon: 'icon-icon-test3',
              size: 50,
              offset: [0, -100],
              fillColor: 'green'
            }), {
              map: map,
              position: lngLats[0],
              showPositionPoint: true
            })

          var marker2 = new SvgMarker(
            new SvgMarker.Shape.IconFont({
              // 参见 symbol引用, http://www.iconfont.cn/plus/help/detail?helptype=code
              symbolJs: null,
              icon: 'icon-icon-test',
              size: 50,
              offset: [-50, -78],
              fillColor: 'black'
            }), {
              map: map,
              position: lngLats[1],
              showPositionPoint: {
                color: 'orange'
              }
            })
          var marker3 = new SvgMarker(
            new SvgMarker.Shape.IconFont({
              // 参见 symbol引用, http://www.iconfont.cn/plus/help/detail?helptype=code
              symbolJs: null,
              icon: 'icon-icon-test4',
              size: 50,
              offset: [-50, -78],
              fillColor: 'black'
            }), {
              map: map,
              position: lngLats[2],
              showPositionPoint: {
                color: 'orange'
              }
            })
        })

        /**
             * 返回一批网格排列的经纬度

             * @param  {AMap.LngLat} center 网格中心
             * @param  {number} colNum 列数
             * @param  {number} size  总数
             * @param  {number} cellX  横向间距
             * @param  {number} cellY  竖向间距
             * @return {Array}  返回经纬度数组
             */
        function getGridLngLats (center, colNum, size, cellX, cellY) {
          var pxCenter = map.lnglatToPixel(center)

          var rowNum = Math.ceil(size / colNum)

          var startX = pxCenter.getX()
          var startY = pxCenter.getY()
          cellX = cellX || 70
          cellY = cellY || 70
          var lngLats = []
          for (var r = 0; r < rowNum; r++) {
            for (var c = 0; c < colNum; c++) {
              var x = startX + (c - (colNum - 1) / 2) * (cellX)

              var y = startY + (r - (rowNum - 1) / 2) * (cellY)

              lngLats.push(map.pixelToLngLat(new AMap.Pixel(x, y)))

              if (lngLats.length >= size) {
                break
              }
            }
          }
          return lngLats
        }
      })
    }
  },
  async created () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
      // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
      await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      this.initMap()
    }
  }
}
</script>

<style lang="css">
.m-map {
  width: 100%;
  height: 100%;
  position: relative;
}
.m-map .map {
  width: 100%;
  height: 100%;
}
.m-map .search {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 285px;
  z-index: 1;
}
.m-map .search input {
  width: 180px;
  border: 1px solid #ccc;
  line-height: 20px;
  padding: 5px;
  outline: none;
}
.m-map .search button {
  line-height: 26px;
  background: #fff;
  border: 1px solid #ccc;
  width: 50px;
  text-align: center;
}
.m-map .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
</style>
