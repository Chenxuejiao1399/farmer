<template>
  <div class="myinfo">
    <vue-headful title="个人中心"></vue-headful>
    <div class="top-part">
      <div class="header">
        <div class="header-logo">
          <img :src="myInfoData.avatar">
        </div>
        <div class="sign-wrapper">
          <div class="sign">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qiandao"></use>
              </svg>
            </span>
            <span>签到</span>
          </div>
        </div>
      </div>
      <div class="info-list">
        <div class="van-cell">
          <div class="info-title">姓名</div>
          <div class="info-text" v-text="userInfo.nickname"></div>
        </div>
        <div class="van-cell">
          <div class="info-title">手机</div>
          <div class="info-text" v-text="userInfo.bound_phone"></div>
        </div>
        <div class="van-cell">
          <div class="info-title">性别</div>
          <div class="info-text" v-text="myInfoData.sex"></div>
        </div>
        <div class="van-cell">
          <div class="info-title">现居城市</div>
          <div class="info-text" v-text="userInfo.village"></div>
        </div>
        <div class="van-cell">
          <div class="info-title">详细地址</div>
          <div class="info-text" v-text="userInfo.street"></div>
        </div>
      </div>
    </div>
    <div class="bottom-part">
      <div class="founction-list" @click="goCop">
        <div class="van-cell list-items">
          <div class="info-title">
            <span class="info-icon" style="color:#56b5f0">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hezuoshe"></use>
              </svg>
            </span>
            <span class="label">我的合作社</span>
          </div>
          <div class="info-text">
            <span v-text="myInfoData.coop_name"></span>
            <span class="icon-wrapper">
              <van-icon name="arrow"/>
            </span>
          </div>
        </div>
      </div>
      <div class="founction-list" @click="goScore">
        <div class="van-cell list-items">
          <div class="info-title">
            <span class="info-icon" style="color:#f3a271">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jifen"></use>
              </svg>
            </span>
            <span class="label">我的积分</span>
          </div>
          <div class="info-text">
            <span v-text="myInfoData.point"></span>
            <span class="icon-wrapper">
              <van-icon name="arrow"/>
            </span>
          </div>
        </div>
      </div>
      <div class="founction-list" @click="goLog">
        <div class="van-cell list-items">
          <div class="info-title">
            <span class="info-icon" style="color:#45decb">
              <svg class="icon" aria-hidden="true">
                <use xlink:href=" #icon-shijian"></use>
              </svg>
            </span>
            <span class="label">浏览日志</span>
          </div>
          <div class="info-text">
            <span class="icon-wrapper">
              <van-icon name="arrow"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      userInfo: '',
      myInfoData: '',
      coopData: ''
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      let vm = this
      //调用token刷新方法
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/userInfo',
            headers: { 'Authorization': 'Bearer' + newToken },
            params: { include: 'user,coop' }
          })
            .then(function (response) {
              if (response.status === 200) {
                console.log(response.data)
                vm.myInfoData = response.data   //返回的全部数据
                vm.userInfo = response.data.user  //返回的数据中的user
                vm.coopData = response.data.coop  //返回的数据中的coop
              }
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    //跳转到我的合作社
    goCop() {
      this.$router.push({ name: 'MyCoop' })
    },
    //跳转到我的积分
    goScore() {
      this.$router.push({ name: 'points' })
    },
    //跳转到浏览日志
    goLog() {
      this.$router.push({ name: 'Log' })
    }
  }
}
</script>

<style scoped>
.myinfo {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f2f4f0;
}
.top-part {
  background-color: #ffffff;
}
.header {
  position: relative;
  height: 15vh;
  width: 100%;
  background-image: url("../../static/images/user_center_bg.png");
  background-size: 100% 100%;
}
.header-logo img {
  border-radius: 50%;
  border: 2px solid #ffffff;
  width: 19vw;
  height: 19vw;
  position: absolute;
  top: 50%;
  margin-top: -6.5vw;
  left: 50%;
  margin-left: -12.5vw;
}
.sign-wrapper {
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
  position: absolute;
  top: 3vh;
  right: 0;
}
.sign {
  width: 60px;
  height: 20px;
  border: 1px solid;
  border-color: white;
  border-right: none;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.info-list {
  margin-top: 1vh;
}
.info-list .van-cell {
  padding: 7px 15px;
}
.info-list .van-cell:not(:last-child)::after {
  left: 0px;
}
.info-title {
  min-width: 22vw;
  display: flex;
  align-items: center;
}
.info-title .info-icon {
  font-size: 1.1rem;
}
.founction-list {
  background-color: white;
}
.list-items {
  margin: 1.5vh 0;
  display: flex;
  justify-content: space-between;
}
.label {
  margin-left: 1vw;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  color: #999999;
}
.info-text {
  display: flex;
}
</style>
