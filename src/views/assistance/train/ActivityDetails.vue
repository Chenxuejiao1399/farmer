<template>
  <div class="activity_bg">
    <vue-headful title="活动详情"></vue-headful>
    <img class="activity_img" :src="listData.image">
    <div class="activity_main">
      <div class="activity_card">
        <div class="activity_title padding_bottom" v-text="listData.title"></div>
        <div class="activity_sub padding_bottom">{{listData.duration}}&emsp;{{listData.group}}举办</div>
        <div class="activity_address padding_bottom">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-didian"></use>
          </svg>
          <span v-text="listData.location"></span>
        </div>
        <div class="activity_time padding_bottom">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijian"></use>
          </svg>
          <span v-text="listData.create_at"></span>至 <span v-text="listData.end_at"></span>
        </div>
        <div class="activity_organizer padding_bottom">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dangetubiaoshangchuanmoban_fuzhi2"></use>
          </svg>
          组织人张三
        </div>
        <div class="activity_phone">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cell-phone"></use>
          </svg>
          18399813321
        </div>
      </div>
      <div class="activity_middle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangqing"></use>
        </svg>
        活动详情
        <div class="activity_middle_content" v-text="listData.body"></div>
      </div>

      <div class="activity_bottom">
        <van-row type="flex" justify="space-between">
          <van-col span="10">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-baoming1"></use>
            </svg>
            已报名(<span v-text="listData.volunteers_count"></span>/<span v-text="listData.limit"></span>)
          </van-col>
          <van-col span="6" class="read_more"><span @click="readMore">查看更多>></span></van-col>
        </van-row>
        <van-row class="activity_bottom_content">
          <van-col span="4" v-for="(item,index) in listData.volunteers" :key="index">
            <van-row>
              <van-col span="24">
                <img src="../../../static/3.jpg" class="avatar">
              </van-col>
            </van-row>
            <van-row>
              <van-col span="24">{{item}}</van-col>
            </van-row>
          </van-col>
        </van-row>

      </div>
    </div>
    <div class="activity_button" @click="enroll">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-baoming"></use>
      </svg>
        立即报名
    </div>

    <div class="activity_circle" @click="launch">
      <div class="activity_circle_texts">
        <span>发起</span>
        <span>活动</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ActivityDetails',
  data () {
    return {
      listData: []
    }
  },
  /* computed: {
    sortListData: function () {
      let lists = []
      for (let i = 0; i < 6; i++) {
        lists.push(this.listData[i])
      }
      return lists
    }
  }, */
  mounted () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/trainnings/' + vm.$route.params.id,
            headers: { 'Authorization': 'Bearer' + newToken }
          })
            .then(function (response) {
              vm.listData = response.data
              let remainTime = Date.parse(new Date(vm.listData.create_at)) - Date.parse(new Date())
              vm.listData.duration = vm.$commonTools.getDuration(remainTime)
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    enroll () {
      let vm = this
      vm.$dialog.confirm({
        message: '你确认报名参加此活动吗？'
      }).then(() => {
        let token = vm.$commonTools.getCookie('user_token')
        let newToken = token.replace('"', '').replace('"', '')
        vm.$http({
          method: 'post',
          url: vm.$commonTools.g_restUrl + '/auth/trainnings/2',
          headers: { 'Authorization': 'Bearer' + newToken }
        })
          .then(function (response) {
            if (response.status === 201) {
              vm.$router.replace({ name: 'OfflineLearning' })
            } else if (response.data.code === 100005) {
              vm.$toast('您已参加该项目')
            }
          })
          .catch(function (error) {
            console.info(error)
          })
      }).catch(() => {
        // on cancel
      })
    },
    launch () {
      this.$router.push({ name: 'LaunchAcitivity' })
    },
    readMore () {
      this.$router.push({ name: 'RegisteredList' })
    }
  }
}
</script>

<style scoped>
  .activity_bg{
    background-color: #f3f5f1;
    height: 100vh;
  }

  .activity_img{
    width: 100vw;
    height: 24vh;
  }

  .activity_main{
    position: absolute;
    top: 20vh;
    width: 100vw;
  }

  .activity_card{
    background-color: #fff;
    margin: 0 4vw;
    border-radius: 5px;
    padding: 2vh 4vw;
    font-size: 12px;
  }

  .activity_card .activity_title{
    font-size: 14px;
  }

  .activity_card svg,.activity_card .activity_sub{
    color: #b3b3b3;
  }

  .padding_bottom{
    padding-bottom: 1vh;
  }

  .activity_middle,.activity_bottom{
    background-color: #ffffff;
    margin: 2vh 0;
    padding: 1vh 4vw;
  }

  .activity_middle_content,.activity_bottom_content{
    font-size: 12px;
    padding:1vh 0;
  }

  .activity_button{
    position: absolute;
    bottom: 0;
    background-color: #6bb44e;
    color:#ffffff;
    width: 100vw;
    text-align: center;
    height: 34px;
    line-height: 34px;
    box-shadow:3px 3px 15px #000;
  }

  .activity_bottom .read_more{
    color: #b3b3b3;
    font-size: 12px;
  }

  .activity_circle{
    background: #f29530;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 10vh;
    right: 4vw;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
  }

  .activity_circle_texts{
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
