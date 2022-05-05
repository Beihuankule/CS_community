<template>
  <div>
    <toolbar/>
    <el-row type="flex"  justify="space-around" class="questions">
      <el-col :span="16" class="left">
        <div>
          <!--        提问者信息-->
          <div class="ask-issue-userInfo">
          <span class="avatar-box">
            <img class="avatar" src="https://www.beihuankule.com/static/my/img/wanhua.png" alt="">
          </span>
            <div class="issue-title-wap">
              <div class="title-wap">
                <div class="wap-left">
                  <h6><a href="" class="name">洪双龙和红双龙</a> </h6>
                  <span class="issur-time">2022-04-25 15:52</span>
                  <div class="adoption-rate">采纳率:100%</div>
                </div>
                <div class="wap-right">
                  <span class="issur-time">浏览 20K</span>
                </div>
              </div>
            </div>
          </div>
          <!--        问题标题-->
          <div class="title-box">
            <h1>这个功能有点多</h1>
          </div>
          <!--        标签-->
          <div class="tags">
            <el-tag type="info">前端</el-tag>
            <el-tag type="info">其他</el-tag>
          </div>
          <!--        md预览组件-->
          <mavon-editor
              class="md"
              :value="webDataString"
              :subfield="false"
              :defaultOpen="'preview'"
              :toolbarsFlag="false"
              :editable="false"
              previewBackground="#ffffff"
              :scrollStyle="true"
              :ishljs="true"
          />
          <!--        写回答-->
          <ul class="answer">
            <li class="answer_span">
              <span @click="gotomd_answer"><i class="el-icon-edit"></i> 写回答</span>
            </li>
            <li class="thumbs_up"><span><i class="iconfont icon-dianzan"></i> 好问题 <em>20</em></span></li>
            <li>
              <span class="el-icon-star-off"><i></i>关注问题</span>
            </li>
            <li>
              <span><i class="el-icon-share"></i>分享</span>
            </li>
          </ul>
        </div>
        <div class="Answer_">
          <h4 class="Answer_title">2条回答</h4>
          <div class="Answer_content">
            <div class="answer-list">
              <ul>
                <li>
                  <div class="answer-wap">
                    <span>
                      <a href=""><img src="https://www.beihuankule.com/static/my/img/wanhua.png" alt="" class="avatar" ></a>
                    </span>
                    <div>
                      <div class="title">
                        <a href="" class="name">双龙</a>
                        <span class="time">2022-04-25 19:31</span>
                      </div>
                      <div>
                        <mavon-editor
                            class="md"
                            :value="Answercontent"
                            :subfield="false"
                            :defaultOpen="'preview'"
                            :toolbarsFlag="false"
                            :editable="false"
                            previewBackground="#ffffff"
                            :scrollStyle="true"
                            :ishljs="true"
                        />
                      </div>
                      <div>
                        <ul class="answer">
                          <li class="answer_span">
                            <span @click="CommentBox = !CommentBox"><i class="el-icon-edit"></i> 评论</span>
                          </li>
                          <li class="thumbs_up"><span><i class="iconfont icon-dianzan"></i> 有用 <em>10</em></span></li>
                          <li>
                            <span><i class="el-icon-share"></i>分享</span>
                          </li>
                        </ul>
                      </div>
<!--                      评论列表-->
                      <div class="comment_pad">
                        <div>
<!--                          回复信息-->
                          <div class="comment_list">
                            <span class="avatar-box">
                              <img class="avatar" src="https://www.beihuankule.com/static/my/img/wanhua.png" alt="">
                            </span>
                            <div>
                              <div class="title">
                                <a href="" class="name">双龙</a>
                                <span class="time">2022-04-25 19:31</span>
                              </div>
                              <div>
                                <mavon-editor
                                    class="md"
                                    :value="commentlist"
                                    :subfield="false"
                                    :defaultOpen="'preview'"
                                    :toolbarsFlag="false"
                                    :editable="false"
                                    previewBackground="#ffffff"
                                    :scrollStyle="true"
                                    :ishljs="true"
                                />
                              </div>
                              <div>
                                <ul class="answer">
                                  <li>
<!--                                    后期引入其他字体图标库进行更换-->
                                    <span><i class="iconfont icon-dianzan"></i>赞</span>
                                  </li>
                                  <li>
                                    <span @click="Comment_box = !Comment_box ">回复</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
<!--                          点击回复-->
                          <div class="Comment_box" v-show="Comment_box">
                            <v-md-editor v-model="Reply_text" right-toolbar="null"  height="150px"></v-md-editor>
                            <div class="Submit">
                              <span>回复</span>
                            </div>
                          </div>
                        </div>
                      </div>
<!--                      评论-->
                      <div class="ask-comment-form">
                        <div class="Comment_box" v-show="CommentBox">
                          <v-md-editor v-model="Comment_text" right-toolbar="null"  height="200px"></v-md-editor>
                          <div class="Submit">
                            <span>评论</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
<!--        写回答-->
        <div class="md_answer" id="md_answer">
          <v-md-editor ref="searchForm" v-model="text"  height="200px"></v-md-editor>
          <div class="Submit">
            <span>提交</span>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="User_information">
            <div class="user_header">
              <span class="addTitle">我的问答</span>
              <span class="addQuestion">
                <router-link  to="/newquestions" target=“_blank”><i class="el-icon-plus"></i>提问题</router-link>
                <router-view/>
              </span>
            </div>
            <div class="profile_wrap">
              <ul>
                <li>
                  <span>收益</span>
                  <em>0.00</em>
                </li>
                <li>
                  <span>被采纳</span>
                  <em>0</em>
                </li>
                <li>
                  <span>提问</span>
                  <em>0</em>
                </li>
                <li>
                  <span>被点赞</span>
                  <em>0</em>
                </li>
                <li>
                  <span>回答</span>
                  <em>0</em>
                </li>
                <li>
                  <span>被评论</span>
                  <em>0</em>
                </li>
              </ul>
            </div>
            <div class="help_wrap">
              <a href=""><i class="el-icon-bell"></i> 公告公告公告公告公告1</a>
              <a href=""><i class="el-icon-bell"></i> 公告2</a>
              <a href=""><i class="el-icon-bell"></i> 公告3</a>
              <a href=""><i class="el-icon-bell"></i> 公告4</a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import toolbar from './toolbar.vue'
export default {
  name: "questions",
  components: {
    toolbar,
  },
  data() {
    return {
      //写回答的输入框内容
      text:'',
      //回复文本内容
      Reply_text:'',
      //评论文本内容
      Comment_text:'',
      Comment_box:0,
      CommentBox:0,
      webDataString: '如果要在JavaScript代码中，使用fs 模块来操作文件，则需要使用如下的方式先导入它：\n' +
          '\n' +
          '```js\n' +
          'const fs = require(\'fs\');\n' +
          '```',
      Answercontent:'这是一个回答的MD展示区域，我的VUE代码如下：\n' +
          '\n' +
          '```js\n' +
          'components: {\n' +
          '    toolbar,\n' +
          '  },' +
          '',
      commentlist:"这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论",
    }
  },
  methods:{
    gotomd_answer(){
      var anchor = this.$el.querySelector('#md_answer')
      anchor.scrollIntoView({behavior: 'smooth'})
      this.$refs.searchForm.focus()
    }
  }
}
</script>

<style scoped>
.answer-list > ul{
  list-style-type: none;
}
.answer-list > ul > li{
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 10px;
}
.answer-list > ul > li:last-child{
  border-bottom:none;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
}
.left > div{
  background-color: white;
  padding:24px 24px 0 24px;
}
.questions{
  padding: 0 5%;
  background: #f5f7f8;
  min-height: calc(100vh - 48px);
}
.questions > div{
  margin-top: 10px;
  background-color: #f5f7f8;
  margin-bottom: 10px;
}
.left{
  margin-bottom: 10px;
}
.right{
  padding: 0 20px 12px;
}
.md{
  box-shadow:none !important;
}
.ask-issue-userInfo{
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  padding: 0 25px;
}
.issue-title-wap{
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  line-height: 32px;
  height: 32px;
}
.avatar{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 16px;
}
.title-wap{
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 32px;
  line-height: 32px;
}
.wap-left{
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: center;
}
.wap-right{
  text-align: end;
  width: 120px;
}
.name{
  display: inline-block;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #222226;
  font-weight: 400;
  max-width: 154px;
  max-height: 32px;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wap-left > h6 ,.wap-left > span{
  margin-right: 15px;
}
.issur-time{
  color: #999aaa;
  font-size: 14px;
}
.adoption-rate{
  color: #999aaa;
  font-size: 14px;
}
.title-box{
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 0 25px;
}
.title-box >h1{
  font-size: 22px;
  font-weight: 600;
  color: #222226;
  line-height: 40px;
  margin: 0;
}
.tags{
  padding: 0 25px;
}
.el-tag{
  margin-right: 10px;
}
.v-note-wrapper{
  min-height: 0;
  z-index: 9;
}
.answer{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  list-style-type: none;
  padding: 0 25px;
  padding-bottom: 10px;
}
.answer > li{
  user-select: none;
  margin-right: 16px;
  font-size: 14px;
  color: #777888;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}
.answer_span > span{
  width: 94px;
  height: 32px;
  background: #409EFF;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  color: #fff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.thumbs_up >span{
  border: 1px solid #e8e8ed;
  text-align: center;
  border-radius: 16px;
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 30px;
  padding: 0 14px;
  font-size: 14px;
  font-weight: 400;
  color: #777888;
}
.md_answer{
  padding: 0 20px;
  padding-bottom: 50px !important;
}
.v-md-editor{
  box-shadow:0 1px 1px 0 rgb(0 0 0 / 10%) !important;
}
.Submit > span{
  height: 32px;
  display: block;
  background: #409EFF;
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  line-height: 32px;
  padding: 0 18px;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  margin: 8px;
}
.Answer_title{
  font-size: 16px;
  font-weight: 500;
  color: #222226;
  line-height: 48px;
  height: 48px;
  background: #fff;
  margin: 0;
  padding: 0 25px;
}
.Answer_content{
  border-top: 1px solid #f0f0f2;
  padding: 0 25px;
}
.Answer_{
  margin-bottom: 15px;
}
.avatar{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,.1);
}
.answer-wap{
  display: flex;
}
.comment_list{
  display: flex;
}
.comment_pad{
  padding: 0 25px;
}

</style>

<style>
ul{
  padding: 0;
}
a{
  text-decoration: none;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #fff;
  padding: 16px 24px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.qa_left{
  padding: 4px 0;
  height: auto;
  flex-shrink: 0;
  margin-right: 10px;
  background: #fff;
}
.qa_left >ul{
  padding: 4px 0;
  list-style: none;
}
.qa_left >ul >li{
  padding-left: 32px;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
  position: relative;
  list-style: none;
}
.qa_left > ul >li:hover{
  background: #f5f6f7;
  font-size: 14px;
  font-weight: 600;
  color: #222226;
  line-height: 32px;
}
.QA.el-row.is-justify-space-around.el-row--flex {
  background: #f5f7f8;
  min-height: calc(100vh - 48px);
  padding: 0 5%;
}
.QA > div{
  margin-top: 10px;
}
.card{
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  box-shadow: 0 -1px 0 0 #f5f6f7;
  padding-top: 10px;
}
.card >ul{
  min-width: 52px;
  -webkit-box-flex: 0;
  flex-grow: 0;
  margin-right: 0;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  list-style: none;
  align-items: center;
}
.card >ul >li{
  width: 48px;
  text-align: center;
}
.card >ul >li >div{
  height: 28px;
  font-size: 18px;
  font-weight: 400;
  color: #555666;
  line-height: 28px;
}
.card >ul >li >p{
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #555666;
  line-height: 20px;
}
.card_right{
  position: relative;
  width: calc(100% - 52px);
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.card_right_title{
  padding: 0 24px 0 16px;
  max-height: 50px;
  line-height: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.card_right_title > a > h2{
  font-weight: 700;
  font-size: 18px;
  color: #222226;
  margin: 0;
  word-break: break-all;
  cursor: pointer;
  display: inline;
}
.card_right_desc{
  margin-top: 2px;
  padding: 0 24px 0 16px;
  width: 100%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #555666;
  -webkit-box-direction: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 0;
}
.card_right_header{
  font-size: 14px;
  color: #999aaa;
  padding: 0 24px 0 16px;
  font-weight: 400;
}
.card_right_header >ul{
  margin-bottom: 8px;
  float: left;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  color: #555666;
  font-weight: 400;
  cursor: pointer;
  list-style: none;
}
.card_right_header >ul >li{
  margin-right: 10px;
}
.card_right_header >ul >li >i{
  margin-right: 3px;
}
.card_right_header >div{
  margin-top: 14px;
  margin-bottom: 8px;
  float: right;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.card_right_header_label{
  flex-shrink: 0;
  height: 20px;
  line-height: 19px;
  background: #ebf2f7;
  margin-right: 8px;
  border-radius: 2px;
}
.card_right_header_label >a{
  padding: 0 8px;
  font-size: 12px;
  color: #507999;
  font-weight: 400;
}
.card_right_header_user > a{
  flex-shrink: 0;
  font-size: 12px;
  color: #999aaa;
  line-height: 20px;
  margin-right: 8px;
  margin-left: 6px;
}
.User_information{
  background: #fff;
}
.user_header{
  line-height: 48px;
  z-index: 999999;
  height: 48px;
  background: #fff;
  border-bottom: 1px solid #f0f0f2;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 20px;
}
.profile_wrap{
  background: #fff;
  display: block;
  border-bottom: 1px solid #f0f0f2;
  padding: 16px 20px 0;
}
.help_wrap{
  padding: 14px 20px;
  color: #507999;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.addTitle{
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  color: #222226;
  line-height: 48px;
}
.addQuestion{
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  width: 94px;
  height: 30px;
  background: #409EFF;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 30px;
}
.addQuestion >a{
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 30px;
}
.profile_wrap >ul{
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  align-items: flex-start;
}
.profile_wrap >ul >li{
  margin-right: 14px;
  margin-bottom: 16px;
  width: calc(50% - 14px);
  height: 22px;
  font-size: 14px;
  font-weight: 400;
  color: #222226;
  line-height: 22px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.profile_wrap >ul >li>em{
  padding: 0 4px;
  background-color: #f5f6f7;
  font-size: 15px;
  color: #777888;
}
.profile_wrap >ul >li>span{
  font-size: 14px;
  font-weight: 400;
  color: #222226;
  line-height: 22px;
}
.help_wrap >a{
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #507999;
  line-height: 20px;
  margin: 5px 30px 5px 0;
}
.title{
  padding: 0 25px;
}
.title > a{
  margin-right: 15px;
}
.answer-wap > div{
  margin-top: 5px;
}
.answer-wap > span > a >.avatar,.comment_list > .avatar-box > .avatar{
  margin-right: 0;
}
.time{
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: #999aaa;
  margin-left: 8px;
  vertical-align: middle;
  position: relative;
}
</style>