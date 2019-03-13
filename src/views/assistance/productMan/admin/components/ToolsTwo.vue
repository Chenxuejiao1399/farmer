<template>
  <div>
    <div class="tools_card bottom_line">
      <van-row>
        <van-col span="8">
          <img src="../../../../../static/2.jpg" class="tools_img">
        </van-col>
        <van-col span="15" offset="1">
          <div class="tools_card_R">
            <span class="name">化肥</span>
            <div class="row">
              使用方：<span>白花湖农业生产合作社</span>
            </div>
            <div class="row">
              使用周期：
              <span>2018.05.18-2018.07.12</span>
            </div>
            <div class="tools_card_R_bottom">
              <van-row type="flex" justify="space-between" align="center">
                <van-col span="9">
                  <svg class="icon" aria-hidden="true" style="font-size: 16px;">
                    <use xlink:href="#icon-jiaoyi-lvjiantou"></use>
                  </svg>新增<span class="add_num">15</span>包
                </van-col>
                <van-col span="6">
                  <van-progress pivot-text="" color="#999999" :percentage="25"/>
                </van-col>
                <van-col span="8">剩余<span class="leave_num">250</span>包</van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="tools_card bottom_line">
      <van-row>
        <van-col span="8">
          <img src="../../../../../static/2.jpg" class="tools_img">
        </van-col>
        <van-col span="15" offset="1">
          <div class="tools_card_R">
            <span class="name">化肥</span>
            <div class="row">
              使用方：<span>白花湖农业生产合作社</span>
            </div>
            <div class="row">
              使用周期：
              <span>2018.05.18-2018.07.12</span>
            </div>
            <div class="tools_card_R_bottom">
              <van-row type="flex" justify="space-between" align="center">
                <van-col span="9">
                  <svg class="icon" aria-hidden="true" style="font-size: 16px;">
                    <use xlink:href="#icon-jiaoyi-hongjiantou"></use>
                  </svg>减少<span class="reduce_num">30</span>包
                </van-col>
                <van-col span="6">
                  <van-progress pivot-text="" color="#999999" :percentage="25"/>
                </van-col>
                <van-col span="8">剩余<span class="leave_num">250</span>包</van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsTwo'
}
</script>

<style scoped>
 .tools_card{
   padding: 2vh 0;
   margin:0 4vw;
   position: relative;
 }

  .tools_img{
    width: 100%;
    height: 12vh;
    border-radius: 4px;
  }

  .tools_card_R{
    height: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .tools_card_R .name{
    font-weight: bold;
  }

  .tools_card_R .row{
    color: #666;
    font-size: 12px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

 .tools_card_R .row span{
   color:#2A2A2A;
 }

  .tools_card_R_bottom{
    font-size: 12px;
    color: #666;
  }

  .add_num{
    color:#6BB44E;
  }

  .reduce_num{
    color: #E95C44;
  }

  .leave_num{
    color: #2A2A2A;
  }
</style>
