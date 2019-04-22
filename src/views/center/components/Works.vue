<template>
  <div>
    <vue-headful title="社员作品"></vue-headful>
    <div class="works_card">
      <div
        v-for="worksCardItem in worksCardItem"
        class="works_card_item"
        @click="getArticleDetails(worksCardItem.id)"
      >
        <van-row>
          <van-col span="9">
            <img
              :src="worksCardItem.image"
              class="works_card_img"
            >
          </van-col>
          <van-col
            span="14"
            offset="1"
          >
            <div class="works_card_item_R">
              <span class="works_card_item_title">{{worksCardItem.title}}</span>
              <span
                class="works_card_item_time"
                v-text="$commonTools.subStr(worksCardItem.created_at,10)"
              ></span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      worksCardItem: ''
    }
  },
  mounted() {
    this.getworksCardItem()
  },
  methods: {
    getworksCardItem() {
      let vm = this
      vm.$commonTools.checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie('user_token')
          let newToken = token.replace('"', '').replace('"', '')
          vm.$http({
            method: 'get',
            url: vm.$commonTools.g_restUrl + '/auth/coopArticles',
            headers: { 'Authorization': 'Bearer' + newToken },
            params: { 'category_name': '社员作品' }
          })
            .then(function (response) {
              vm.worksCardItem = response.data.data
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
.works_card {
  margin: 2vh 4vw;
}

.works_card_item {
  padding-right: 2vw;
  height: 94px;
  margin-bottom: 1vh;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(200, 200, 200, 0.5);
}

.works_card_img {
  width: 100%;
  height: 94px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.works_card_item_R {
  height: 78px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.works_card_item_title {
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}

.works_card_item_time {
  font-size: 12px;
  color: #999999;
}
</style>
