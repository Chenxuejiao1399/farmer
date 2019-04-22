<template>
  <div class="list_bg">
    <vue-headful description="项目列表"></vue-headful>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="list_card" v-for="(item,index) in listData" :key="index" @click="goDetail">
        <van-row type="flex" align="center">
          <van-col span="4">
            <img src="../../../../static/3.jpg" class="avatar_lager_no">
          </van-col>
          <van-col span="20" :class="[index !== (listData.length-1)?'bottom_line':'']">
            <div class="title" v-text="item.name"></div>
            <div class="texts">项目启动于2019年3月20日，为实现球盖菇的种植丰收而设立，距今1年有余。</div>
            <div class="time">
              2019-04-05
              <van-tag plain round color="#4e77b4">已参加</van-tag>
            </div>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data() {
    return {
      listData: [],
      loading: false,
      finished: false,
      curPage: 1, //当前页
      paginate: 10, //每页显示条数

    }
  },
  methods: {
    onLoad() {
      let vm = this;
      // 异步更新文章数据
      setTimeout(() => {
        vm.$commonTools
          .checkToken()
          .then(function (res) {
            let token = vm.$commonTools.getCookie("user_token")
            let newToken = token.replace('"', "").replace('"', "")
            vm.$http({
              method: "get",
              url: vm.$commonTools.g_restUrl + "/auth/articles",
              headers: { Authorization: "Bearer" + newToken },
              params: {
                page: vm.curPage,
                paginate: vm.paginate
              }
            })
              .then(function (response) {
                vm.listData = vm.listData.concat(response.data.data)
                vm.loading = false // 本次加载状态结束
                vm.curPage++
                // 数据全部加载完成
                if (vm.curPage > response.data.meta.pagination.total_pages) {
                  vm.finished = true
                }
                console.log(vm.listData)
              })
              .catch(function (error) {
                console.info(error)
              });
          })
          .catch(function (error) {
            console.info(error)
          })
      }, 500)
    },
    goDetail() {
      this.$router.push({ name: 'ProjectDetail' })
    }
  }
}
</script>

<style scoped>
.list_bg {
  background-color: #f2f4f0;
  padding-top: 1vh;
}

.list_card {
  padding: 1vh 4vw;
  background-color: #ffffff;
}

.list_card .title {
  font-size: 16px;
  font-weight: bold;
  padding: 6px 0;
}

.list_card .texts {
  color: #666666;
}

.list_card .time {
  color: #999999;
  font-size: 12px;
  padding: 6px 0 10px 0;
}
</style>
