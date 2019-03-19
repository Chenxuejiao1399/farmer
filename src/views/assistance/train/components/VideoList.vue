<template>
    <div class="video_list_bg">
      <div class="video_icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shipin2"></use>
        </svg>
        &nbsp;
        学习视频
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shipin3"></use>
        </svg>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="video_card" v-for="(item,index) in listData" :key="index">
          <video src="" controls="controls"></video>
          <div class="video_card_texts">
            <span class="video_tag" v-text="item"></span>
            <div class="video_number">
              <van-icon name="eye-o" size="16px"/><span>223</span>
              &emsp;
              <van-icon name="chat-o" size="16px"/><span>98</span>
            </div>
          </div>
        </div>
      </van-list>
    </div>
</template>

<script>
export default {
  name: 'VideoList',
  props: ['isPage'], // isPage是否分页
  data () {
    return {
      listData: [],
      loading: false,
      finished: false,
      curPage: 1,
      newToken: ''
    }
  },
  mounted () {
    this.newToken = this.$commonTools.getCookie('user_token').replace('"', '').replace('"', '')
  },
  methods: {
    onLoad () {
      let vm = this
      // 异步更新数据
      setTimeout(() => {
        this.$http({
          method: 'get',
          url: vm.$commonTools.g_restUrl + '/auth/videos',
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
  .video_list_bg{
    background-color: #fff;
  }

  .video_icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video_icon svg{
    font-size: 30px;
  }

  .video_card{
    font-size: 12px;
    color: #999999;
    margin: 1vh 2vh 2vh;
    box-shadow:4px 4px 15px #eef0ec;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .video_card video{
    width: 100%;
  }

  .video_card .video_card_texts{
    display: flex;
    justify-content: space-between;
    height: 5vh;
    align-items: center;
    padding: 2px 3vw;
  }

  .video_card .video_card_texts .video_tag{
    background-color: #f0f0f0;
    padding: .5vh 2vw;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 16px;
  }

  .video_card .video_card_texts .video_number{
    display: flex;
    align-items: center;
  }
</style>
