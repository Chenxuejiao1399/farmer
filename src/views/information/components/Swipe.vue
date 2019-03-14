<template>
  <div>
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index" class="live_swipe">
        <img v-lazy="image"/>
        <div>葛庄村新型农业技术培训的要点有这些术培训的要点有这些术培训的要点有这些术培训的要点有这些</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  data () {
    return {
      images: [
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg',
        'http://localhost:8080/static/img/3.887c0ff1.jpg',
        'http://localhost:8080/static/img/2.28c5e1a8.jpg'
      ]
    }
  }
}
</script>

<style scoped>
  .live_swipe img{
    width: 100%;
    height: 150px;
  }

  .live_swipe div{
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
</style>
