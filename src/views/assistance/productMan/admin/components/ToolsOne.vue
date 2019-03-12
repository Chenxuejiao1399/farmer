<template>
  <div>
    <div class="tools_card bottom_line">
      <van-row>
        <van-col span="8">
          <img src="../../../../../static/2.jpg" class="tools_img">
        </van-col>
        <van-col span="15" offset="1">
            <div class="tools_card_name">拖拉机</div>
            <div class="tools_card_bottom">
              <div>使用方：<span>百花湖农业生产合作社</span></div>
              <div>使用周期：<span>2018.05.18-2018.07.12</span></div>
            </div>
        </van-col>
      </van-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ToolsOne'
}
</script>

<style scoped>
  .tools_card{
    padding: 2vh 0;
    margin:0 4vw;
  }

  .tools_img{
    width: 100%;
    height: 12vh;
    border-radius: 4px;
  }

  .tools_card_name{
    font-weight: bold;
  }

  .tools_card_bottom{
    font-size: 12px;
    color: #2A2A2A;
    position: absolute;
    bottom: 2vh;
  }
  .tools_card_bottom div{
    padding-top: 1vh;
  }

  .tools_card_bottom span{
    color: #666666;
  }
</style>
