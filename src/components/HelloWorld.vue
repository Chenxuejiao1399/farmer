<template>
  <div class="hello">
    <vue-headful title="个人中心"></vue-headful>
    <h4>欢迎进入</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  }
}
</script>

