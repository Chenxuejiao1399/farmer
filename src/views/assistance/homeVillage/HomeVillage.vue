<template>
  <div>
    <vue-headful title="本村项目e"></vue-headful>
    <van-tabs v-model="active">
      <van-tab title="本村项目">
        <project-list></project-list>
      </van-tab>
      <van-tab title="我的合作社">我的合作社</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ProjectList from './components/ProjectList'
export default {
  name: 'HomeVillage',
  data () {
    return {}
  },
  components: {
    'project-list': ProjectList
  },
  methods: {}
}
</script>

<style scoped>

</style>
