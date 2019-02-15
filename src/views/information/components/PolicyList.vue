<template>
    <div class="list_bg">
      <vue-headful title="宣传天地" description="最新政策列表"></vue-headful>
      <div class="list_card" v-for="(item,index) in listData" :key="index">
        <van-row type="flex" :class="[index !== (listData.length-1)?'bottom_line':'','list_item']" >
          <van-col span="14">
            <div class="list_title" v-text="item.title"></div>
            <div class="list_source_time">
              <span v-text="item.source"></span>
              <span>2018-04-05</span>
            </div>
          </van-col>
          <van-col span="9" offset="1">
            <img src="../../../static/2.jpg" class="list_img">
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PolicyList',
  data () {
    return {
      listData: [
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可工信部向三大运营商发放5G系统试验频率使用许可工信部向三大运营商发放5G系统试验频率使用许可工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' },
        { title: '工信部向三大运营商发放5G系统试验频率使用许可', source: '工信部网站' }
      ]
    }
  }
}
</script>

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
