<template>
  <div class="online-discuss">
    <div class="head-swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="swiper-img" src="@/static/images/onlineDiscuss_bg.jpg">
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="content-box">
      <div class="content-header">
        <div v-text="coopData.name"></div>
      </div>
      <div class="content-text">
        <p v-text="coopData.body"></p>
      </div>
    </div>
    <div class="bottom-card">
      <div class="icon-wrapper" @click="goCoopM">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sheyuan"></use>
          </svg>
        </div>
        <div>合作社成员</div>
      </div>
      <div class="icon-wrapper" @click="goMemberW">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sheyuantiandi"></use>
          </svg>
        </div>
        <div>社员天地</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyCoop',
  data () {
    return {
      coopData: ''
    }
  },
  mounted () {
    this.getCoopData()
  },
  methods: {
    getCoopData () {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/coop',
            headers: { 'Authorization': 'Bearer' + newToken },
            params: { include: 'user,coop' }
          })
            .then(function (response) {
              vm.coopData = response.data
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    goCoopM () {
      this.$router.push({ name: 'MemberList' })
    },
    goMemberW () {
      this.$router.push({ name: 'MemberWorld' })
    }
  }
}
</script>
<style scoped>
.online-discuss {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f6f9f4;
}
.head-swiper {
  height: 25vh;
}
.van-swipe {
  height: inherit;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
.content-box {
  height: 40vh;
  width: 95%;
  margin: -5vh 2vw 0 2vw;
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  border-radius: 5px;
}
.content-header {
  padding: 3vw;
}

.content-header > div {
  padding: 1vh;
  border-bottom: 1px solid #e3e3e3;
  font-size: 1.2rem;
}
.content-text {
  padding: 0 5vw 5vw 5vw;
  color: #666666;
}
.content-text > p {
  text-indent: 26px;
}
.bottom-card {
  width: 95%;
  height: 20vh;
  margin: 0 2vw 0 2vw;
  position: absolute;
  top: 63vh;
  display: flex;
  justify-content: space-between;
}
.bottom-card > div {
  width: 48%;
  height: 15vh;
}
.icon-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 8px;
  background-color: #ffffff;
  background-image: -moz-linear-gradient(
    39deg,
    rgb(233, 79, 54) 0%,
    rgb(235, 132, 70) 100%
  );
  background-image: -webkit-linear-gradient(
    39deg,
    rgb(233, 79, 54) 0%,
    rgb(235, 132, 70) 100%
  );
  background-image: -ms-linear-gradient(
    39deg,
    rgb(233, 79, 54) 0%,
    rgb(235, 132, 70) 100%
  );
  box-shadow: 0 2px 4px rgba(200,200,200,0.5);
}
.icon-wrapper .icon {
  font-size: 2rem;
}
</style>
