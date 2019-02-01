<template>
  <div class="train_bg">
    <vue-headful title="培训天地" description="培训天地主页"></vue-headful>
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index" class="train_swipe">
        <img v-lazy="image"/>
        <div>葛庄村新型农业技术培训的要点有这些术培训的要点有这些术培训的要点有这些术培训的要点有这些</div>
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
      text="最新培训视频“球盖菇的种植技巧”。"
      left-icon="volume-o"></van-notice-bar>
    <div class="train_tab">
      <van-tabs>
        <van-tab title="优秀学员">
          <swipe-card :listType="type"></swipe-card>
        </van-tab>
        <van-tab title="优秀专家">内容 2</van-tab>
      </van-tabs>
    </div>
    <div class="train_bottom">
      <video-list></video-list>
      <div class="read_more" @click="getMore">查看更多>></div>
    </div>
  </div>
</template>

<script>
import SwipeCard from '../../../information/components/SwipeCard'
import VideoList from './VideoList'
export default {
  name: 'Training',
  components: {
    'swipe-card': SwipeCard,
    'video-list': VideoList
  },
  data () {
    return {
      images: [
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg'
      ],
      type: 'tag'
    }
  },
  methods: {
    getMore () {
      this.$router.push({ name: 'StudyVideo' })
    }
  }
}
</script>

<style scoped>
  .train_bg{
    background-color: #ebede9;
  }

  .train_swipe img{
    width: 100%;
    height: 150px;
  }

  .train_swipe div{
    position: absolute;
    top:116px;
    color: #fff;
    background-color: rgba(56,48,35,0.2);
    width: 100%;
    padding:.5vh 2vw;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

  .train_tab{
    background-color: #ffffff;
  }

  .train_bottom{
    margin: 1vh 0 2vh;
    padding-top: 1vh;
    background-color: #fff;
  }
</style>
