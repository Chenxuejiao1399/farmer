<template>
  <div class="plan_bg">
    <vue-headful title="生产计划"></vue-headful>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="plan_card" v-for="(item,index) in planList" :key="index">
        <div class="plan_title">{{item.name}}</div>
        <div class="plan_content" @click="goMission(item.id)">{{item.body}}</div>
        <div class="plan_bottom">
          <van-row>
            <van-col span="20">{{item.create_at}} 至 {{item.end_at}}</van-col>
            <van-col span="4">
              <div class="tag">
                <van-icon name="friends-o" size="14px"/>
                <span>{{item.volunteer_count}}人</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <van-row
          class="product_top_menu"
          type="flex"
          justify="center"
          v-show="userRoleId == 5 || userRoleId == 4"
        >
          <van-col span="12">
            <div class="createProcess" @click="createProcess(item.id,item.name)">创建工作流</div>
          </van-col>
          <van-col span="12">
            <div class="createProcess" @click="checkProcess(item.id,item.name)">查看工作流</div>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'ProductPlan',
  data() {
    return {
      userRoleId: this.$store.state.userRole,
      planList: [], //项目列表
      curPage: 1,  //当前页
      paginate: 5, //每页显示总条数
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      let vm = this
      // 异步更新数据
      setTimeout(() => {
        //调用token刷新方法
        vm.$commonTools.checkToken()
          .then(function (res) {
            let token = vm.$commonTools.getCookie('user_token')
            let newToken = token.replace('"', '').replace('"', '')
            vm.$http({
              method: 'get',
              url: vm.$commonTools.g_restUrl + '/auth/user/projects',
              headers: { 'Authorization': 'Bearer' + newToken },
              params: {
                page: vm.curPage,
                paginate: vm.paginate
              }
            })
              .then(function (response) {
                if (response.status === 200) {
                  vm.planList = vm.planList.concat(response.data.data)
                  vm.loading = false // 本次加载状态结束
                  vm.curPage++
                  //数据全部加载完成
                  if (vm.curPage > response.data.meta.pagination.total_pages) {
                    vm.finished = true
                  }
                }
              })
              .catch(function (error) {
                console.info(error)
              })
          })
          .catch(function (error) {
            console.info(error)
          })
      }, 500)
    },

    //为该项目创建工作流
    createProcess(id, name) {
      let vm = this
      //调用token刷新方法
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'post',
            url: vm.$commonTools.g_restUrl + '/auth/projects/' + id + '/flows',
            headers: { 'Authorization': 'Bearer' + newToken },
          })
            .then(function (response) {
              if (response.status === 201) {
                vm.$router.push({
                  name: 'CreateProcess',
                  params: { id: id, title: name }   //传入当前需要创建工作流的项目id
                })
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
    //查看并编辑工作流
    checkProcess(id, name) {
      this.$router.push({
        name: 'CreateProcess',
        params: { id: id, title: name }   //传入当前需要创建工作流的项目id
      })
    },
    goDetail() {
      this.$router.push({ name: 'ProcessDetail' })
    },
    goMission(id) {
      this.$router.push({ name: 'ProcessDetail', params: { id: id } })
    }
  }
}
</script>

<style scoped>
.plan_bg {
  background-color: #f2f4f0;
  min-height: 96vh;
  padding: 2vh 0;
}
.plan_card {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(200, 200, 200, 0.5);
  margin: 0 4vw 2vh;
}
.plan_title {
  padding: 2vh 4vw 0;
  font-weight: bold;
}
.plan_content {
  padding: 1vh 4vw;
}
.plan_bottom {
  font-size: 12px;
  padding: 0 4vw 2vh;
  color: #b3b3b3;
}
.tag {
  background-color: #53bd2a;
  color: #fff;
  border-radius: 20px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.createProcess {
  background: #74b382;
  border: 1px solid #ccc;
  /* border-radius: 3px; */
  color: #fff;
  text-align: center;
  line-height: 25px;
}
</style>
