<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="list_card" v-for="(item,index) in listData" :key="index">
        <van-row type="flex" :class="[index !== (listData.length-1)?'bottom_line':'','list_item']">
          <van-col span="9">
            <img :src="item.image" class="list_img">
          </van-col>
          <van-col span="15" class="list_right">
            <div class="list_title" v-text="item.title"></div>
            <van-row class="list_time_tag">
              <van-col span="15"><span class="list_tag" v-text="item.tag"></span></van-col>
              <van-col span="9"><span class="list_time" v-text="$commonTools.subStr(item.updated_at,10)"></span></van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'VillageList',
  props: ['type', 'isPage'], // type是文章类型，isPage是否分页
  data () {
    return {
      listData: [],
      loading: false,
      finished: false,
      curPage: 1
    }
  },
  methods: {
    onLoad () {
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
            if (vm.curPage > response.data.meta.pagination.total_pages || vm.isPage === 0) {
              vm.finished = true
            }
          })
          .catch(function (error) {
            console.info(error)
          })
      }, 500)
    }
  }
}
</script>

<style scoped>
.list_card{
  background-color: #fff;
}

.list_item{
  margin: 0 4vw;
  padding: 1vh 0;
}

.list_img{
  width: 100%;
  border-radius: 8px;
  height: 94px;
}

.list_right{
  padding-left: 2vw;
}

.list_title{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}

.list_time_tag{
  font-size: 12px;
  color: #999999;
  display: flex;
  justify-content: space-between;
  height: 72px;
  align-items: flex-end;
}

.list_tag{
  background-color: #f0f0f0;
  padding: .5vh 2vw;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 16px;
}
</style>
