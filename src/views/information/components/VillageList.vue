<template>
  <div class="list_bg">
    <div class="list_card" v-for="(item,index) in listData" :key="index">
      <van-row type="flex" :class="[index !== (listData.length-1)?'bottom_line':'','list_item']">
        <van-col span="9">
          <img src="../../../static/3.jpg" class="list_img">
        </van-col>
        <van-col span="15" class="list_right">
          <div class="list_title" v-text="item.title"></div>
          <div class="list_time_tag">
            <span class="list_tag" v-text="item.tag"></span>
            <span class="list_time">2018-04-05</span>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VillageList',
  data () {
    return {
      listData: [
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '脱贫进程' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果百花湖村脱贫工作起到了有目共睹的成果百花湖村脱贫工作起到了有目共睹的成果百花湖村脱贫工作起到了有目共睹的成果百花湖村脱贫工作起到了有目共睹的成果', tag: '工信部网站' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '难点专攻' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '脱贫进程' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '难点专攻' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '脱贫进程' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '难点专攻' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '脱贫进程' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '脱贫进程' },
        { title: '百花湖村脱贫工作起到了有目共睹的成果', tag: '脱贫进程' }
      ]
    }
  }
}
</script>

<style scoped>
.list_bg{
  overflow-x: hidden;
  overflow-y: auto;
}

.list_card{
  background-color: #fff;
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

.list_right{
  padding-left: 2vw;
}

.list_title{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}

.list_time_tag{
  font-size: 12px;
  color: #999999;
  display: flex;
  justify-content: space-between;
  height: 7.2vh;
  align-items: flex-end;
}

.list_tag{
  background-color: #f0f0f0;
  padding: .5vh 2vw;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 16px;
}
</style>
