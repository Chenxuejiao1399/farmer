<template>
  <div class="train_bg">
    <vue-headful
      title="培训天地"
      description="培训天地主页"
    ></vue-headful>
    <!-- 轮播开始 -->
    <van-swipe>
      <van-swipe-item
        v-for="item in swipeData"
        :key="item.id"
        class="train_swipe"
      >
        <img v-lazy="item.image" />
        <div v-text="item.title"></div>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->
    <van-notice-bar
      text="最新培训视频“球盖菇的种植技巧”。"
      left-icon="volume-o"
    ></van-notice-bar>
    <div class="train_tab">
      <van-tabs>~
        <van-tab title="优秀学员">
          <good-models :listType=" 'models' "></good-models>
        </van-tab>
        <van-tab title="优秀专家">
          <good-models :listType=" 'pros' "></good-models>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 视频播放开始 -->
    <div class="train_bottom">
      <video-list :isPage="0"></video-list>
      <div
        class="read_more"
        @click="getMore"
      >查看更多>></div>
    </div>
    <!-- 视频播放结束 -->
  </div>
</template>

<script>
import GoodModels from './GoodModels'
import VideoList from './VideoList'
export default {
  name: 'Training',
  components: {
    'good-models': GoodModels,
    'video-list': VideoList
  },
  data() {
    return {
      swipeData: [],
      type: 'tag',
      listtype: ''  //优秀学员与专家之间的不同类型
    }
  },
  mounted() {
    this.getSwipeData()
  },
  methods: {
    getMore() {
      this.$router.push({ name: 'StudyVideo' })
    },
    getSwipeData() {
      let vm = this
      vm.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/categories/8/articleLoop',
        params: {
          include: 'user, category',
          paginate: 6,
          page: 1
        }
      })
        .then(function (response) {
          if (response.status === 200) {
            vm.swipeData = response.data.data
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    }

  }
}
</script>

<style scoped>
.train_bg {
  background-color: #ebede9;
}

.train_swipe img {
  width: 100%;
  height: 150px;
}

.train_swipe div {
  position: absolute;
  top: 116px;
  color: #fff;
  background-color: rgba(56, 48, 35, 0.2);
  width: 100%;
  padding: 0.5vh 2vw;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}

.train_tab {
  background-color: #ffffff;
}

.train_bottom {
  margin: 1vh 0 2vh;
  padding-top: 1vh;
  background-color: #fff;
}
</style>
