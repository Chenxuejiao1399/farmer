<template>
  <div class="plan_bg">
    <vue-headful title="生产计划"></vue-headful>
    <div class="plan_card" @click="createProcess">
      <div class="plan_title">水稻丰收种植的大型扶持多产丰收项目</div>
      <div class="plan_content">大球盖菇又名皱环球盖菇、皱球盖菇、酒红球盖菇， 属于担子菌门，层菌纲，伞菌目，球盖菇科，球盖菇属 。 </div>
      <div class="plan_bottom">
        <van-row>
          <van-col span="20">2019-01-02 至 2019-01-02</van-col>
          <van-col span="4">
            <div class="tag">
              <van-icon name="friends-o" size="14px"/><span>5人</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="plan_card" @click="goDetail">
      <div class="plan_title">水稻丰收种植的大型扶持多产丰收项目</div>
      <div class="plan_content">大球盖菇又名皱环球盖菇、皱球盖菇、酒红球盖菇， 属于担子菌门，层菌纲，伞菌目，球盖菇科，球盖菇属 。 </div>
      <div class="plan_bottom">
        <van-row>
          <van-col span="20">2019-01-02 至 2019-01-02</van-col>
          <van-col span="4">
            <div class="tag">
              <van-icon name="friends-o" size="14px"/><span>5人</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPlan',
  methods: {
    createProcess () {
      this.$router.push({ name: 'CreateProcess' })
    },
    goDetail () {
      this.$router.push({ name: 'ProcessDetail' })
    }
  }
}
</script>

<style scoped>
  .plan_bg{
    background-color: #f2f4f0;
    min-height: 96vh;
    padding: 2vh 0;
  }
  .plan_card{
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(200,200,200,0.5);
    margin: 0 4vw 2vh;
  }

  .plan_title{
    padding: 2vh 4vw 0;
    font-weight: bold;
  }

  .plan_content{
    padding: 1vh 4vw;
  }

  .plan_bottom{
    font-size: 12px;
    padding: 0 4vw 2vh;
    color: #b3b3b3;
  }

  .tag{
    background-color: #53bd2a;
    color: #fff;
    border-radius: 20px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
