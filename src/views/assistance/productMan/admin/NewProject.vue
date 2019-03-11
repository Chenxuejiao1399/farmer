<template>
  <div class="newPro_bg">
    <vue-headful title="创建项目"></vue-headful>
    <div class="upload_bg">
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
      <van-field v-model="proNum" required clearable label="项目人数：" placeholder="项目人数"/>
      <van-field v-model="proGoods" required clearable label="项目作物：" placeholder="项目作物"/>
      <van-field v-model="leader" required clearable label="负责人：" placeholder="负责人"/>
      <van-field v-model="phone" required clearable label="负责电话：" placeholder="负责电话"/>
      <van-field v-model="address" required clearable label="工作地点：" placeholder="请选择工作地点" @focus="showAddress" readonly/>
      <van-field v-model="cooperative" required clearable label="合作社：" placeholder="请选择合作社" @focus="showCo" readonly/>
    </van-cell-group>
    <div class="add_word" @click="addWord"><van-icon name="add-o" />自定义字段</div>
    <van-popup v-model="isAddress" position="bottom">
      <van-picker :columns="columns" show-toolbar title="工作地点" @cancel="onCancelAdd" @confirm="onConfirmAdd"/>
    </van-popup>
    <van-popup v-model="isCo" position="bottom">
      <van-picker :columns="columns" show-toolbar title="合作社" @cancel="onCancelCo" @confirm="onConfirmCo"/>
    </van-popup>
    <div class="button_100" @click="addProject">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-faqihuodong"></use>
      </svg>
      创建
    </div>

    <van-dialog
      v-model="isShowDialog"
      title = "自定义字段"
      show-cancel-button
      @confirm = "saveWord">
      <van-field
        v-model="wordName"
        label="字段名称"
        placeholder="请输入字段名称"
      />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'NewProject',
  data () {
    return {
      proName: '',
      proNum: '',
      proGoods: '',
      leader: '',
      phone: '',
      address: '',
      isAddress: false,
      columns: ['地点1', '地点1'],
      cooperative: '',
      isCo: false,
      isShowDialog: false,
      wordName: ''
    }
  },
  methods: {
    /* 图片上传相关start */
    onRead (file) {
      console.log(file.content)
    },
    /* 图片上传相关end */
    showAddress () {
      this.isAddress = true
    },
    onCancelAdd () { this.isAddress = false },
    onConfirmAdd (selected) {
      this.address = selected
      this.isAddress = false
    },
    showCo () {
      this.isCo = true
    },
    onCancelCo () { this.isCo = false },
    onConfirmCo (selected) {
      this.cooperative = selected
      this.isCo = false
    },
    addProject () {

    },
    addWord () {
      this.isShowDialog = true
    },
    saveWord () {}
  }
}
</script>

<style scoped>
  .newPro_bg{
    height: 93vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .upload_bg{
    height: 30vh;
    background-color: #f7f7f7;
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

  .add_word{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2vh;
    color: #6bb44e;
  }
</style>
