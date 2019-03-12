<template>
  <div class="project_bg">
    <vue-headful title="项目详情"></vue-headful>
    <div class="project_top">
      <img src="../../../../static/2.jpg">
      <div class="project_top_title">大型球盖菇种植项目</div>
    </div>
    <div class="project_middle">
      <van-row type="flex">
        <van-col span="21">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-renyuan"></use>
          </svg>项目人员
        </van-col>
        <van-col span="3"><span class="project_middle_num">12人</span></van-col>
      </van-row>
      <div class="project_middle_member">
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝刘贝刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
        <div class="member_item">
          <img src="../../../../static/3.jpg" class="avatar">
          <span>刘贝</span>
        </div>
      </div>
    </div>
    <div class="project_bottom">
      <div class="project_bottom_left" @click="addMember">
        <svg class="icon" aria-hidden="true" style="font-size: 34px">
          <use xlink:href="#icon-xinzengrenyuan"></use>
        </svg>新增人员
      </div>
      <div class="project_bottom_right" @click="addLabour">
        <svg class="icon" aria-hidden="true" style="font-size: 34px">
          <use xlink:href="#icon-laogongzhaomu"></use>
        </svg>劳工招募
      </div>
    </div>

    <van-dialog title="竹林村农业生产合作社" v-model="isShow" show-cancel-button @confirm="confirmMember">
      <van-checkbox-group v-model="result" @change="getResult">
        <van-cell-group>
          <van-cell title="李明美">
            <van-checkbox name="1" ref="checkboxes" />
          </van-cell>
          <van-cell title="张传">
            <van-checkbox name="2" ref="checkboxes" />
          </van-cell>
          <van-cell title="宋包方">
            <van-checkbox name="3" ref="checkboxes" />
          </van-cell>
          <van-cell title="赵香">
            <van-checkbox name="4" ref="checkboxes" />
          </van-cell>
          <van-cell title="钱中">
            <van-checkbox name="5" ref="checkboxes" />
          </van-cell>
          <van-cell title="钱中">
            <van-checkbox name="6" ref="checkboxes" />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail2',
  data () {
    return {
      isShow: false,
      result: []
    }
  },
  methods: {
    addMember () {
      this.isShow = true
    },
    addLabour () {
      this.$router.push({ name: 'Labour' })
    },
    getResult () {
      console.info(this.result)
    },
    confirmMember () {
      console.info(this.result)
    }
  }
}
</script>

<style scoped>
  .project_bg{
    background-color: #f7faf5;
    height: 100vh;
  }
  .project_top{
    margin-bottom: 2vh;
    position: relative;
  }
  .project_top img{
    width: 100vw;
    height: 20vh;
  }
  .project_top .project_top_title{
    background-color: #ffffff;
    width: 100vw;
    height: 6vh;
    line-height: 6vh;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  .project_middle{
    background-color: #ffffff;
    margin-bottom: 2vh;
    padding: 1.5vh 3vw;
    box-shadow: 0 2px 4px rgba(200,200,200,0.5);
  }

  .project_middle_num{
    color: #999;
    font-size: 12px;
  }

  .project_middle svg{
    font-size: 17px;
  }

  .project_middle .project_middle_member{
    display: flex;
    flex-wrap:wrap;
  }

  .project_middle .member_item{
    width: 15.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2vh;
  }

  .member_item span{
    display: inline-block;
    width: inherit;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    text-align: center;
  }

  .project_bottom{
    margin: 0 1vw;
    display: flex;
    justify-content: center;
  }
  .project_bottom_left,.project_bottom_right{
    background-color: #ffffff;
    margin: 0 2vw;
    width: 47vw;
    height: 13vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(200,200,200,0.5);
  }
</style>

<style>
.van-dialog__content{
  max-height: 36vh;
  overflow-y: auto;
}
</style>
