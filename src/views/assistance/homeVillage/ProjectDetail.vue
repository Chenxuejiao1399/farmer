<template>
  <div class="project_bg">
    <vue-headful title="项目详情"></vue-headful>
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index" class="project_swipe">
        <img v-lazy="image"/>
        <div>葛庄村新型农业技术培训的要点有这些术培训的要点有这些术培训的要点有这些术培训的要点有这些</div>
      </van-swipe-item>
    </van-swipe>
    <div class="project_weather">
      <img src="../../../static/images/weather.png">
      <span>今天全区晴到多云 16℃-8℃</span>
    </div>
    <div class="project_member">
      <van-row>
        <van-col span="20">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jinjie"></use>
          </svg>
          成员进阶
        </van-col>
        <van-col span="4">更多>></van-col>
      </van-row>
      <div class="project_member_content">
        <div v-for="(item,index) in listData" :key="index" v-if="index<4">
          <div class="project_member_item">{{item}}</div>
        </div>
      </div>
      <div class="project_detail">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangqing"></use>
        </svg>
        项目详情
        <div class="project_name">球盖菇项目</div>
        <div class="project_content">处于球盖菇膨大、饱满时期。大球盖菇又名皱环球盖菇、 皱球盖菇、酒红球盖菇， 属于担子菌门，层菌纲，伞菌 球盖菇项目。</div>
        <div class="project_time">2018-02-01&nbsp;至&nbsp;2018-03-24</div>
        <img src="../../../static/images/project_logo.png">
        <div class="project_bottom_title">详细说明：</div>
        <div class="project_bottom_content">
          这个时期属于灌浆期，是很关键的一个时期的情况就是这。
          一定要多浇水、少日照，勤施肥。几年来的引种推广情况
          表明，大球盖菇具有非常广阔的发展前景。首先，栽培技
          术简便粗放，可直接采用生料栽培，具有很强的抗杂能力，
          容易获得成功。
        </div>
        <div class="project_bottom_title2">负责人：<span>张珊</span></div>
        <div class="project_bottom_title2">联系方式：<span>18977632215</span></div>
        <div class="circle_div1">
          <div class="circle_content1" @click="goFeedBack">
            <svg class="icon" aria-hidden="true" style="color: #6bb44e;font-size: 18px">
              <use xlink:href="#icon-bianji"></use>
            </svg>
            <span>工作反馈</span>
          </div>
        </div>
        <div class="circle_div2">
          <div class="circle_content2" @click="goPlantWarn">
            <svg class="icon" aria-hidden="true" style="color: #6bb44e;font-size: 18px">
              <use xlink:href="#icon-yujing"></use>
            </svg>
            <span>种植预警</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  data () {
    return {
      images: [
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg'
      ],
      listData: ['球盖菇对生长的环境有什么要求?', '栽培原料来源丰富，它可生长在各种秸秆培养料上的栽培原料来源丰富，它可生长在各种秸秆培养料上的',
        '大球盖菇在自然界中分布于欧洲、北美洲，亚洲', '水分是大球盖菇菌丝？', '水分是大球盖菇菌丝？']
    }
  },
  methods: {
    goFeedBack () {
      this.$router.push({ name: 'FeedBack' })
    },
    goPlantWarn () {
      this.$router.push({ name: 'PlantWarning' })
    }
  }
}
</script>

<style scoped>
  .project_bg{
    background-color: #f2f4f0;
    min-height: 100vh;
  }

  .project_swipe img{
    width: 100%;
    height: 150px;
  }

  .project_swipe div{
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

  .project_weather{
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 1vh 4vw;
  }

  .project_weather img{
    width: 30px;
    padding-right: 5px;
  }

  .project_member{
    padding: 1vh 4vw;
  }

  .project_member_content{
    background-color: #ffffff;
    border-radius: 5px;
    padding: 2vh 4vw 1vh 4vw;
    margin: 2vh 0;
    box-shadow:3px 3px 15px #c9c9c9;
  }

  .project_member_content .project_member_item{
    padding-bottom: 1vh;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

  .project_detail{
    background-color: #ffffff;
    padding: 1vh 4vw;
    position: relative;
  }

  .project_name{
    text-align: center;
    padding: 1vh;
    font-size: 16px;
    font-weight: bold;
  }

  .project_time{
    font-size: 12px;
    color: #999999;
    text-align: right;
    padding: 1vh;
  }

  .project_detail img{
    background-size: 100% 100%;
    width: 84vw;
  }

  .project_bottom_title{
    font-weight: bold;
    font-size: 15px;
    padding: 1vh 0;
  }

  .project_bottom_title2{
    font-size: 15px;
    font-weight: bold;
    margin: 1vh 0;
  }

  .project_bottom_title2 span{
    font-weight: normal;
    font-size: 14px;
  }

  .circle_div1{
    position: absolute;
    top: 23vh;
    left: 10vw;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow:2px 1px 15px #ccc;
    font-size: 13px;
  }

  .circle_div1 .circle_content1{
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .circle_div2{
    position: absolute;
    top: 23vh;
    right: 10vw;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow:2px 1px 15px #ccc;
    font-size: 13px;
  }

  .circle_div2 .circle_content2{
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
