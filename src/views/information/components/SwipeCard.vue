<template>
  <van-swipe :width="110" :show-indicators="false">
    <van-swipe-item v-for="(item, index) in images" :key="index">
      <div class="img_card">
        <img :src="item"/>
        <div class="img_texts">
          <span class="name">姓名</span>
          <span class="company">世代创新文化发展有限公司</span>
        </div>
        <div class="img_tag" v-if="listType === 'tag'">竹林村</div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'SwipeCard',
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
  },
  props: {
    listType: String
  }
}
</script>

<style scoped>
   .img_card{
    padding: 1vh 0 2vh 2vw;
  }

  .img_card img{
    width: 100px;
    border-radius: 5px
  }

  .img_card .img_texts{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img_card .img_texts .name{
    font-weight: 600;
  }

  .img_card .img_texts .company{
    text-align: center;
    font-size: 12px;
    color: #666666;
  }

  .img_card .img_tag{
    background-color: #f29530;
    position: absolute;
    top: 88px;
    right: 3px;
    color: #fff;
    font-size: 12px;
    padding: 1px 4px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
