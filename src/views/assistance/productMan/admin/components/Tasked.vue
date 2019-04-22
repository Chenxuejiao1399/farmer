<template>
  <div>
    <vue-headful title="已派发的任务"></vue-headful>
    <div class="tasked_main">
      <van-row v-show="getFlowList" v-for="(flow,flowIndex) in getFlowList" :key="flowIndex">
        <van-col span="7">
          <div class="tasked_left">
            <img class="avatar" :src="userInfo.avatar">
            <span class="name">{{userInfo.real_name}}</span>
          </div>
        </van-col>
        <van-col span="17">
          <div class="tasked_right bottom_line">
            <van-button
              :class="item.is_finished == false ? 'fail':'success' "
              size="small"
              type="warning"
              v-for="(item,index) in flow.name"
              :key="index"
              @click="addFlow(item.id)"
            >{{item.name}}</van-button>
            <!-- <van-button class="fail" size="small" type="warning">给土地浇水</van-button>success -->
          </div>
        </van-col>
      </van-row>
      <van-dialog v-model="isShow" title="设置任务状态为已完成" show-cancel-button @confirm="confirmSubmit"></van-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasked',
  data() {
    return {
      projectId: this.$route.params.id,
      userInfo: null,
      missionList: null,
      isShow: false,
      taskId: null,
    }
  },
  created() {
    this.getUser()
  },
  computed: {
    getFlowList() {
      return this.$store.state.taskList
    }
  },
  methods: {
    getUser() {
      let vm = this
      vm.$commonTools
        .checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie("user_token")
          let newToken = token.replace('"', "").replace('"', "")
          //获取当前用户信息
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/user',
            headers: { 'Authorization': 'Bearer' + newToken }
          })
            .then(function (response) {
              vm.userInfo = response.data
            })
            .catch(function (error) {
              console.info(error)
            })

          //获取当前用户的任务列表
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/missions',  //获取当前用户所有任务
            headers: { 'Authorization': 'Bearer' + newToken },
            params: {
              page: 1,
              paginate: 50
            }
          })
            .then(function (response) {
              console.log(response.data.data)
              let flowArr = response.data.data
              flowArr = flowArr.map(function (item, index, arr) {
                const i = flowArr.find(_item => item.flow_id === _item.flow_id);
                if (i !== item) {
                  //i.name.push(item.name)
                  i.name.push({ name: item.name, id: item.id, is_finished: item.is_finished, flowId: item.flow_id })
                  return undefined
                } else {
                  i.name = [{ name: i.name, id: i.id, is_finished: item.is_finished, flowId: item.flow_id }]
                  return i
                }
              }).filter(item => item !== undefined)
              vm.$store.commit("getTaskList", flowArr)
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    addFlow(id) {
      this.isShow = true
      this.taskId = id
    },
    confirmSubmit() {
      let vm = this
      let token = vm.$commonTools.getCookie("user_token")
      let newToken = token.replace('"', "").replace('"', "")
      //获取当前用户信息
      vm.$http({
        method: 'patch',
        url: vm.$commonTools.g_restUrl + '/auth/missions/' + vm.taskId,
        headers: { 'Authorization': 'Bearer' + newToken }
      })
        .then(function (response) {
          if (response.data.code == 100016) {
            //vm.$toast.fail('完成任务')
            vm.$toast.success('完成任务！')
            // vm.$dialog.alert({
            //   message: '完成任务'
            // })
            vm.getUser()
          } else if (response.data.code == 100015) {
            vm.$toast.fail('该用户已经完成此任务！')
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    }

  }
}
</script>

<style scoped>
.success {
  background-color: #6bb44e;
  border: 1px solid #6bb44e;
}

.fail {
  background-color: #e95c44;
  border: 1px solid #e95c44;
}

.tasked_main {
  margin: 1vh 4vw 2vh;
  height: 86vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.name {
  padding: 0 8px;
}

.tasked_left {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
}

.tasked_right {
  margin-top: 1vh;
}
</style>
<style>
.van-button--plain {
  border: 1px solid #999;
}
.van-button--small {
  margin: 0 3vw 1vh 0;
}
</style>
