<template>
    <div class="online_bg">
      <vue-headful title="线上交流"></vue-headful>
      <div class="online_top">
        <div class="online_top_left">
          <img src="../../../static/2.jpg" class="avatar_lager">
          <div class="online_top_left_texts">
            <span class="online_top_left_texts_name">张三</span>
            <span class="online_top_left_texts_village">竹林村</span>
          </div>
        </div>
      </div>
      <div class="online_top_right">
        <img src="../../../static/images/online_logo.png">
      </div>

      <div class="online_list">
        <div v-for="(item,index) in lists" :key="index">
          <div :class="[index !== (lists.length-1)?'bottom_line':'','online_list_item']">
            <van-row>
              <van-col span="23">{{item.name}}</van-col>
              <van-col span="1" v-if="item.farmers != undefined">
                <van-icon name="arrow-down" color="#cccccc" v-show="item.isShow" @click="changeClass(index,item)"/>
                <van-icon name="arrow-up" color="#cccccc" v-show="!item.isShow" @click="changeClass(index,item)"/>
              </van-col>
            </van-row>
          </div>
          <div v-if="item.isShow">
            <div class="online_list_item_second"  v-for="(itemC,indexC) in item.farmers" :key="indexC"
            @click="goChat">
              <img src="../../../static/3.jpg" class="avatar">
              <div class="name_div">{{itemC.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OnlineList',
  data () {
    return {
      lists: [{ name: '百花湖村', isShow: false }, { name: '百花湖村', isShow: false }, { name: '百花湖村', isShow: true, farmers: [{ name: '喜庆' }, { name: '喜庆' }] }, { name: '百花湖村', isShow: false }],
      websocket: null
    }
  },
  mounted () {
    if ('WebSocket' in window) {
      this.websocket = new WebSocket('ws://127.0.0.1:8283')
      this.initWebSocket()
    } else {
      alert('当前浏览器 Not support websocket')
    }
  },
  methods: {
    initWebSocket () {
      console.info(this.websocket)
      /* this.websocket.onmessage = this.websockonmessage */
      /* this.websocket.onopen = this.websocketonopen
      this.websocket.onerror = this.websocketonerror
      this.websocket.onclose = this.websocketclose */
    },
    changeClass (indexTemp, itemTemp) {
      let vm = this
      vm.lists.forEach(function (value, index, array) {
        if (indexTemp === index) {
          value.isShow = !itemTemp.isShow
        }
      })
    },
    goChat () {
      this.$router.push({ name: 'OnlineChat' })
    }
  }
}
</script>

<style scoped>
  .online_bg{
    background-color: #f2f4f0;
    min-height: 100vh;
  }

  .online_top{
    background-color: #ffffff;
    padding: 1vh 4vw;
  }

  .online_top_left{
    display: flex;
    align-items: center;
  }

  .online_top_left_texts{
    display: flex;
    flex-direction: column;
    margin-left: 3vw;
  }

  .online_top_left_texts_name{
    font-size: 15px;
  }

  .online_top_left_texts_village{
    font-size: 12px;
    color: #666666;
  }

  .online_top_right{
    position: absolute;
    top: 4px;
    right: 0;
  }

  .online_top_right img{
    height: 8vh;
    background-size: 100% 100%;
  }

  .online_list{
    margin-top: 2vh;
    background-color: #ffffff;
    height: 89.5vh;
  }

  .online_list_item{
    padding: 1.5vh 0;
    margin: 0 4vw;
  }

  .online_list_item_second{
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 1vh;
  }

  .name_div{
    width: 80vw;
    border-bottom : 1px solid #d9d9d9;
    margin-left: 2vw;
    padding-bottom: 1vh;
  }
</style>
