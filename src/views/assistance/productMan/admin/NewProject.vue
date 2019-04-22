<template>
  <div class="newPro_bg">
    <vue-headful title="创建项目"></vue-headful>
    <div
      class="upload_bg"
      :style="{backgroundImage: 'url(' + (coverImgUrl ? coverImgUrl : '') + ')'}"
    >
      <van-uploader :after-read="onRead">
        <div class="upload_div">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tupian"></use>
          </svg>
          <span>+上传项目照片</span>
        </div>
      </van-uploader>
    </div>

    <van-cell-group>
      <van-field v-model="proName" required clearable label="项目名称：" placeholder="项目名称"/>
      <van-field v-model="leader" required clearable label="负责人：" placeholder="负责人"/>
      <van-field v-model="content" required clearable label="项目内容：" placeholder="项目内容"/>
      <van-field v-model="location" required clearable label="地点：" placeholder="地点"/>
      <van-field
        v-model="starttime"
        required
        label="时间"
        placeholder="请选择活动开始开始时间"
        @click="showTime('start')"
      />
      <van-field v-model="endtime" label placeholder="请选择活动结束时间" @click="showTime('end')"/>

      <!-- 自定义字段添加 我的-->
      <van-field
        v-for="(item,index) in selfContent"
        :key="index"
        v-model="item.value"
        required
        clearable
        :label="item.lable"
        :placeholder="item.value"
      />

      <!-- 自定义字段添加 我的-->

      <!-- <van-field
        v-model="address"
        required
        clearable
        label="工作地点："
        placeholder="请选择工作地点"
        @focus="showAddress"
        readonly
      />
      <van-field
        v-model="cooperative"
        required
        clearable
        label="合作社："
        placeholder="请选择合作社"
        @focus="showCo"
        readonly
      />-->
    </van-cell-group>
    <div class="add_word" @click="addWord">
      <van-icon name="add-o"/>自定义字段
    </div>
    <!-- <van-popup
      v-model="isAddress"
      position="bottom"
    >
      <van-picker
        :columns="columns"
        show-toolbar
        title="工作地点"
        @cancel="onCancelAdd"
        @confirm="onConfirmAdd"
      />
    </van-popup>-->
    <!-- <van-popup
      v-model="isCo"
      position="bottom"
    >
      <van-picker
        :columns="columns"
        show-toolbar
        title="合作社"
        @cancel="onCancelCo"
        @confirm="onConfirmCo"
      />
    </van-popup>-->
    <!-- 活动开始时间选择设置 -->
    <van-popup v-model="showstart" position="bottom" :overlay="false">
      <van-datetime-picker :formatter="formatter" @confirm="startConfirm" @cancel="startCancel"/>
    </van-popup>
    <!-- 活动结束时间选择设置 -->
    <van-popup v-model="showend" position="bottom" :overlay="false">
      <van-datetime-picker :formatter="formatter" @confirm="endConfirm" @cancel="endCancel"/>
    </van-popup>

    <div class="button_100_orange" @click="saveProject">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faqihuodong"></use>
      </svg>
      创建
    </div>

    <!-- 自定义字段弹框开始 -->
    <van-dialog v-model="isShowDialog" title="自定义字段" show-cancel-button @confirm="saveWord">
      <van-field v-model="wordName" label="字段名称" placeholder="请输入字段名称"/>
    </van-dialog>
    <!-- 自定义字段弹框结束 -->
  </div>
</template>

<script>
export default {
  name: 'NewProject',
  data() {
    return {
      coverImgUrl: '', //上传图片显示，覆盖原来的背景图
      proName: '', //项目名称
      uploadImg: '',//项目封面
      leader: '',  // 负责人
      content: '',  //项目内容
      location: '', // 工作地点
      starttime: '',  //开始时间
      endtime: '',  //结束时间
      wordName: '',  //自定义字段输入框
      selfContent: [],//自定义字段名称
      showSelfDefine: false, //自定义字段列表，默认不显示
      showstart: false,  //默认不显示活动开始时间
      showend: false,  //默认不显示活动结束时间
      isShowDialog: false
      // isAddress: false,  // 合作社
      // columns: ['地点1', '地点1'], 
      // isCo: false,
    }
  },
  methods: {
    getNewProject() {
      let vm = this
      let selfDefine = JSON.stringify(vm.selfContent)  //将自定义字段对象格式转换
      let formData = new FormData()
      formData.append("name", vm.proName)
      formData.append("image", vm.uploadImg)
      formData.append("group", vm.leader)
      formData.append("auth_category_id", 3)
      formData.append("body", vm.content)
      formData.append("location", vm.location)
      formData.append("create_at", vm.starttime)
      formData.append("end_at", vm.endtime)
      formData.append("selfDefine", selfDefine)

      // //调用token刷新方法
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          console.log(token)
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'post',
            url: vm.$commonTools.g_restUrl + '/auth/project',
            headers: { 'Authorization': 'Bearer' + newToken },
            data: formData
          })
            .then(function (response) {
              if (response.status === 201) {
                vm.$toast.success('创建项目成功！')
                setTimeout(() => {
                  vm.$router.replace({ name: 'ProductManagement' })
                }, 1000)
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

    /* 图片上传相关start */
    onRead(file) {
      this.uploadImg = file.file
      this.coverImgUrl = file.content
    },
    /* 图片上传相关end */

    /* 时间相关 start */
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }
      return value
    },
    showTime(temp) {
      let vm = this
      if (temp === 'start') {
        vm.showstart = true
      } else if (temp === 'end') {
        vm.showend = true
      }
    },
    startConfirm(value) {
      let vm = this
      vm.starttime = vm.$commonTools.formatDate(value)
      vm.showstart = false
    },
    endConfirm(value) {
      let vm = this
      vm.endtime = vm.$commonTools.formatDate(value)
      vm.showend = false
    },
    startCancel() {
      this.showstart = false
    },
    endCancel() {
      this.showend = false
    },

    // showAddress() {
    //   this.isAddress = true
    // },
    // onCancelAdd() { this.isAddress = false },
    // onConfirmAdd(selected) {
    //   this.address = selected
    //   this.isAddress = false
    // },
    // showCo() {
    //   this.isCo = true
    // },
    // onCancelCo() { this.isCo = false },
    // onConfirmCo(selected) {
    //   this.cooperative = selected
    //   this.isCo = false
    // },

    //点击创建项目
    saveProject() {
      this.getNewProject()
      //console.log(this.selfContent)
      // let arrList = this.selfContent
      // let selfcontentList = []

      //   for (let index in arrList) {
      //      console.log(arrList[index].lable +":"+ arrList[index].value)
      //      //console.log(index)
      //   selfcontentList.push({ "arrList[index].lable" + ":" + "arrList[index].value"})
      // }

      // arrList.forEach(item =>{
      //   console.log(item.lable + ":" + item.value)
      //   selfcontentList.push( item.lable + ":" + item.value )
      //   selfcontentList.push( '{' + item.lable + ":" + item.value + '}')
      //   {lable: item.lable, value: item.value}
      // })

      //console.log(JSON.parse(selfcontentList))
    },
    addWord() {
      this.isShowDialog = true
    },
    saveWord() {
      let selfName = this.wordName
      if (selfName.length == 0) {
        console.log("输入字段不能为空！")
      } else {
        this.selfContent.push({ lable: selfName, value: '' })
        this.showSelfDefine = true
      }
      this.wordName = ''
    }
  }
}
</script>

<style scoped>
.newPro_bg {
  height: 93vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.upload_bg {
  background-size: 100% 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b1bbad;
  font-size: 12px;
}
.upload_div {
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: center;
  align-items: center;
}

.upload_div svg {
  font-size: 40px;
}

.add_word {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2vh;
  color: #6bb44e;
}
</style>
