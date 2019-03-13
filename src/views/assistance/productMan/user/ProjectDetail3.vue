<template>
  <div class="project_bg">
    <div class="project_top">
      <img src="../../../../static/images/rectangle.png">
      <div class="project_top_wrap">
        <div class="row1">球盖菇种植项目</div>
        <div class="row2">— <span>松土</span> —</div>
      </div>
    </div>
      <div class="project_middle">
        <div class="project_middle_title">
          <svg class="icon" aria-hidden="true" style="font-size: 17px">
            <use xlink:href="#icon-renyuan"></use>
          </svg>
          参与人员(<span>12</span>)
        </div>
        <div class="project_middle_con">
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可</span>
          </div>
          <div class="project_middle_item">
            <img src="../../../../static/3.jpg" class="avatar">
            <span>张可可可可</span>
          </div>
        </div>
      </div>
    <div class="project_div"></div>
      <div class="project_bottom">
        <div class="project_bottom_title">
          <svg class="icon" aria-hidden="true" style="font-size: 17px">
            <use xlink:href="#icon-xiangxiziliao"></use>
          </svg>
          相关资料
        </div>
        <div class="project_bottom_con">
          <div>茶叶施肥的技巧</div>
          <div>球盖菇种植与施肥探索的真谛细细浏览</div>
          <div>林下经济是近几年国家大力倡导的一种新型增收模式的非常好的一种方法</div>
          <div>球盖菇种植与施肥探索的真谛细细浏览</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail3'
}
</script>

<style scoped>
  .project_top{
    position: relative;
  }

  .project_top img{
    width: 100vw;
    height: 12vh;
  }

  .project_top_wrap{
    position: absolute;
    top: 50%;
    margin-top: -21px;
    width: 100vw;
    text-align: center;
  }

  .project_top_wrap .row1{
    color: #ffffff;
    font-size: 12px;
    padding-bottom: 5px;
  }

  .project_top_wrap .row2{
    color: #ffffff;
    font-size: 16px;
  }

  .project_top_wrap span{
    color: #F29530;
  }

  .project_middle{
    background-color: #ffffff;
    padding: 1.5vh 3vw;
  }

  .project_middle_title{
    display: flex;
    align-items: center;
  }

  .project_middle_con{
    display: flex;
    flex-wrap: wrap;
  }

  .project_middle_item{
    width: 15.5vw;
    padding-top: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project_middle_item span{
    font-size: 11px;
    display: inline-block;
    width: inherit;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    text-align: center;
  }

  .project_bottom{
    background-color: #ffffff;
    padding: 1.5vh 3vw;
  }

  .project_bottom_title{
    display: flex;
    align-items: center;
    padding-bottom: 1vh;
  }

  .project_bottom_con{
    font-size: 12px;
    padding-left: 4vw;
  }

  .project_bottom_con div{
    padding-bottom: 1vh;
    width: 90vw;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

  .project_div{
    height: 2vh;
    background-color:#f7faf5;
  }
</style>
