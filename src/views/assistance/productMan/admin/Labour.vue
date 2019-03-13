<template>
  <div>
    <vue-headful title="劳工招募"></vue-headful>
    <van-cell-group>
      <van-field v-model="projectName" label="项目名称："/>
      <van-field v-model="projectNum" label="项目人数："/>
      <van-field v-model="projectGoods" label="项目作物："/>
      <van-field v-model="phone" type="tel" label="负责人电话：" placeholder="请填写负责人电话" required/>
      <van-field v-model="projectGoods" label="工作地点："/>
      <van-field v-model="cooperative" label="合作社："/>
      <van-field v-model="labourNum" type="number" label="招募人数：" placeholder="请填写招募人数" required/>
    </van-cell-group>
    <div class="button_100_green">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fabu"></use>
      </svg>
      发布招募
    </div>
  </div>
</template>

<script>
export default {
  name: 'Labour',
  data () {
    return {
      projectName: '',
      projectNum: '',
      projectGoods: '',
      phone: '',
      address: '',
      cooperative: '',
      labourNum: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let vm = this
      vm.projectName = '球盖菇种植项目'
      vm.projectNum = '5人'
      vm.projectGoods = '球盖菇'
    }
  }
}
</script>

<style scoped>

</style>
