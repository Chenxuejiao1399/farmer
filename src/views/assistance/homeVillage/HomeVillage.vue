<template>
  <div>
    <vue-headful title="本村项目"></vue-headful>
    <van-tabs sticky>
      <van-tab title="本村项目">
        <project-list></project-list>
      </van-tab>
      <van-tab title="我的合作社">
        <project-list></project-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ProjectList from "./components/ProjectList"
export default {
  name: "HomeVillage",
  data() {
    return {}
  },
  components: {
    "project-list": ProjectList
  },
  methods: {}
}
</script>

<style scoped>
</style>
