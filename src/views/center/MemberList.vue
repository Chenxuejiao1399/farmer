<template>
  <div>
    <vue-headful title="社员列表"></vue-headful>
    <div
      v-for="memberList in memberLists"
      class="list_cell bottom_line"
    >
      <img
        :src="memberList.avatar"
        class="avatar"
      >
      <span>{{ memberList.user_name }}</span>
      <span>{{ memberList.sex }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  data() {
    return {
      memberLists: ' '
    }
  },
  mounted() {
    this.getMemberLists()
  },
  methods: {
    getMemberLists() {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/coop/userInfos',
            headers: { 'Authorization': 'Bearer' + newToken }
          })
            .then(function (response) {
              vm.memberLists = response.data.data
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    }
  }

}
</script>

<style scoped>
.list_cell {
  margin: 0 4vw;
  padding: 1.2vh 0;
  display: flex;
  align-items: center;
}

.list_cell span {
  padding: 0 2vw;
}
</style>
