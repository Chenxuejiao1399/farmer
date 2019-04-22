<template>
  <div class="online_bg">
    <vue-headful title="线上交流"></vue-headful>
    <!-- 用户信息展示开始 -->
    <div class="online_top">
      <div class="online_top_left">
        <img :src="currentUser.avatar" class="avatar_lager">
        <div class="online_top_left_texts">
          <span class="online_top_left_texts_name" v-text="currentUser.real_name"></span>
          <span class="online_top_left_texts_village" v-text="currentUser.village"></span>
        </div>
      </div>
    </div>
    <!-- 用户信息展示结束 -->

    <div class="online_top_right">
      <img src="../../../static/images/online_logo.png">
    </div>

    <!-- 在线用户信息展示开始 -->
    <div class="online_list">
      <div v-for="(item,index) in getOlineUsers" :key="index">
        <div :class="[index !== (getOlineUsers.length-1)?'bottom_line':'','online_list_item']">
          <van-row>
            <van-col span="23">{{item.village}}</van-col>
            <van-col span="1" v-if="item.farmers != undefined">
              <van-icon
                name="arrow-down"
                color="#cccccc"
                v-show="item.isShow"
                @click="changeClass(index,item)"
              />
              <van-icon
                name="arrow-up"
                color="#cccccc"
                v-show="!item.isShow"
                @click="changeClass(index,item)"
              />
            </van-col>
          </van-row>
        </div>
        <div v-if="item.isShow">
          <div
            class="online_list_item_second"
            v-for="(itemC,indexC) in item.farmers"
            :key="indexC"
            @click="goChat(itemC.uid,itemC.name,itemC.img)"
          >
            <img :src="itemC.img" class="avatar">
            <div class="name_div">
              <span class="nama_span">{{itemC.name}}</span>
              <span v-show="!item.isRead" class="info_remind">**</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 在线用户信息展示结束 -->
  </div>
</template>

<script>
export default {
  name: "OnlineList",
  data() {
    return {
      isShow: true,
      count: 1,
      client_id: "", //存放WebSocket连接得到的client_id
      currentUser: this.$store.state.currentUser //当前用户的信息
    }
  },
  created() {
    if (this.$store.state.socketConnect == false) {
      this.connectWebSocket();
    }
  },
  computed: {
    getOlineUsers() {
      return this.$store.state.onlineUserArr;
    }
  },
  methods: {
    //发起WebSocket连接请求，获取client_id
    connectWebSocket() {
      let vm = this;
      if (!"WebSocket" in window) {
        alert("当前浏览器不支持在线聊天功能");
      } else {
        let ws = new WebSocket("ws://192.168.1.29:8282"); // 打开一个 web socket
        (ws.onopen = function (evt) {
          console.log("数据发送中...");
          //let received_msg = evt.data
        }),
          (ws.onmessage = function (evt) {
            let received_msg = evt.data;
            vm.$store.commit("setSocketConnect"); //设置store中WebSocket连接状态为true
            if (vm.count == 1) {
              vm.client_id = received_msg; // 存接收到的client_id
              vm.bindUserId();
              setTimeout(() => {
                vm.getonlineUser(); //获取在线用户信息
                vm.getcurrentUser(); //获取当前用户信息
              }, 500);
              vm.count += 1;
            } else {
              console.log("111数据已接收...");
              console.log(messageContent);

              let messageContent = JSON.parse(received_msg); //收到的消息做转换
              vm.$store.commit("saveMessage", {
                type: "receive", //消息类型为 receive
                sendUid: messageContent.user.id, //发送者的uid
                name: messageContent.user.real_name, //发送者名字
                userImg: messageContent.user.avatar, //发送者名称
                message: messageContent.message, //接收到的消息内容
                time: vm.$commonTools.formatDate(new Date()) //接收消息时间
              });
              vm.$store.commit("setInfoRemind", messageContent.user.id); //传消息发送者的id到store中与在线用户进行比对
            }
          }),
          (ws.onclose = function () {
            alert("连接已关闭...");
          });
      }
    },
    //激活当前用户聊天功能
    bindUserId() {
      let vm = this;
      let client_id = vm.client_id;
      let postData = {};
      postData.client_id = client_id;
      vm.$commonTools
        .checkToken()
        .then(function (res) {
          let token = vm.$commonTools.getCookie("user_token");
          let newToken = token.replace('"', "").replace('"', "");
          console.log("111" + token);
          vm.$http({
            method: "post",
            url: vm.$commonTools.g_restUrl + "/auth/messages/users/create",
            headers: {
              Authorization: "Bearer" + newToken
            },
            data: vm.$qs.stringify(postData)
          })
            .then(function (response) {
              if (response.status === 201) {
                console.log("激活用户信息成功！");
              } else if (response.data.code === 401) {
                console.log("用户未授权！");
              } else if (response.data.code === 100003) {
                console.log("用户已经绑定！");
              } else if (response.data.code === 100002) {
                console.log("用户未在线！");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    //获取当前用户信息
    getcurrentUser() {
      let vm = this;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      vm.$http({
        method: "get",
        url: vm.$commonTools.g_restUrl + "/auth/messages/user/status",
        headers: {
          Authorization: "Bearer" + newToken
        }
      })
        .then(function (response) {
          let currentUser = JSON.stringify(response.data); //转换返回的数据格式
          vm.currentUser = JSON.parse(currentUser);
          vm.$store.commit("setcurrentUser", vm.currentUser);
          //console.log(vm.$store.state.currentUser)
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    //获取当前在线用户
    getonlineUser() {
      let vm = this;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      vm.$http({
        method: "get",
        url: vm.$commonTools.g_restUrl + "/auth/messages/users",
        headers: {
          Authorization: "Bearer" + newToken
        }
      })
        .then(function (response) {
          let onlineUser = JSON.stringify(response.data);
          let onlineUserList = JSON.parse(onlineUser);
          let onlineUserArr = [];
          for (let index in onlineUserList) {
            onlineUserArr.push({
              isRead: true,
              village: onlineUserList[index].village,
              id: onlineUserList[index].uid,
              isShow: true,
              farmers: [
                {
                  uid: onlineUserList[index].uid,
                  img: onlineUserList[index].user.avatar,
                  name: onlineUserList[index].user.real_name
                }
              ]
            });
            //将遍历出来的数组添加到在线用户的数组里
            //console.log(onlineUserList[index])
            //console.log(index)
          }
          vm.$store.commit("saveOnlineUserArr", onlineUserArr)
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    changeClass(indexTemp, itemTemp) {
      let vm = this;
      vm.getOlineUsers.forEach(function (value, index, array) {
        if (indexTemp === index) {
          value.isShow = !itemTemp.isShow;
        }
      });
    },
    goChat(id, name, img) {
      this.$router.push({
        name: "OnlineChat",
        params: { id: id, name: name, img: img }
      });
      this.$store.commit("setInfoIsRead", id); //点击去入聊天将消息状态设置为true
    }
  }
};
</script>

<style scoped>
.online_list_item {
  border-bottom: 1px solid #eee;
}
.online_bg {
  background-color: #f2f4f0;
  min-height: 100vh;
}

.online_top {
  background-color: #ffffff;
  padding: 1vh 4vw;
}

.online_top_left {
  display: flex;
  align-items: center;
}

.online_top_left_texts {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
}

.online_top_left_texts_name {
  font-size: 15px;
}

.online_top_left_texts_village {
  font-size: 12px;
  color: #666666;
}

.online_top_right {
  position: absolute;
  top: 4px;
  right: 0;
}

.online_top_right img {
  height: 8vh;
  background-size: 100% 100%;
}

.online_list {
  margin-top: 2vh;
  background-color: #ffffff;
  height: 89.5vh;
}

.online_list_item {
  padding: 1.5vh 0;
  margin: 0 4vw;
}

.online_list_item_second {
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 1vh;
}

.name_div {
  width: 80vw;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 2vw;
  padding-bottom: 4px;
}
.name_span {
  display: inline-block;
  line-height: 10px;
}
.info_remind {
  display: inline-block;
  padding: 5px;
  color: green;
  float: right;
  line-height: 10px;
}
</style>
