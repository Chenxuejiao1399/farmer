<template>
  <div>
    <vue-headful title="流程创建"></vue-headful>
    <div class="process_top">
      请指定该项目流程，一经确定无法更改。如需更改请联系管理员。
    </div>
    <div class="process_middle">
      <div class="process_middle_row">
        <span class="process_number">1</span>
        <div class="process_content_M">
          <label>
            <input class="process_content" value="除草"/>
          </label>
        </div>
        <div class="process_content_R">
          <van-icon name="add-o" color="#999"/><span class="process_add">添加相关资料</span>
        </div>
      </div>
      <div class="process_icon"><van-icon name="arrow-down" color="#A2A2A2"/></div>

      <div class="process_middle_row">
        <span class="process_number">2</span>
        <div class="process_content_M">
          <label>
            <input class="process_content" value="施肥"/>
          </label>
        </div>
        <div class="process_content_R2">
          <div>茶叶施肥的技巧</div>
          <div>茶叶施肥的技巧茶叶施肥的技巧茶叶施肥的技巧肥的技巧肥的技巧</div>
        </div>
      </div>
      <div class="process_icon"><van-icon name="arrow-down" color="#A2A2A2"/></div>

      <div class="process_middle_row">
        <span class="process_number">3</span>
        <div class="process_content_M">
          <label>
            <input class="process_content" value="给土地浇水这个工作给谁呢"/>
          </label>
        </div>
        <div class="process_content_R">
          <van-icon name="add-o" color="#999"/><span class="process_add">添加相关资料</span>
        </div>
      </div>
      <div class="process_icon"><van-icon name="arrow-down" color="#A2A2A2"/></div>

      <div class="process_middle_row">
        <span class="process_number_gray">4</span>
        <div class="process_content_M">
          <label>
            <input class="process_content" placeholder="请输入流程步骤名称" value=""/>
          </label>
        </div>
        <div class="process_content_R">
          <van-icon name="add-o" color="#999"/><span class="process_add">添加相关资料</span>
        </div>
      </div>

      <div class="add_btn" @click="addFlow">
        <van-button plain type="danger" size="small">新增流程</van-button>
      </div>
    </div>
    <div class="button_100_green">提交</div>

    <van-dialog v-model="isShow" title="新增流程" show-cancel-button>
      <van-field v-model="proName" label="流程名称" placeholder="请输入流程名称"/>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'CreateProcess',
  data () {
    return {
      isShow: false,
      proName: ''
    }
  },
  methods: {
    addFlow () {
      this.isShow = true
    }
  }
}
</script>

<style scoped>
  .process_top{
    background-color: #f5f5f5;
    color: #999999;
    padding: 1vh 4vw;
    margin-bottom: 4vh;
  }

  .process_middle{
    margin: 0 8vw;
    position: relative;
  }

  .process_middle_row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .6vh;
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

  .process_number_gray{
    background-color: #C8C8C8;
    display: inline-block;
    height: 14px;
    line-height: 14px;
    width: 14px;
    border-radius: 50%;
    color: #ffffff;
    text-align: center;
    font-size: 11px;
  }

  .process_content_M{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .process_content{
    background-color: #E9E9E9;
    width: 40vw;
    height: 5vh;
    line-height: 5vh;
    border-radius: 4px;
    border: none;
    text-align: center;
    margin: 0 2vw;
    padding: 0 2vw;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

  .process_add{
    font-size: 12px;
    color: #999;
  }

  .process_content_R{
    width: 32vw;
    display: flex;
    align-items: center;
  }

  .process_content_R2{
    width: 32vw;
    font-size: 12px;
    color: #666;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }

  .process_icon{
    width: 30vw;
    text-align: right;
  }

  .add_btn{
    text-align: center;
    margin-top: 4vh;
  }
</style>
