<template>
    <div>
      <vue-headful title="社员作品"></vue-headful>
      <div class="works_card">
        <div class="works_card_item">
          <van-row>
            <van-col span="9">
              <img src="../../../static/2.jpg" class="works_card_img">
            </van-col>
            <van-col span="14" offset="1">
              <div class="works_card_item_R">
                <span class="works_card_item_title">赵转在播种技术上有创新行为行为行为行为</span>
                <span class="works_card_item_time">2018-02-12</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style scoped>
  .works_card{
    margin: 2vh 4vw;
  }

  .works_card_item{
    padding-right: 2vw;
    height: 94px;
    margin-bottom: 1vh;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(200,200,200,0.5);
  }

  .works_card_img{
    width: 100%;
    height: 94px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .works_card_item_R{
    height: 78px;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .works_card_item_title{
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

  .works_card_item_time{
    font-size: 12px;
    color: #999999;
  }
</style>
