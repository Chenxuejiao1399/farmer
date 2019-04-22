<template>
  <div class="chat_bg">
    <div class="chat_name"><span>{{chatUser.name}}</span></div>
    <div class="chat_box">
      <div
        v-for="item in getChatMessage"
        :class="['message',item.type=='send' ?  'me' : '']"
        :key="item.id"
      >
        <div class="content">
          <div :class="['bubble',item.type=='send' ? 'bubble_primary right' : 'bubble-default left']">
            <div class="bubble_cont">
              <div class="plain">
                <pre v-text="item.message"></pre>
              </div>
            </div>
          </div>
          <img
            :class="['avatar',item.type=='receive' ? 'left' : '']"
            :src="item.userImg"
          >
        </div>
      </div>
    </div>
    <div class="chat_input">
      <input
        type="text"
        v-model="message"
      />&emsp;
      <van-button
        round
        type="danger"
        size="mini"
        @click="sendMessage"
      >发送</van-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'OnlineChat',
  data() {
    return {
      message: '',  //输入框输入的内容
      chatUser: this.$route.params, //聊天对象信息
      client_id: '',
      currentUser: this.$store.state.currentUser  //从store中拿到当前用户信息
    }
  },
  created() {
    this.saveChatUser()  //保存当前聊天对象的信息
    //console.log("..........所有............")
    //console.log(this.$store.state.myMessage)
  },
  computed: {
    storeMessage() {
      return this.$store.state.myMessage
    },
    getChatMessage() {
      return this.$store.getters.getChatMessage
    }
  },
  methods: {
    //发送消息
    sendMessage() {
      let vm = this
      let message = vm.message
      let uid = vm.chatUser.id
      let postData = {}
      postData.uid = uid
      postData.message = message
      let token = vm.$commonTools.getCookie('user_token')
      let newToken = token.replace('"', '').replace('"', '')
      vm.$http({
        method: 'post',
        url: vm.$commonTools.g_restUrl + '/auth/messages',
        headers: {
          'Authorization': 'Bearer' + newToken
        },
        data: vm.$qs.stringify(postData)
      })
        .then(function (response) {
          if (response.status === 201) {
            vm.$store.commit('saveMessage', {
              type: 'send', //send 消息类型为发送
              sid: vm.currentUser.id, //发送者的id，也就是当前用户id
              name: vm.currentUser.real_name, //发送者的名字
              userImg: vm.currentUser.avatar,  //发送者的头像
              message: vm.message, //发送的消息内容
              sendId: uid,  //接收者的uid
              time: vm.$commonTools.formatDate(new Date()) //发送消息时间
            })
            console.log("输入框消息发送成功")
            vm.message = '' //消息发送成功后清空输入框消息
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    //保存当前聊天用户的消息
    saveChatUser() {
      this.$store.commit('setchatUser', this.chatUser)
    }
  },

}
</script>

<style scoped>
.avatar.left {
  float: left;
}
.chat_bg {
  background-color: #f2f4f0;
  height: 100vh;
  overflow: hidden;
}
.chat_name {
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: #fff;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
}

.chat_box {
  height: 86vh;
  margin: 6vh 4vw 0 4vw;
  overflow-x: hidden;
  overflow-y: auto;
}

/*对话起泡start*/
.message {
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
}

.message .avatar {
  width: 46px;
  height: 46px;
  border-radius: 5px;
}

.message.me {
  justify-content: flex-end;
}
/* .message.me .content {
  float: left;
}
.message.me img {
  float: right;
} */

.message .content {
  overflow: hidden;
}

.bubble {
  max-width: 500px;
  min-height: 1em;
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: left;
  font-size: 14px;
  border-radius: 3px;
  margin: 0 10px;
}

.bubble.left::before {
  border-right-color: #fff;
  border-right-width: 4px;
  right: 100%;
}

.bubble.right::after,
.bubble.right::before {
  left: 100%;
}

.bubble.bubble_primary.right::after {
  border-left-color: #95ec69;
  border-left-width: 4px;
}

.bubble::before,
.bubble::after {
  position: absolute;
  top: 14px;
  border: 6px solid transparent;
  content: " ";
}

.bubble.bubble-default {
  background-color: #fff;
}

.bubble.bubble_primary {
  background-color: #95ec69;
}

.bubble_cont {
  word-wrap: break-word;
  word-break: break-all;
  min-height: 25px;
}

.bubble_cont .plain {
  padding: 9px 13px;
}

pre {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
  word-break: normal;
}
/*对话起泡end*/

.chat_input {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100vw;
  height: 7vh;
  line-height: 7vh;
  text-align: center;
}

.chat_input input {
  border-radius: 4px;
  height: 28px;
  width: 70vw;
  padding: 0 5px;
  border: 1px solid #cccccc;
}
</style>
