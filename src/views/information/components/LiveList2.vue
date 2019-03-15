<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div :class="[index !== (listData.length-1)?'bottom_line':'','live_card']" v-for="(item,index) in listData" :key="index">
        <div class="live_title" v-text="item.title"></div>
        <div class="live_content" v-text="item.body"></div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'LiveList2',
  props: ['type'], // type是文章类型
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
            if (vm.curPage > response.data.meta.pagination.total_pages) {
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
  .live_card{
    margin: 0 4vw;
    padding: 2vh 0 1vh;
  }

  .live_title{
    font-size: 15px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    padding-bottom: 2vh;
  }

  .live_content{
    font-size: 12px;
    color: #999999;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
</style>
