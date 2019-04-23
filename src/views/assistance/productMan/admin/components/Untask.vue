<template>
  <div class="untask_bg">
    <vue-headful title="派发任务"></vue-headful>
    <van-row
      type="flex"
      justify="space-between"
      align="center"
      class="untask_row"
      v-for="(item,index) in proMember"
      :key="index"
    >
      <van-col span="6">
        <div class="untask_left">
          <img class="avatar" :src="item.avatar">
          <span class="name">{{item.name}}</span>
        </div>
      </van-col>
      <van-col span="13">
        <select v-model="item.tesk" class="select">
          <option value>请选择</option>
          <option
            v-for="(flowList,index2) in proFlowsList"
            :key="index2"
            :value="flowList.id"
          >{{flowList.name}}</option>
        </select>
      </van-col>
      <van-col span="5">
        <van-button
          type="default"
          size="small"
          class="untask_btn"
          @click="submitTask(item.id,item.tesk)"
        >派发</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Untask',
  data() {
    return {
      projectId: this.$route.params.id, //项目id
      tesk: '',
      proMember: [],
      proFlowsList: []
    }
  },
  mounted() {
    this.getProMember()
  },
  methods: {
    //获得项目参与人员
    getProMember() {
      let vm = this
      vm.$commonTools
        .checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie("user_token")
          let newToken = token.replace('"', "").replace('"', "")
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/projects/' + vm.projectId,
            headers: { 'Authorization': 'Bearer' + newToken },
          })
            .then(function (response) {
              let volunteers = response.data.volunteers
              volunteers.forEach(item => {
                vm.proMember.push({ id: item.id, avatar: item.avatar, name: item.real_name, tesk: '' })
              })
            })
            .catch(function (error) {
              console.info(error)
            })

          //获取单个项目流程任务列表
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/projects/' + vm.projectId + '/flows',  ///auth/projects/6/flows?paginate=10&page=1
            headers: { 'Authorization': 'Bearer' + newToken },
            params: {
              paginate: 20,
              page: 1
            }
          })
            .then(function (response) {
              if (response.status == 200) {
                //遍历每个流程，查询流程下面的任务
                response.data.data.forEach(element => {
                  //console.log(element.id)
                  vm.$http({
                    method: 'get',
                    url: vm.$commonTools.g_restUrl + '/auth/flows/' + element.id + '/missions',  ///auth/projects/6/flows?paginate=10&page=1
                    headers: { 'Authorization': 'Bearer' + newToken },
                    params: {
                      paginate: 20,
                      page: 1
                    }
                  })
                    .then(function (response) {
                      if (response.status == 200) {
                        console.log(response.data.data)
                        vm.proFlowsList = vm.proFlowsList.concat(response.data.data)
                      }
                    })
                    .catch(function (error) {
                      console.info(error)
                    })
                })
                console.log(vm.proFlowsList)
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
    //提交任务派发
    submitTask(userId, taskId) {
      let vm = this
      vm.$commonTools
        .checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie("user_token")
          let newToken = token.replace('"', "").replace('"', "")
          vm.$http({
            method: 'post',
            url: vm.$commonTools.g_restUrl + '/auth/missions/' + taskId + '/users/' + userId,
            headers: { 'Authorization': 'Bearer' + newToken },
          })
            .then(function (response) {
              if (response.status == 201) {
                vm.$toast.success('派发任务成功！')
                vm.getUser()
              } else if (response.data.code == 100014) {
                vm.$toast.fail('该用户已加入此任务！')
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
  }
}
</script>

<style scoped>
.untask_bg {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 1vh 4vw 0;
}

.untask_row {
  padding-bottom: 1vh;
}

.untask_left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.untask_left .name {
  padding: 0 5px;
}

.input_div {
  width: 21vw;
  height: 3.5vh;
  margin: 0 1vw;
}
.untask_btn {
  background-color: #6bb44e;
  color: #fff;
  border-radius: 4px;
  height: 31px;
}
.van-button--small {
  margin: 0;
}
.select {
  display: inline-block;
  width: 40vw;
  height: 5vh;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;
  z-index: 2;
}
.select select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent;
  background-image: none;
}
</style>
