<template>
  <div>
    <vue-headful description="活动列表"></vue-headful>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        :class="[index !== (listData.length-1)?'bottom_line':'','activity_card']"
        v-for="(item,index) in listData"
        :key="item.id"
        @click="goDetail(item.id)"
      >
        <van-row>
          <van-col span="9">
            <div class="activity_card_img">
              <img :src="item.image">
              <div v-text="item.duration"></div>
            </div>
          </van-col>
          <van-col
            span="15"
            class="activity_card_right"
          >
            <div
              class="activity_title activity_card_padding"
              v-text="item.title"
            ></div>
            <div class="activity_card_padding"><span>时间：</span><span v-text="$commonTools.subStr(item.create_at,16)"></span></div>
            <div class="activity_card_padding"><span>地点：</span><span v-text="item.location"></span></div>
            <div class="activity_card_padding"><span>发起：</span><span v-text="item.group"></span></div>
            <div class="activity_card_padding">
              <span>已报：</span><span>{{item.volunteers_count}}/{{item.limit}}</span>&nbsp;
              <van-tag
                round
                plain
                color="#f5b064"
                v-if="item.volunteers_count === item.limit"
              >已满</van-tag>
            </div>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'ActivityList',
  props: ['type'],
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
        vm.$commonTools.checkToken()
          .then(function (res) {
            let URL = ''
            if (vm.type === 'all') {
              URL = '/auth/trainnings'
            } else if (vm.type === 'my') {
              URL = '/auth/user/trainnings'
            }
            let token = vm.$commonTools.getCookie('user_token')
            let newToken = token.replace('"', '').replace('"', '')
            vm.$http({
              method: 'get',
              url: vm.$commonTools.g_restUrl + URL,
              headers: { 'Authorization': 'Bearer' + newToken },
              params: {
                page: vm.curPage
              }
            })
              .then(function (response) {
                vm.listData = vm.listData.concat(response.data.data)
                vm.listData.forEach(function (ele) {
                  let remainTime = Date.parse(new Date(ele.create_at)) - Date.parse(new Date())
                  ele.duration = vm.$commonTools.getDuration(remainTime)
                })
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
          })
          .catch(function (error) {
            console.info(error)
          })
      }, 500)
    },
    goDetail(id) {
      // console.log(id)
      this.$router.push({ name: 'ActivityDetails', params: { id: id } })
    }
  }
}
</script>

<style scoped>
.activity_card {
  margin: 1vh 4vw;
  padding-bottom: 1vh;
}

.activity_card .activity_card_img {
  position: relative;
}

.activity_card .activity_card_img div {
  position: absolute;
  bottom: 4px;
  right: 0;
  background-color: #7f7f7f;
  color: #fff;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 12px;
  padding: 2px;
}

.activity_card .activity_card_img img {
  width: 100%;
  border-radius: 8px;
}

.activity_card_right span {
  font-size: 12px;
  color: #666666;
}

span:first-child {
  font-weight: bold;
}
.activity_card_padding {
  padding: 0.3vh 2vw;
}

.activity_title {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
