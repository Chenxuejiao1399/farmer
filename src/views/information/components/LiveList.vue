<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="live_card"
        v-for="(item,index) in listData"
        :key="index"
        @click="getArticleDetails(item.id)"
      >
        <van-row :class="[index !== (listData.length-1)?'bottom_line':'','live_item']">
          <van-col span="9">
            <img
              :src="item.image"
              class="live_img"
            >
          </van-col>
          <van-col
            span="15"
            class="live_right"
          >
            <div
              class="live_title"
              v-text="item.title"
            ></div>
            <div
              class="live_content"
              v-text="item.body"
            ></div>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'LiveList',
  props: ['type'], // type是文章类型
  data() {
    return {
      listData: [],
      loading: false,
      finished: false,
      curPage: 1
    }
  },
  methods: {
    onLoad() {
      let vm = this
      // 异步更新数据
      setTimeout(() => {
        this.$http({
          method: 'get',
          url: vm.$commonTools.g_restUrl + '/categories/' + vm.type + '/articles',
          params: {
            page: vm.curPage
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
          })
          .catch(function (error) {
            console.info(error)
          })
      }, 500)
    },
    //点击文章列表时携带参数跳转到文章内容页
    getArticleDetails(id) {
      //直接调用$router.push 实现携带参数的跳转
      this.$router.push({
        path: `/articledetails/${id}`,
      })
    }
  }
}
</script>

<style scoped>
.live_item {
  margin: 0 4vw;
  padding: 1vh 0;
}

.live_img {
  width: 100%;
  border-radius: 8px;
  height: 94px;
}

.live_right {
  padding: 0.3vh 0 0.6vh 2vw;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.live_title {
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}

.live_content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #999999;
  font-size: 12px;
}
</style>
