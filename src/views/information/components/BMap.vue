<template>
  <ve-bmap height="35vh"
           :settings="chartSettings"
           :series="chartSeries"
           :tooltip="chartTooltip">
  </ve-bmap>
</template>

<script>
export default {
  name: 'BMap',
  data () {
    this.chartSettings = {
      key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
      bmap: {
        center: [106.53, 26.68],
        zoom: 14,
        roam: true,
        mapStyle: {}
      }
    }
    this.chartTooltip = { show: true }
    return {
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [106.53, 26.68],
            [106.54, 26.68]// 经度，维度，value，...
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
