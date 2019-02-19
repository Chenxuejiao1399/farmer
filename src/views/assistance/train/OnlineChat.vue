<template>
    <div class="chat_bg">
      <div class="chat_name"><span>喜庆</span></div>
      <div class="chat_box">
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message me">
          <div class="content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
            <img class="avatar" src="../../../static/2.jpg">
          </div>
        </div>
        <div class="message me">
          <div class="content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
            <img class="avatar" src="../../../static/2.jpg">
          </div>
        </div>
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message me">
          <div class="content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
            <img class="avatar" src="../../../static/2.jpg">
          </div>
        </div>
        <div class="message me">
          <div class="content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
            <img class="avatar" src="../../../static/2.jpg">
          </div>
        </div>
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message">
          <img class="avatar" src="../../../static/2.jpg">
          <div class="content">
            <div class="bubble bubble-default left">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input手机输入法发送键怎么设置 input</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="message me">
          <div class="content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
            <img class="avatar" src="../../../static/2.jpg">
          </div>
        </div>
        <div class="message me">
          <div class="content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div class="plain">
                  <pre>111</pre>
                </div>
              </div>
            </div>
            <img class="avatar" src="../../../static/2.jpg">
          </div>
        </div>
      </div>
      <div class="chat_input">
        <input type="text"/>&emsp;
        <van-button round type="danger" size="mini">发送</van-button>
      </div>

    </div>
</template>

<script>
export default {
  name: 'OnlineChat'
}
</script>

<style scoped>
  .chat_bg{
    background-color: #f2f4f0;
    height: 100vh;
    overflow: hidden;
  }

  .chat_name{
    position: absolute;
    top: 0;
    width: 100vw;
    background-color: #fff;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
  }

  .chat_box{
    height: 86vh;
    margin: 6vh 4vw 0 4vw;
    overflow-x: hidden;
    overflow-y: auto;
  }

  /*对话起泡start*/
  .message{
    margin-top:8px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .message .avatar{
    width: 46px;
    height: 46px;
    border-radius: 5px;
  }

  .message.me {
    justify-content: flex-end;
  }

  .message .content{
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

  .bubble.right::after, .bubble.right::before {
    left: 100%;
  }

  .bubble.bubble_primary.right::after {
    border-left-color: #95ec69;
    border-left-width: 4px;
  }

  .bubble::before,.bubble::after {
    position: absolute;
    top: 14px;
    border: 6px solid transparent;
    content: " ";
  }

  .bubble.bubble-default{
    background-color: #fff;
  }

  .bubble.bubble_primary{
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

  .chat_input{
    position: absolute;
    bottom: 0;
    background-color: #fff;
    width: 100vw;
    height: 7vh;
    line-height: 7vh;
    text-align: center;
  }

  .chat_input input{
    border-radius: 4px;
    height: 28px;
    width: 70vw;
    padding: 0 5px;
    border: 1px solid #cccccc;
  }
</style>
