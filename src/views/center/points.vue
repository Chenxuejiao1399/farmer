<template>
  <div class="points">
    <vue-headful title="积分记录"></vue-headful>
    <div class="points-header">
      <span class="points_sum">{{myInfoData.points}}</span>
      <span class="points_texts">积分记录</span>
    </div>
    <div class="points-body">
      <div class="list-table van-cell">
        <span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xiangqing"></use>
          </svg>
        </span>
        <span>记录详情</span>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ul class="cell-wrapper">
          <li
            class="van-cell flex-cell"
            v-for="item in list"
            :key="item"
          >
            <div>参加“我为社区献爱心”活动新增10积分。</div>
            <div class="time-stamps">2018-11-30 09:21</div>
          </li>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'point',
  data() {
    return {
      myInfoData: '',
      list: [],
      loading: false,
      finished: false
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/userInfo',
            headers: { 'Authorization': 'Bearer' + newToken },
            params: { include: 'user,coop' }
          })
            .then(function (response) {
              if (response.status === 200) {
                vm.myInfoData = response.data
                vm.list = response.data.views
              }
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    onLoad() {
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
.points {
  width: 100vw;
  height: 100vh;
  background-color: #f2f4f0;
  overflow-x: hidden;
  overflow-y: hidden;
}
.points-header {
  width: 100%;
  height: 15vh;
  background-image: url("../../static/images/points_header.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.points-header .points_sum {
  font-size: 26px;
  font-weight: bold;
}

.points-header .points_texts {
  font-size: 12px;
  color: #808080;
}

.points-body {
  margin-top: 1.5vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.cell-wrapper {
  height: 70vh;
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
