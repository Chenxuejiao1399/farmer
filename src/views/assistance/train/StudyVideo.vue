<template>
  <div>
    <video-list :isPage="1"></video-list>
  </div>
</template>

<script>
import VideoList from './components/VideoList'
export default {
  name: 'StudyVideo',
  components: {
    'video-list': VideoList
  }
}
</script>

<style scoped>

</style>
