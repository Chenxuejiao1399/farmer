<template>
    <div class="launch_bg">
      <vue-headful title="发起活动"></vue-headful>
      <div class="upload_bg">
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
          <van-field
            v-model="theme"
            required
            clearable
            label="主题："
            placeholder="活动主题"/>
          <van-field
            v-model="address"
            required
            clearable
            label="地点："
            placeholder="活动地点"/>
          <van-field
            v-model="starttime"
            required
            label="时间"
            placeholder="请选择开始时间"
            @click="showTime('start')"
          />
          <van-field
            v-model="endtime"
            label=""
            placeholder="请选择结束时间"
            @click="showTime('end')"
          />
          <van-field
            v-model="hostunit"
            required
            clearable
            label="举办方："
            placeholder="活动举办单位"/>
          <van-field
            v-model="organizer"
            required
            clearable
            label="举办人："
            placeholder="活动主要发起者"/>
          <van-field
            v-model="phone"
            required
            clearable
            label="电话："
            placeholder="活动主要发起者电话"/>
          <van-field
            v-model="detail"
            clearable
            type = "textarea"
            rows = '3'
            label="活动详情："
            placeholder="请简要描述本次活动的内容"
            autosize/>
        </van-cell-group>

        <van-popup v-model="showstart" position="bottom" :overlay="false">
          <van-datetime-picker
            type="date"
            :formatter="formatter"
           @confirm = "startConfirm"
           @cancel = "startCancel"/>
        </van-popup>
        <van-popup v-model="showend" position="bottom" :overlay="false">
          <van-datetime-picker
            type="date"
            :formatter="formatter"
            @confirm = "endConfirm"
            @cancel = "endCancel"/>
        </van-popup>

        <div class="launch_button" @click="save">
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
  data () {
    return {
      theme: '',
      address: '',
      starttime: '',
      endtime: '',
      hostunit: '',
      organizer: '',
      phone: '',
      detail: '',
      showstart: false,
      showend: false
    }
  },
  methods: {
    save () {},

    /* 图片上传相关start */
    onRead (file) {
      console.log(file.content)
    },
    /* 图片上传相关end */

    /* 时间相关 start */
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }
      return value
    },
    showTime (temp) {
      let vm = this
      if (temp === 'start') {
        vm.showstart = true
      } else if (temp === 'end') {
        vm.showend = true
      }
    },
    startConfirm (value) {
      let vm = this
      vm.starttime = vm.$commonTools.formatDate(value)
      vm.showstart = false
    },
    endConfirm (value) {
      let vm = this
      vm.endtime = vm.$commonTools.formatDate(value)
      vm.showend = false
    },
    startCancel () {
      this.showstart = false
    },
    endCancel () {
      this.showend = false
    }
    /* 时间相关 end */
  }
}
</script>

<style scoped>
  .launch_bg{
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .upload_bg{
    background-image: url("../../../static/images/launch_bg.png");
    background-size: 100% 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b1bbad;
    font-size: 12px;
  }

  .upload_div{
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: center;
    align-items: center;
  }

  .upload_div svg{
    font-size: 40px;
  }

  .launch_button{
    position: absolute;
    bottom: 0;
    background-color: #f29530;
    color:#ffffff;
    width: 100vw;
    text-align: center;
    height: 34px;
    line-height: 34px;
    box-shadow:3px 3px 15px #c9c9c9;
  }
</style>
