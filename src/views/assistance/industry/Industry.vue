<template>
    <div>
      <vue-headful title="特色产业"></vue-headful>
      <van-tabs sticky>
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          <project-list></project-list>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
import ProjectList from '../../assistance/homeVillage/components/ProjectList'
export default {
  name: 'Industry',
  data () {
    return {}
  },
  components: {
    'project-list': ProjectList
  }
}
</script>

<style scoped>

</style>
