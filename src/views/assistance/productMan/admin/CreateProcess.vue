<template>
  <div>
    <vue-headful title="流程创建"></vue-headful>
    <div class="process_top">
      请指定该项目流程，一经确定无法更改。如需更改请联系管理员。
    </div>
    <div class="process_middle">
      <div class="process_middle_row">
        <span class="process_number">1</span>
        <div class="process_content_div">
          <span class="process_content">除草</span>
          <van-icon name="arrow-down" color="#A2A2A2"/>
        </div>
        <van-icon name="add-o" color="#999"/><span class="process_add">添加相关资料</span>
      </div>

      <div class="process_middle_row">
        <span class="process_number">2</span>
        <div class="process_content_div">
          <span class="process_content">施肥</span>
          <van-icon name="arrow-down" color="#A2A2A2"/>
        </div>
      </div>
    </div>
    <div class="button_100_green">提交</div>
  </div>
</template>

<script>
export default {
  name: 'CreateProcess'
}
</script>

<style scoped>
  .process_top{
    background-color: #f5f5f5;
    color: #999999;
    padding: 1vh 4vw;
    margin-bottom: 4vh;
  }

  .process_middle_row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2vh;
  }

  .process_number{
    background-color: #F29530;
    display: inline-block;
    height: 14px;
    line-height: 14px;
    width: 14px;
    border-radius: 50%;
    color: #ffffff;
    text-align: center;
    font-size: 11px;
  }

  .process_content_div{
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .process_content{
    background-color: #E9E9E9;
    display: inline-block;
    width: 40vw;
    height: 5vh;
    line-height: 5vh;
    border-radius: 4px;
    text-align: center;
    margin: 0 4vw;
  }

  .process_add{
    font-size: 12px;
    color: #999;
  }
</style>
