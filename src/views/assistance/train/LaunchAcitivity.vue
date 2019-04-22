<template>
  <div class="launch_bg">
    <vue-headful title="发起活动"></vue-headful>
    <div
      class="upload_bg"
      :style="{backgroundImage: 'url(' + (coverImgUrl ? coverImgUrl : baseImg) + ')'}"
    >
      <van-uploader :after-read="onRead">
        <div class="upload_div">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tupian"></use>
          </svg>
          <span>+添加活动海报</span>
        </div>
      </van-uploader>
    </div>
    <van-cell-group>
      <van-field v-model="theme" required clearable label="主题：" placeholder="活动主题"/>
      <van-field v-model="address" required clearable label="地点：" placeholder="活动地点"/>
      <van-field
        v-model="starttime"
        required
        label="时间"
        placeholder="请选择活动开始开始时间"
        @click="showTime('start')"
      />
      <van-field v-model="endtime" label placeholder="请选择活动结束时间" @click="showTime('end')"/>
      <van-field v-model="hostunit" required clearable label="举办方：" placeholder="活动举办单位"/>
      <van-field v-model="limitNum" required clearable label="人数：" placeholder="活动限制人数"/>
      <van-field
        v-model="joinTime"
        label="报名时间"
        placeholder="请选择报名时间"
        @click="showTime('joinTime')"
      />
      <van-field
        v-model="detail"
        clearable
        type="textarea"
        rows="3"
        label="活动详情："
        placeholder="请简要描述本次活动的内容"
        autosize
      />
    </van-cell-group>

    <!-- 活动开始时间选择设置 -->
    <van-popup v-model="showstart" position="bottom" :overlay="false">
      <van-datetime-picker :formatter="formatter" @confirm="startConfirm" @cancel="startCancel"/>
    </van-popup>
    <!-- 活动结束时间选择设置 -->
    <van-popup v-model="showend" position="bottom" :overlay="false">
      <van-datetime-picker :formatter="formatter" @confirm="endConfirm" @cancel="endCancel"/>
    </van-popup>
    <!-- 活动报名时间选择设置 -->
    <van-popup v-model="showjoinTime" position="bottom" :overlay="false">
      <van-datetime-picker
        :formatter="formatter"
        @confirm="joinTimeConfirm"
        @cancel="joinTimeCancel"
      />
    </van-popup>

    <div class="button_100_orange" @click="save">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faqihuodong"></use>
      </svg>
      发起活动
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaunchAcitivity',
  data() {
    return {
      activeId: 2, //创建活动的id
      baseImg: require('../../../static/images/launch_bg.png'), //未上传之前的图片背景显示
      coverImgUrl: '', //上传图片显示，覆盖原来的背景图
      uploadImg: '',//活动海报图片
      theme: '',  //活动主题
      address: '', //活动地点
      starttime: '',  //开始时间
      endtime: '',  //结束时间
      hostunit: '',  //活动举办单位
      limitNum: '', //活动限制人数
      detail: '',  //活动详情
      joinTime: '',
      showstart: false,  //默认不显示活动开始时间
      showend: false,  //默认不显示活动结束时间
      showjoinTime: false  //默认不显示活动报名时间
    }
  },
  mounted() {

  },
  methods: {
    save() {
      let vm = this
      let formData = new FormData()
      formData.append("title", vm.theme)
      formData.append("location", vm.address)
      formData.append("group", vm.hostunit)
      formData.append("body", vm.detail)
      formData.append("create_at", vm.starttime)
      formData.append("end_at", vm.endtime)
      formData.append("auth_category_id", vm.activeId)
      formData.append("image", vm.uploadImg)
      formData.append("limit", vm.limitNum)
      formData.append("created_at", vm.joinTime)
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'post',
            url: vm.$commonTools.g_restUrl + '/auth/trainning',
            headers: {
              'Authorization': 'Bearer' + newToken
            },
            data: formData
          })
            .then(function (response) {
              if (response.status === 201) {
                vm.$toast.success('发起活动成功！')
                setTimeout(() => {
                  vm.$router.replace({ name: 'OfflineLearning' })
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
      console.log(file)
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
      } else if (temp === 'joinTime') {
        vm.showjoinTime = true
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
    joinTimeConfirm(value) {
      let vm = this
      vm.joinTime = vm.$commonTools.formatDate(value)
      vm.showjoinTime = false
    },
    startCancel() {
      this.showstart = false
    },
    endCancel() {
      this.showend = false
    },
    joinTimeCancel() {
      this.showjoinTime = false
    }
    /* 时间相关 end */
  }
}
</script>

<style scoped>
.launch_bg {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.upload_bg {
  /* background-image: url("../../../static/images/launch_bg.png"); */
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
</style>
