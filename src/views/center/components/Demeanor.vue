<template>
  <div>
    <vue-headful title="社员风采"></vue-headful>
    <div class="demeanor_card_list">
      <div
        v-for="demeanorCardList in demeanorCardList"
        class="demeanor_card_item"
        @click="getArticleDetails(demeanorCardList.id)"
      >
        <img :src="demeanorCardList.image">
        <div class="demeanor_card_item_title">{{demeanorCardList.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demeanor',
  data() {
    return {
      demeanorCardList: ''
    }
  },
  mounted() {
    this.getDemeanor()
  },
  methods: {
    getDemeanor() {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/coopArticles',
            headers: { 'Authorization': 'Bearer' + newToken },
            params: { 'category_name': '社员风采' }
          })
            .then(function (response) {
              vm.demeanorCardList = response.data.data
            })
            .catch(function (error) {
              console.info(error)
            })
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    //点击文章列表时携带参数跳转到文章内容页
    getArticleDetails(id) {
      //直接调用$router.push 实现携带参数的跳转
      this.$router.push({
        path: `/articledetails/${id}`,
      })
    }
  }
}
</script>

<style scoped>
.demeanor_card_list {
  display: flex;
  flex-wrap: wrap;
  margin: 1vh 2vw;
}

.demeanor_card_item {
  background-color: #ffffff;
  width: 44vw;
  border-radius: 4px;
  box-shadow: 3px 3px 15px rgba(200, 200, 200, 0.5);
  padding-bottom: 1.5vh;
  margin: 1vh 2vw;
}

.demeanor_card_item img {
  width: 44vw;
  height: 16vh;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.demeanor_card_item_title {
  padding: 1vh 2vw 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
