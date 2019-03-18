<template>
  <div>
    <vue-headful title="日志详情"></vue-headful>
    <div class="points-body">
      <div class="list-table van-cell">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangqing"></use>
          </svg>
        </span>
        <span>日志详情</span>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ul class="cell-wrapper">
          <li class="van-cell flex-cell" v-for="item in list" :key="item">
            <div>日志详情日志详情日志详情日志详情日志详情日志详情日志详情日志详情日志详情日志详情。</div>
            <div class="time-stamps">2018-11-30 09:21</div>
          </li>
        </ul>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Log',
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style scoped>
  .points-body {
    margin-top: 1.5vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .cell-wrapper {
    height: 100vh;
    overflow-y: auto;
  }
  .flex-cell {
    display: flex;
    flex-direction: column;
  }
  .time-stamps {
    font-size: 12px;
    color: #808080;
  }
</style>
