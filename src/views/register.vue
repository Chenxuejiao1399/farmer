<template>
  <div class="register_bg">
    <vue-headful title="登录"></vue-headful>
    <div class="register_title">用户登录</div>
    <van-cell-group>
      <van-field v-model="name" left-icon="contact" clearable label="姓名" placeholder="请输入姓名"/>
      <van-field v-model="idNum" left-icon="other-pay" clearable label="身份证" placeholder="请输入身份证"/>
    </van-cell-group>
    <div class="register_btn" @click="login">
      <van-button size="normal">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      name: '', //用户的姓名
      idNum: ''  //用户身份证号
    }
  },
  methods: {
    login() {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          console.log(token)
          let newToken = token.replace('"', '').replace('"', '')
          //将用户的姓名，身份证号加入到请求接口的数据中
          let postData = {}
          postData.username = vm.name
          postData.credential_id = vm.idNum
          vm.$http({
            method: 'post',
            url: vm.$commonTools.g_restUrl + '/users',  //请求用户绑定信息接口
            headers: { 'Authorization': 'Bearer' + newToken },
            data: vm.$qs.stringify(postData)
          })
            .then(function (response) {
              if (response.status === 201) { // 对比成功
                vm.$router.replace({ name: 'MyInfo' })
              } else if (response.data.code === 100001) { // 已绑定
                vm.$router.replace({ name: 'MyInfo' })
              }
            })
            .catch(function (error) {
              if (error.toString().substring(39) === '401') {
                vm.$toast.fail('用户未加入注册列表')
              }
            })
          // vm.$http({
          //   method: 'get',
          //   url: vm.$commonTools.g_restUrl + '/auth/role',  //请求用户绑定信息接口
          //   headers: { 'Authorization': 'Bearer' + newToken }
          // })
          //   .then(function (response) {
          //     if (response.status === 200) { // 对比成功
          //       let roleId = response.data.role_id
          //       vm.$store.dispatch('setUserRole', roleId)
          //     }
          //   })
          //   .catch(function (error) {
          //     if (error.toString().substring(39) === '401') {
          //       vm.$toast.fail('用户未加入注册列表')
          //     }
          //   })

        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.register_bg {
  background-image: url("../static/images/register_bg.png");
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
}

.register_title {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 20vh;
  text-align: center;
}

.register_btn {
  text-align: center;
}

.van-cell-group {
  margin: 6vh 11vw;
  background-color: transparent;
}

.van-cell {
  background-color: transparent;
  border: 1px solid #ccc;
  margin: 3vh 0;
  padding: 8px 10px;
  border-radius: 4px;
}

.van-field .van-cell__title {
  max-width: 60px;
}

.van-button--normal {
  padding: 0 45px;
  font-size: 14px;
  color: #fff;
  background-color: #6bb44e;
  border-radius: 4px;
}
</style>
