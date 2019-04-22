<template>
  <div>
    <vue-headful title="流程创建"></vue-headful>
    <div class="process_top">请指定该项目流程，一经确定无法更改。如需更改请联系管理员。</div>
    <div class="plan_title">{{title}}</div>
    <div class="main">
      <div v-for="(flow,flowIndex) in flowContent" :key="flowIndex">
        <div class="process_middle">
          <p>工作流程{{flowIndex+1}}</p>
          <div v-for="(flowMissions,index) in flow.flowMissions" :key="index">
            <!-- 项目流程开始 -->
            <div class="process_middle_row">
              <span class="process_number">{{index+1}}</span>
              <div class="process_content_M">
                <label>
                  <span class="process_content">{{flowMissions.name}}</span>
                </label>
              </div>
              <div
                v-if="flowMissions.auth_article ==='无挂载文章' || flowMissions.video ==='无挂载视频' ? true : false"
                class="process_content_R"
                @click="getFile(flowMissions.id,flowMissions.name)"
              >
                <van-icon name="add-o" color="#999"/>
                <span>添加对应资料</span>
              </div>
              <div
                v-if="flowMissions.auth_article ==='无挂载文章' || flowMissions.video ==='无挂载视频' ? false : true"
                class="process_content_R"
              >
                <ul class="file_ul">
                  <li
                    @click="goArticle(flowMissions.auth_article.id)"
                  >1.{{flowMissions.auth_article.title}}</li>
                  <li>2.{{flowMissions.video.tag}}</li>
                </ul>
              </div>
            </div>
            <div :class="[index !== (flow.flowMissions.length-1)?'':'hide','process_icon']">
              <van-icon name="arrow-down" color="#A2A2A2"/>
            </div>
          </div>
          <!-- 项目流程结束 -->

          <div class="add_btn" @click="addFlow(flow.flowId)">
            <van-button plain type="danger" size="small">新增流程任务</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="button_100_green">提交</div>

    <van-dialog v-model="isShow" title="新增流程任务" show-cancel-button @confirm="confirmSubmit">
      <van-field v-model="proName" label="流程名称" placeholder="请输入流程任务名称"/>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'CreateProcess',
  data() {
    return {
      id: this.$route.params.id,  //项目id
      title: this.$route.params.title,
      isShow: false,
      proName: '',  //新增流程名称
      curPage: 1,  //当前页
      paginate: 10, //每页显示总条数
      flowContent: [], //创建的单个流程
      flowId: null,
      flowList: null,  //装所有流程任务
      //showFile: false,
    }
  },
  mounted() {
    this.getFlow()
  },
  methods: {
    //获取该项目下面的工作流
    getFlow() {
      let vm = this
      let token = vm.$commonTools.getCookie('user_token')
      let newToken = token.replace('"', '').replace('"', '')
      //查询该项目下的所有工作流
      vm.$http({
        method: 'get',
        url: vm.$commonTools.g_restUrl + '/auth/projects/' + vm.id + '/flows',  ///auth/projects/6/flows?paginate=10&page=1
        headers: { 'Authorization': 'Bearer' + newToken },
        params: {
          paginate: vm.paginate,
          page: vm.curPage
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
                    //console.log(response.data.data)
                    vm.flowContent.push({
                      flowId: element.id,
                      flowMissions: response.data.data
                    })
                  }
                })
                .catch(function (error) {
                  console.info(error)
                })
            })

            console.log(vm.flowContent)
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    addFlow(id) {
      console.log(id)
      this.flowId = id
      this.isShow = true
    },
    //提交新建流程
    confirmSubmit() {
      let vm = this
      if (vm.proName.length == 0) {
        vm.$toast.fail('输入名称不能为空！')
      } else {
        let formData = new FormData()
        formData.append("name", vm.proName)
        vm.$commonTools.checkToken()
          .then(function (res) {
            let token = vm.$commonTools.getCookie('user_token')
            let newToken = token.replace('"', '').replace('"', '')
            vm.$http({
              method: 'post',
              url: vm.$commonTools.g_restUrl + '/auth/flows/' + vm.flowId + '/missions',
              headers: { 'Authorization': 'Bearer' + newToken },
              data: formData
            })
              .then(function (response) {
                if (response.status == 201) {
                  vm.$toast.success('创建任务成功!')
                }
              })
              .catch(function (error) {
                console.info(error)
              })
          })
          .catch(function (error) {
            console.info(error)
          })
      }
    },

    //获取文章资源与视频资源
    getFile(id, name) {
      this.$router.push({
        name: 'ArticleFile',
        params: { id: id, title: name, projectId: this.id, projectName: this.title }  //将项目id,name,任务id,name传入
      })
    },
    goArticle(id) {
      //console.log(id)
      this.$router.push({
        path: `/articledetails/${id}`,
      })
    }

  }
}
</script>
<style scoped>
.main {
  height: 75vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 20px;
}
.hide {
  display: none;
}
.file_ul {
  width: 32vw;
}
.file_ul li {
  color: green;
  line-height: 15px;
}
.process_top {
  background-color: #f5f5f5;
  color: #999999;
  padding: 1vh 4vw;
  margin-bottom: 0vh;
}
.plan_title {
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  color: #fff;
  padding: 5px 0px;
  background-color: #6bb44e;
}
.process_middle {
  margin: 0 8vw;
  position: relative;
}
.process_middle_row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6vh;
}

.process_number {
  background-color: #f29530;
  display: inline-block;
  height: 14px;
  line-height: 14px;
  width: 14px;
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
  font-size: 11px;
}

.process_number_gray {
  background-color: #c8c8c8;
  display: inline-block;
  height: 14px;
  line-height: 14px;
  width: 14px;
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
  font-size: 11px;
}

.process_content_M {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.process_content {
  display: inline-block;
  background-color: #e9e9e9;
  width: 40vw;
  height: 5vh;
  line-height: 5vh;
  border-radius: 4px;
  border: none;
  text-align: center;
  margin: 0 2vw;
  padding: 0 2vw;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.process_content_R {
  width: 32vw;
  display: flex;
  align-items: center;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
  position: relative;
  height: 30px;
  line-height: 30px;
}
.process_icon {
  width: 30vw;
  text-align: right;
}

.add_btn {
  text-align: center;
  margin-top: 4vh;
  margin-bottom: 40px;
}

/* 选择文章或视频弹出层开始 */
.resourceDiv {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.fileList {
  background: #333;
  opacity: 0.9;
}
/* 选择文章或视频弹出层结束 */
</style>
