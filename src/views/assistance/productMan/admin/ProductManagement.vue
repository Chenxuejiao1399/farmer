<template>
  <div>
    <vue-headful title="生产管理"></vue-headful>
    <div class="product_top">
      <img src="../../../../static/images/product_bg.png">
      <div class="product_top_div">
        <div class="product_top_texts">
          <div class="product_top_name">毛栗村</div>
          <div>毛栗村生产合作社</div>
        </div>
        <van-row class="product_top_menu" type="flex" justify="center">
          <van-col span="6" v-show="userRoleId == 4 || userRoleId == 5">
            <div @click="creatProject">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chuangjianyingyong_fu1"></use>
              </svg>
              <div>创建新项目</div>
            </div>
          </van-col>
          <van-col span="6">
            <div @click="plan">
              <svg class="icon" aria-hidden="true" style="color:#ea71a7">
                <use xlink:href="#icon-jihuasvg1"></use>
              </svg>
              <div>生产计划</div>
            </div>
          </van-col>
          <van-col span="6">
            <div @click="goMember">
              <svg class="icon" aria-hidden="true" style="color:#eb8344;">
                <use xlink:href="#icon-renyuanguanli"></use>
              </svg>
              <div>人员管理</div>
            </div>
          </van-col>
          <van-col span="6">
            <div @click="goTools">
              <svg class="icon" aria-hidden="true" style="color:#90d94c">
                <use xlink:href="#icon-nongye"></use>
              </svg>
              <div>农资管理</div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="product_middle">
      <div class="product_middle_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhongzhi"></use>
        </svg>
        种植土地分布
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tudi"></use>
        </svg>
      </div>
      <div class="product_middle_map">地图</div>
    </div>
    <div class="product_bottom">
      <div>
        <svg class="icon" aria-hidden="true" style="color: #e0796a">
          <use xlink:href="#icon-didian"></use>
        </svg>竹林村
      </div>
      <div>
        <svg class="icon" aria-hidden="true" style="color: #4e9c2c">
          <use xlink:href="#icon-didian"></use>
        </svg>竹林村
      </div>
      <div>
        <svg class="icon" aria-hidden="true" style="color: #dbbe15">
          <use xlink:href="#icon-didian"></use>
        </svg>竹林村
      </div>
      <div>
        <svg class="icon" aria-hidden="true" style="color: #e7851c">
          <use xlink:href="#icon-didian"></use>
        </svg>竹林村
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductManagement',
  data() {
    return {
      userRoleId: this.$store.state.userRole,
    }
  },
  methods: {
    //跳转创建项目
    creatProject() {
      this.$router.push({ name: 'NewProject' })
    },
    //生产计划
    plan() {
      this.$router.push({ name: 'ProductPlan' })
    },
    //人员管理
    goMember() {
      this.$router.push({ name: 'MemberMan' })
    },
    //农资管理
    goTools() {
      this.$router.push({ name: 'Tools' })
    }
  }
}
</script>

<style scoped>
.product_top {
  background-size: 100% 100%;
}

.product_top img {
  height: 16vh;
  width: 100vw;
}

.product_top_div {
  position: absolute;
  top: 2vh;
  width: 100vw;
}

.product_top_texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.product_top_texts .product_top_name {
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 2px;
}

.product_top_menu {
  background-color: #ffffff;
  width: 93vw;
  box-shadow: 3px 3px 15px #c9c9c9;
  border-radius: 5px;
  margin: 2vh auto 0;
  text-align: center;
  font-size: 12px;
  padding: 2vh 0;
}

.product_top_menu svg {
  font-size: 32px;
  padding-bottom: 6px;
}

.product_middle {
  margin-top: 55px;
}

.product_middle svg {
  color: #6bb44e;
  font-size: 17px;
}

.product_middle_title {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}

.product_middle_map {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 2vh 2vh 1vh 2vh;
  height: 35vh;
}

.product_bottom {
  background-color: #f0f0f0;
  display: flex;
  padding: 1vh 4vw;
  margin: 0 4vw;
  border-radius: 5px;
}

.product_bottom div {
  padding-right: 10px;
}
</style>
