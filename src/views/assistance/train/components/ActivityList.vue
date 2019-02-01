<template>
  <div>
    <vue-headful description="活动列表"></vue-headful>
    <div  :class="[index !== (lists.length-1)?'bottom_line':'','activity_card']" v-for="(item,index) in lists" :key="index">
      <van-row>
        <van-col span="9">
          <div class="activity_card_img">
            <img src="../../../../static/2.jpg">
            <div>仅剩1天3小时</div>
          </div>
        </van-col>
        <van-col span="15" class="activity_card_right">
          <div class="activity_title activity_card_padding" v-text="item"></div>
          <div class="activity_card_padding"><span>时间：</span><span>2019-02-12</span></div>
          <div class="activity_card_padding"><span>地点：</span><span>百花湖村的栗子树旁</span></div>
          <div class="activity_card_padding"><span>发起：</span><span>百花湖村农业合作社</span></div>
          <div class="activity_card_padding">
            <span>已报：</span><span>12/30</span>&nbsp;
            <van-tag round plain color="#f5b064">已满</van-tag>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityList',
  data () {
    return {
      lists: ['来百花湖学习拖拉机的操作名额有限，速来报名来百花湖学习拖拉机的操作名额有限，速来报名来百花湖学习拖拉机的操作名额有限，速来报名', '来百花湖学习拖拉机的操作名额有限，速来报名', '来百花湖学习拖拉机的操作名额有限，速来报名', '来百花湖学习拖拉机的操作名额有限，速来报名',
        '来百花湖学习拖拉机的操作名额有限，速来报名', '来百花湖学习拖拉机的操作名额有限，速来报名', '来百花湖学习拖拉机的操作名额有限，速来报名', '来百花湖学习拖拉机的操作名额有限，速来报名']
    }
  }
}
</script>

<style scoped>
  .activity_card{
    margin: 1vh 4vw;
    padding-bottom:1vh;
  }

  .bottom_line{
    border-bottom : 1px solid #d9d9d9;
  }

  .activity_card .activity_card_img{
    position: relative;
  }

  .activity_card .activity_card_img div{
    position: absolute;
    bottom: 4px;
    right: 0;
    background-color: #7f7f7f;
    color: #fff;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 12px;
    padding: 2px;
  }

  .activity_card .activity_card_img img{
    width: 100%;
    border-radius: 8px;
  }

  .activity_card_right span{
    font-size: 12px;
    color: #666666;
  }

  span:first-child{
    font-weight: bold;
  }
  .activity_card_padding{
    padding: .3vh 2vw;
  }

  .activity_title{
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
  }
</style>
