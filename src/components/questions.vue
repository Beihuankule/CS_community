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
                  <h6><a href="" class="name">{{ create_user }}</a> </h6>
                  <span class="issur-time">{{ create_date }}</span>
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
            <h1>{{ ContentTitle }}</h1>
          </div>
          <!--        标签-->
          <div class="tags">
            <el-tag type="info">{{ label }}</el-tag>
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
            <li class="answer_span ">
              <span @click="gotomd_answer" class="btn-bg"><i class="el-icon-edit"></i> 写回答</span>
            </li>
            <li class="thumbs_up" id="dianzan" @click="dianzan(qaid)" v-show="problemDzShow === 'wdz'"><span><i class="iconfont icon-dianzan"></i> 好问题 <em>{{old_fabulous_num}}</em></span></li>
            <li class="thumbs_up" id="qxdianzan" @click="rem_dianzan(qaid)" v-show="problemDzShow === 'dz'"><span><i class="iconfont icon-dianzan1"></i> 好问题 <em>{{ old_fabulous_num }}</em></span></li>
            <li @click="spotFocus(qaid)" v-show="follow === 'wgz' ">
              <span class="el-icon-star-off"><i></i>关注问题</span>
            </li>
            <li @click="cancelSpotFocus(qaid)" v-show="follow === 'gz' ">
              <span class="el-icon-star-on"><i></i>关注问题</span>
            </li>
            <li>
              <span><i class="el-icon-share"></i>分享</span>
            </li>
            <li v-show="delShow">
              <router-link  :to='/editquestions/+(qaid)' target=“_blank” class="edit">
                <span >编辑</span>
              </router-link>
            </li>
            <li class="del" v-show="delShow">
              <span @click="delQuestion">删除</span>
            </li>
          </ul>
        </div>
        <div class="Answer_" v-show="AnswerDataLength">
          <h4 class="Answer_title" >{{AnswerDataLength}} 条回答</h4>
          <div class="Answer_content">
            <div class="answer-list">
              <ul>
                <li v-for="(item,index) in AnswerData"  :key="index" class="m-top">
                  <div class="answer-wap">
                    <span>
                      <a href=""><img src="https://www.beihuankule.com/static/my/img/wanhua.png" alt="" class="avatar" ></a>
                    </span>
                    <div>
                      <div class="title">
                        <a href="" class="name">{{item.user_id}}</a>
                        <span class="time">{{ item.create_date }}</span>
                      </div>
                      <div>
                        <mavon-editor
                            class="md"
                            :value='item.content'
                            :subfield="false"
                            :defaultOpen="'preview'"
                            :toolbarsFlag="false"
                            :editable="false"
                            previewBackground="#ffffff"
                            :scrollStyle="true"
                            :ishljs="true"
                        />
                      </div>
                      <div class="m-btm">
                        <ul class="answer">
                          <li class="answer_span">
                            <span @click="isShow = item.id" ><i class="el-icon-edit"></i> 评论</span>
                          </li>
                          <li class="thumbs_up" @click="dianzan(item.id)" v-show="item.is_fabulous === 'wdz'"><span><i class="iconfont icon-dianzan"></i> 解决 <em>{{ item.fabulous_num }}</em></span></li>
                          <li class="thumbs_up" @click="rem_dianzan(item.id)" v-show="item.is_fabulous === 'dz'"><span><i class="iconfont icon-dianzan1"></i> 解决 <em>{{ item.fabulous_num }}</em></span></li>
                          <li>
                            <span><i class="el-icon-share"></i>分享</span>
                          </li>
                          <li class="del" v-show="item.user_id === Current_user">
                            <span @click="delComment(item.id)">删除</span>
                          </li>
                        </ul>
                      </div>
<!--                      评论列表-->
                      <div class="comment_pad" >
                        <div class="comment_padList" v-for="(key,index) in AnswerData[index].children"  :key="index" :class="{comment_list_Show:list_Show}" >
<!--                          回复信息-->
                          <div class="comment_list"  >
                            <span class="avatar-box">
                              <img class="avatar" src="https://www.beihuankule.com/static/my/img/wanhua.png" alt="">
                            </span>
                            <div>
                              <div class="title">
                                <a href="" class="name">{{ key.user_id }}</a>
                                <a href="" class="name" v-show="key.reply_user_id">@ {{key.reply_user_id}}</a>
                                <span class="time">{{ key.create_date }}</span>
                              </div>
                              <div>
                                <mavon-editor
                                    class="md"
                                    :value="key.content"
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
                                  <li @click="dianzan(key.id)" v-show="key.is_fabulous === 'wdz'">
                                    <span ><i class="iconfont icon-dianzan" ></i>赞 <em v-show="key.fabulous_num !== 0">{{key.fabulous_num}}</em></span>
                                  </li>
                                  <li @click="rem_dianzan(key.id)" v-show="key.is_fabulous === 'dz'">
                                    <span ><i class="iconfont icon-dianzan1" ></i>赞<em v-show="key.fabulous_num !== 0">{{key.fabulous_num}}</em></span>
                                  </li>
                                  <li>
                                    <span @click="reply_boxShow(key.id)">回复</span>
                                  </li>
                                  <li v-show="key.user_id === Current_user">
                                    <span @click="delReply(key.id)">删除</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
<!--                          点击回复-->
<!--                          <div class="reply_box" v-show="reply_box">-->
                            <div class="reply_box" :class="{'isShow':reply_id === key.id}">
                              <v-md-editor v-model="Reply_text" right-toolbar="null"  height="150px"></v-md-editor>
                              <div class="Submit" >
                                <span @click="replyPost(item.id)">回复</span>
                              </div>
                           </div>
                        </div>
                        <div class="btn-load-more-comment" v-show="AnswerData[index].children.length > 2">
                          <span @click="Get_comments" v-show="!list_Show">点击获取全部评论</span>
                        </div>
                      </div>
<!--                      评论-->
                      <div class="ask-comment-form">
                        <div class="Comment_box" :class="{'isShow':isShow === item.id}">
                          <v-md-editor v-model="Comment_text" right-toolbar="null"  height="200px"></v-md-editor>
                          <div class="Submit">
                            <span @click="postComment(item.id)">评论</span>
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
            <span @click="postAnswer">提交</span>
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
      isShow:'',
      //写回答的输入框内容
      text:'',
      qaid:'',
      //回复文本内容
      Reply_text:'',
      //评论文本内容
      Comment_text:'',
      Comment_box:0,
      AnswerData:[],
      AnswerDataLength:0,
      commentdata:[],
      replys:'',
      CommentBox:0,
      //问题标题
      ContentTitle:'',
      //问题内容
      webDataString: '',
      AnswerId:'',
      label:'',
      delShow:false,
      create_user:'',
      Current_user:'',
      reply_box:false,
      list_Show:false,
      reply_id:'',
      create_date:'',
      Answercontent:'',
      commentlist:'',
      problemDzShow:'',
      answer_dznum:'',
      old_fabulous_num:'',
      follow:'',
    }
  },
  created() {
    this.geturl();
    this.getQAContent();
    this.getQAAnswer();
    this.getQAComment();
  },
  beforeCreate() {
    //判断是否登陆
    this.$ajax.post('https://sx.water-mind.com/cs_s/login/getLoginInfo').then(res=>{
      this.Current_user = res.data.obj.account
    })
  },
  methods:{
    gotomd_answer(){
      var anchor = this.$el.querySelector('#md_answer')
      anchor.scrollIntoView({behavior: 'smooth'})
      this.$refs.searchForm.focus()
    },
    //获取当前问答id
    geturl(){
      let url = window.location.href;
        this.qaid = url.slice(url.indexOf('#')+12)
        console.log(this.qaid);
    },
    //获取问答内容
    getQAContent(){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLogin/getQaContentById',{id:this.qaid}).then(res=>{
        // console.log('好问题')
        // console.log(res.data.obj.qaContentObj)
        // console.log(res.data.obj.answerObj)
        this.follow = res.data.obj.qaContentObj.is_focus
        console.log(this.follow)
        if (res.data.obj.answerObj !== null){
          this.AnswerDataLength = res.data.obj.answerObj.length
          this.AnswerData = res.data.obj.answerObj
        }
        // console.log('解决')
        // console.log(res.data.obj.answerObj)
        let QAContentData = res.data.obj.qaContentObj
        this.problemDzShow = QAContentData.is_fabulous
        this.old_fabulous_num = QAContentData.fabulous_num
        // this.answer_dznum = res.data.obj.answerObj.fabulous_num
        this.ContentTitle = QAContentData.title
        this.webDataString = QAContentData.content
        this.create_user = QAContentData.create_user
        this.create_date = QAContentData.create_date
        this.label = QAContentData.label
        this.AnswerId = this.AnswerData.id
        // console.log('---------------')
        // console.log(this.create_user)
        // console.log(this.Current_user)
        if (this.create_user === this.Current_user){
          this.delShow = true
        }
      })
    },
    //获取问题回答
    getQAAnswer(){
      this.$ajax.post('https://sx.water-mind.com/cs_s/login/getLoginInfo').then(res=>{
        if (this.create_user === res.data.obj.account){
          this.delShow = true
        }
      })
    },
    //获取问答评论
    getQAComment(){
      // this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLogin/getQaContentById',{id:this.qaid}).then(res=>{
      //   // console.log(res)
      // })
    },
    //回答问题
    postAnswer(){
      if (this.text !== ''){
        this.$confirm('请认真对待每一次回答哦', '提示', {
          confirmButtonText: '确定提交',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/answerQuestion',{qa_content_id:this.qaid,content:this.text}).then(res=>{
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
            setTimeout(function (){
              location.reload();
            },1000)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消'
          });
        });
      }else{
        this.$message.error('请填写回答内容');
      }
    },
    //评论
    postComment(id){
      // console.log(id)

      if (this.Comment_text !== ''){
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/addComment',{answer_id:id,content:this.Comment_text}).then(res=>{
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
          setTimeout(function (){
            location.reload();
          },1000)
        })
      }else{
        this.$message.error('请输入评论内容');
      }
    },
    //删除回答
    delQuestion(){
      this.$confirm('是否确认删除此问题?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/delQuestion',{id:this.qaid}).then(res=>{
          console.log(res)
        })
        this.$message({
          type: 'success',
          message: '问题删除成功!'
        });
        setTimeout(function (){
          window.location.href = 'http://dev.water-mind.com:8080/#/QA'
        },1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        });
      });
    },
    delComment(id){
    console.log(id)
      this.$confirm('是否确认删除此回答?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/delAnswer',{id:id}).then(res=>{
          console.log(res)
        })
        this.$message({
          type: 'success',
          message: '回答删除成功!'
        });
        setTimeout(function (){
          location.reload();
        },1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        });
      });
    },
    delReply(id){
      console.log(id)
      this.$confirm('是否确认删除此评论?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/delComment',{id:id}).then(res=>{
          console.log(res)
        })
        this.$message({
          type: 'success',
          message: '评论删除成功!'
        });
        setTimeout(function (){
          location.reload();
        },1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        });
      });
    },
    //子回复
    reply_boxShow(id){
      this.reply_box = !this.reply_box
      console.log(id)
      this.reply_id = id
    },
    replyPost(id){
      if (this.Reply_text !== ''){
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/addComment',{sup_comment_id:this.reply_id,content:this.Reply_text,answer_id:id}).then(res=>{
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
          setTimeout(function (){
            location.reload();
          },1000)
        })
      }else{
        this.$message.error('请输入评论内容');
      }
    },
    Get_comments(){
      this.list_Show = true
    },
    dianzan(id){
      console.log(id)
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFabulous/spotFabulous',{fabulous_obj:id}).then(res=>{
        console.log(res)
        // this.new_fabulous_num = this.old_fabulous_num
        this.getQAContent();
      })
    },
    rem_dianzan(id){
      console.log(id)
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFabulous/cancelSpotFabulous',{fabulous_obj:id}).then(res=>{
        console.log(res)
        // window.location.reload("#dianzan");
        // this.old_fabulous_num = this.new_fabulous_num
        this.getQAContent();
      })
    },
    //关注此问题
    spotFocus(id){
      console.log(id)
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFocus/spotFocus',{focus_obj:id}).then(res=>{
        console.log(res)
        // this.new_fabulous_num = this.old_fabulous_num
        this.getQAContent();
      })
    },
    cancelSpotFocus(id){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFocus/cancelFocus',{focus_obj:id}).then(res=>{
        console.log(res)
        // this.new_fabulous_num = this.old_fabulous_num
        this.getQAContent();
      })
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
  /*background: #409EFF;*/
  border: 1px solid #409EFF;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  color: #409EFF;
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
.Comment_box{
  display: none;
}
.isShow{
  display: block !important;
}
.ask-comment-form {
  width: 100%;
}
.del > span{
  color: red;
}
.edit > span{
  color: #409EFF;
}
.reply_box {
  width: 100%;
  display: none;
  margin-bottom: 40px;
}
.comment_padList{
  display: none;
}
.comment_padList:nth-child(-n+2){
  /*background-color: red;*/
  display: block;
  display: flex;
  flex-wrap: wrap;
}
.comment_list_Show{
  display: block !important;
  display: flex !important;
  flex-wrap: wrap !important;
}
.btn-load-more-comment{
  height: 20px;
  margin: 0 0 24px;
  font-size: 14px;
  font-weight: 400;
  color: #777888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.m-top{
  margin-top: 20px;
  background-color: white;
}
.m-btm{
  margin-bottom: 20px;
}
.btn-bg{
  background-color: #409EFF;
  color: #fff !important;
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
  width: calc(100% - 34px);
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