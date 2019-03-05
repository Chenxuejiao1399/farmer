<template>
  <div class="list_bg">
    <vue-headful description="项目列表"></vue-headful>
    <div class="list_card" v-for="(item,index) in listData" :key="index" @click="goDetail">
      <van-row type="flex" align="center">
        <van-col span="4">
          <img src="../../../../static/3.jpg" class="avatar_lager_no">
        </van-col>
        <van-col span="20" :class="[index !== (listData.length-1)?'bottom_line':'']">
          <div class="title" v-text="item.name"></div>
          <div class="texts">项目启动于2019年3月20日，为实现球盖菇的种植丰收而设立，距今1年有余。</div>
          <div class="time">2019-04-05 <van-tag plain round color="#4e77b4">已参加</van-tag></div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      listData: [{ name: '球盖菇项目' }, { name: '球盖菇项目' }, { name: '球盖菇项目' }, { name: '球盖菇项目' }, { name: '球盖菇项目' }, { name: '球盖菇项目' }]
    }
  },
  methods: {
    goDetail () {
      this.$router.push({ name: 'ProjectDetail' })
    }
  }
}
</script>

<style scoped>
  .list_bg{
    background-color: #f2f4f0;
    padding-top: 1vh;
  }

  .list_card{
    padding: 1vh 4vw;
    background-color: #ffffff;
  }

  .list_card .title{
    font-size: 16px;
    font-weight: bold;
    padding: 6px 0;
  }

  .list_card .texts{
    color: #666666;
  }

  .list_card .time{
    color:#999999;
    font-size: 12px;
    padding: 6px 0 10px 0;
  }
</style>
