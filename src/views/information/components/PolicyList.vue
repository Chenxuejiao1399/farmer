<template>
  <div class="hello">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="list_card" v-for="(item,index) in listData" :key="index">
        <van-row type="flex" :class="[index !== (listData.length-1)?'bottom_line':'','list_item']" >
          <van-col span="14">
            <div class="list_title" v-text="item.title"></div>
            <div class="list_source_time">
              <span v-text="item.source_from"></span>
              <span v-text="$commonTools.subStr(item.updated_at,10)"></span>
            </div>
          </van-col>
          <van-col span="9" offset="1">
            <img :src="item.image" class="list_img">
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      listData: [],
      loading: false,
      finished: false,
      curPage: 1
    }
  },
  props: ['type'],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list_bg{
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 1vh;
  }

  .list_card{
    background-color: #fff;
    position: relative;
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

  .list_title{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
  }

  .list_source_time{
    font-size: 12px;
    padding-top: 3vh;
    color: #999999;
    position: absolute;
    bottom: 2vh;
  }

  .list_source_time>span{
    padding-right: 2vw;
  }
</style>
