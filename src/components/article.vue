<template>
<div id="article">
  <toolbar/>
  <div class="article_bg">
    <div class="left">
<!--      博主详情-->
      <div class="Blogger_information">
<!--        头像/姓名-->
        <div class="profile-intro">
<!--          头像-->
          <div class="avatar_box">
            <a href="">
              <img src="https://img1.baidu.com/it/u=1130857357,2165508481&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400" alt="">
            </a>
          </div>
<!--          姓名-->
          <div class="user_info">
            <div class="user_info_name">
              <router-link :to='/PersonalBlog/+(data.create_user)' target="_blank"><span class="user_name">{{ data.create_user }}</span></router-link>
            </div>
            <div class="user_info-name">
              <div class="user_info_age" title="已加入 创世社区 111天">加入111天</div>
              <div class="user_info_renzheng"><i class="iconfont icon-renzheng" style="color: #409EFF"></i> 优秀创作者 </div>
            </div>
          </div>
        </div>
<!--        站内资料-->
        <div class="data-info">
          <dl class="text-center">
            <a href="">
              <dt><span class="count">0</span></dt>
              <dd class="font">原创</dd>
            </a>
          </dl>
          <dl class="text-center">
            <a href="">
              <dt><span class="count">1</span></dt>
              <dd class="font">周排名</dd>
            </a>
          </dl>
          <dl class="text-center">
            <a href="">
              <dt><span class="count">1</span></dt>
              <dd class="font">总排名</dd>
            </a>
          </dl>
          <dl class="text-center">
            <a href="">
              <dt><span class="count">21万+</span></dt>
              <dd >访问</dd>
            </a>
          </dl>
          <dl class="text-center">
            <a href="">
              <dt><span class="count iconfont icon-icon-test20"></span></dt>
              <dd >等级</dd>
            </a>
          </dl>
        </div>
<!--        个人情况-->
        <div class="data-info">
          <dl class="text-center">
              <dt><span class="count">6888</span></dt>
              <dd >积分</dd>
          </dl>
          <dl class="text-center">
              <dt><span class="count">20万+</span></dt>
              <dd >粉丝</dd>
          </dl>
          <dl class="text-center">
              <dt><span class="count">2000</span></dt>
              <dd >获赞</dd>
          </dl>
          <dl class="text-center">
              <dt><span class="count">2000</span></dt>
              <dd >评论</dd>
          </dl>
          <dl class="text-center">
              <dt><span class="count">3969</span></dt>
              <dd >收藏</dd>
          </dl>
        </div>
<!--        荣誉勋章-->
        <div class="data_icon">
          <div class="icons">
            <i class="iconfont icon-caise-datubiao"></i>
            <i class="iconfont icon-a-awardsjiangbeichengjiushengliwancheng"></i>
            <i class="iconfont icon-a-chengjichengjiuzilijiangbeishu"></i>
            <i class="iconfont icon-a-jiangbeiyingjiashenglizhechengjiu"></i>
            <i class="iconfont icon-a-wenpingzhengshuzhengmingchengjiu"></i>
          </div>
        </div>
<!--        私信/关注-->
        <div class="profile-intro-name-boxOpration">
          <div class="opt-letter-watch-box">
            <a href="">私信</a>
          </div>
          <div class="opt-letter-watch-box">
            <a href="">关注</a>
          </div>
        </div>
      </div>
    </div>
    <main class="right">
      <div class="blog-content-box">
<!--        文章头部信息-->
        <div class="article-header">
<!--          标题-->
          <div class="article-title-box">
            <h1>{{data.title}} </h1>
          </div>
<!--          版权信息-->
          <div class="article-info-box">
            <div class="article-bar-top">
              <el-tag
                  class="m-right"
                  type="danger"
                  effect="dark">
                {{ data.article_type }}
              </el-tag>
              <div class="Article_Information">
<!--                作者姓名-->
                <a href="">{{ data.create_user }}</a>
<!--                更新时间-->
                <span><i class="el-icon-time"></i> 于 {{ data.create_date }} 发布</span>
                <span><i class="el-icon-view"></i> {{ data.browse_num }}</span>
                <span @click="focus(articleId)" class="el-icon-star-off" v-show="data.is_focus === 'wgz' ">收藏</span>
                <span @click="cancelSpotFocus(articleId)"  class="el-icon-star-on" v-show="data.is_focus === 'gz' ">收藏</span>
              </div>
            </div>
            <div class="blog-tags-box">
              <div class="tags-box">
                <span>文章标签:</span>
                <a href="">{{ data.label }}</a>
              </div>
              <div v-show="delShow">
                <router-link  :to='/editArticle/+(articleId)' target=“_blank” class="edit">
                  <span >编辑</span>
                </router-link>
                <span @click="delArticle" class="del">删除</span>
              </div>
            </div>
          </div>
        </div>
<!--        文章内容-->
        <article class="ArticleContent">
          <mavon-editor
              class="md"
              :value="data.content"
              :subfield="false"
              :defaultOpen="'preview'"
              :toolbarsFlag="false"
              :editable="false"
              previewBackground="#ffffff"
              :scrollStyle="true"
              :ishljs="true"
          />
        </article>
<!--        底部关注与其他-->
        <div class="more-toolbox">
          <div class="left-toolbox">
<!--            头像/姓名/关注-->
            <div class="toolbox-left">
              <div class="profile-box">
                <a href="" class="profile-href">
                  <img class="profile-img" src="https://www.beihuankule.com/media/avatars/7.png" alt="">
                  <span class="profile-name">{{ data.create_user }}</span>
                </a>
              </div>
              <div class="profile-attend">
                <a href="" class="tool-attend">关注</a>
              </div>
            </div>
<!--            点赞/评论/收藏-->
            <div class="toolbox-middle">
              <ul class="toolbox-list">
                <li @click="dianzan(articleId)" v-show="data.is_fabulous === 'wdz'">
                  <span><i class="iconfont icon-dianzan" ></i>点赞({{fabulousNum}})</span>
                </li>
                <li @click="rem_dianzan(articleId)" v-show="data.is_fabulous === 'dz'">
                  <span><i class="iconfont icon-dianzan1" ></i>点赞({{ fabulousNum }})</span>
                </li>
                <li>
                  <span><i class="el-icon-chat-dot-square"></i>评论({{ comments }})</span>
                </li>
                <li>
                  <span @click="focus(articleId)" class="el-icon-star-off" v-show="data.is_focus === 'wgz' ">收藏</span>
                  <span @click="cancelSpotFocus(articleId)"  class="el-icon-star-on" v-show="data.is_focus === 'gz' ">收藏</span>
                </li>
                <li>
                  <span><i class="iconfont icon-redenvelope"></i>打赏</span>
                </li>
                <li>
                  <span><i class="iconfont icon-link"></i>分享</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--      评论-->
      <div class="blog-content-box">
        <div class="comment-title">
          <span>评论 {{ comments }}</span>
        </div>
<!--        评论框-->
        <div class="comment-edit-box">
<!--          登陆人头像-->
          <div class="user-img">
            <a href=""><img src="https://www.beihuankule.com/media/avatars/8.png" alt=""></a>
          </div>
<!--          输入框-->
          <div class="comment">
            <el-input placeholder="请发表有价值的评论， 博客评论不欢迎灌水，良好的社区氛围需大家一起维护。" v-model="comment">
              <el-button slot="append" @click="releaseComment">评论</el-button>
            </el-input>
          </div>
        </div>
<!--        评论列表-->
        <div class="comment-list-container" >
          <div class="comment-list-box">
            <ul class="comment-list" v-for="(item,index) in commentObj" :key="index">
<!--              主评论-->
              <li class="comment-line-box">
                <div class="comment-list-item">
<!--                  评论人头像-->
                  <a href="" class="comment-list-href"><img src="https://www.beihuankule.com/media/avatars/7.png" alt="" class="avatar"></a>
<!--                  评论内容-->
                  <div class="comment-list-right">
                    <div class="comment-top">
                      <div class="user-box">
                        <a href=""><span class="user_name">{{ item.user_id }}</span></a>
                        <span>{{ item.create_date }}</span>
                      </div>
                      <div class="comment-like">
                        <span @click="delComment(item.id)" class="del" v-show="item.user_id === Current_user">删除</span>
                        <span @click="commentArticle(item.id)"><i class="el-icon-chat-line-square"></i> 回复 </span>
                        <span v-show="item.is_fabulous === 'wdz' " @click="dianzan(item.id)"><i class="iconfont icon-dianzan" ></i> 点赞 </span>
                        <span v-show="item.is_fabulous === 'dz' " @click="rem_dianzan(item.id)"><i class="iconfont icon-dianzan1" ></i> 点赞 </span>
                      </div>
                    </div>
                    <div class="comment-center">
                      <div class="new-comment">{{ item.content }}</div>
                    </div>
                    <div class="reply_input"  :class="{'isShow':isShow === item.id}">
                      <el-input :placeholder="('回复@' + item.create_user)" v-model="replyText">
                        <el-button slot="append" @click="reply">回复</el-button>
                      </el-input>
                    </div>
                  </div>
                </div>
              </li>
<!--              子评论-->
              <li class="replay-box">
                <ul >
                  <li class="comment-line-box" v-for="(key,index) in commentObj[index].children"  :key="index">
                    <div class="comment-list-item">
                      <!--                  评论人头像-->
                      <a href="" class="comment-list-href"><img src="https://www.beihuankule.com/media/avatars/7.png" alt="" class="avatar"></a>
                      <!--                  评论内容-->
                      <div class="comment-list-right">
                        <div class="comment-top">
                          <div class="user-box">
                            <a href=""><span class="user_name">{{ key.user_id }}</span></a><a href=""><span class="user_name">@ {{ key.reply_user_id }}</span></a>
                            <span>{{ key.create_date }}</span>
                          </div>
                          <div class="comment-like">
                            <span @click="delComment(key.id)" class="del" v-show="item.user_id === Current_user">删除</span>
                            <span @click="isShow = key.id"><i class="el-icon-chat-line-square"></i> 回复 </span>
                            <span v-show="key.is_fabulous === 'wdz' " @click="dianzan(key.id)"><i class="iconfont icon-dianzan"></i> 点赞 </span>
                            <span v-show="key.is_fabulous === 'dz' " @click="rem_dianzan(key.id)"><i class="iconfont icon-dianzan1"></i> 点赞 </span>
                          </div>
                        </div>
                        <div class="comment-center">
                          <div class="new-comment">{{key.content}}</div>
                        </div>
                        <div class="reply_input"  :class="{'isShow':isShow === key.id}">
                          <el-input :placeholder="('回复@' + key.user_id)" v-model="replyText">
                            <el-button slot="append" @click="reply">回复</el-button>
                          </el-input>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>

<script>
import toolbar from "./toolbar";
export default {
  name: "Article",
  data(){
    return{
      data:'',
      Publishing_user:'',
      delShow:false,
      commentObj:'',
      comments:0,
      isShow:'',
      replyText:'',
      reply_input:false,
      fabulousNum:0,
      comment:'',
      Current_user:'',
      articleId:'',
    }
  },
  components: {
    toolbar
  },
  beforeCreate() {
    //判断是否登陆
    this.$ajax.post('https://sx.water-mind.com/cs_s/login/getLoginInfo').then(res=>{
      this.Current_user = res.data.obj.account
    })
  },
  created() {
    this.geturl();
    this.getArticle();
    this.getBlogArticleBrowse();
  },
  methods:{
    //获取当前博客文章id
    geturl(){
      let url = window.location.href;
      this.articleId = url.slice(url.indexOf('#')+10)
      console.log('文章ID：')
      console.log(this.articleId);
    },
    getArticle(){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLoginBlog/getBlogArticleById',{id:this.articleId}).then(res=>{
        console.log('文章详情：')
        this.data = res.data.obj.blogArticleObj
        console.log(res.data.obj.blogArticleObj)
        this.fabulousNum = this.data.fabulous_num
        console.log('评论详情')
        console.log(res.data.obj.commentObj)
        this.commentObj = res.data.obj.commentObj
        if (this.commentObj !== null){
          this.comments = this.commentObj.length
        }
        this.Publishing_user = this.data.create_user
        if (this.Publishing_user === this.Current_user){
          this.delShow = true
        }
      })
    },
    //评论
    releaseComment(){
      console.log(this.comment)
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBlog/addComment',{article_id:this.articleId,content:this.comment}).then(res=>{
        console.log(res)
        this.$message.success('评论成功');
        this.comment = ''
        this.getArticle();
      })
    },
    //回复输入框
    commentArticle(id){
      this.isShow = id
      console.log(id)
    },
    reply(){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBlog/addComment',{article_id:this.articleId,content:this.replyText,sup_comment_id:this.isShow}).then(res=>{
        console.log(res)
        this.$message.success('回复成功');
        this.replyText = ''
        this.isShow = ''
        this.getArticle();
      })
    },
    delArticle(){
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBlog/delBlogArticle',{id:this.articleId}).then(res=>{
          console.log(res)
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        setTimeout(function (){
          window.location.href = 'http://dev.water-mind.com:8080/#/blog'
        },1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    delComment(id){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBlog/delComment',{id:id}).then(res=>{
        console.log(res)
        this.$message.error('删除成功');
        this.getArticle();
      })
    },
    //点赞
    dianzan(id){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFabulous/spotFabulous',{fabulous_obj:id}).then(res=>{
        console.log(res)
        this.$message.success('点赞成功');
        this.getArticle();
      })
    },
    rem_dianzan(id){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFabulous/cancelSpotFabulous',{fabulous_obj:id}).then(res=>{
        console.log(res)
        this.getArticle();
      })
    },
    focus(id){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFocus/spotFocus',{focus_obj:id}).then(res=>{
        console.log(res)
        this.$message.success('收藏成功');
        this.getArticle();
      })
    },
    cancelSpotFocus(id){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFocus/cancelFocus',{focus_obj:id}).then(res=>{
        console.log(res)
        this.getArticle();
      })
    },
    getBlogArticleBrowse(){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLoginBlog/getBlogArticleBrowse',{id:this.articleId}).then(res=>{
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>
h1,h2,h3,h4,h5,h6{
  margin: 0;
}
dd{
  color: #999aaa;
  font-size: 14px;
  line-height: 22px;
  padding: 3px 0;
  margin: 0;
}
dl{
  margin: 0;
}
.article_bg{
  background-color: #f5f7f8;
  width: 100%;
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center ;
  padding: 8px 0 0 0;
}
.left{
  width: 300px;
  margin-right: 10px;
}
.right{
  width: 1010px;
}
.Blogger_information{
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 2px;
  padding-bottom: 10px;
}
.profile-intro{
  padding: 16px 16px 6px 16px;;
  display: flex;
  align-items: center;
}
.avatar_box{
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin-right: 10px;
}
.avatar_box > a >img{
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.user_info-name{
  display: flex;
}
.user_info_age{
  min-width: 62px;
  color: #999aaa;
  font-size: 13px;
  line-height: 20px;
  height: 20px;
  overflow: hidden;
}
.user_info_renzheng{
  font-size: 13px;
  line-height: 20px;
  height: 20px;
  overflow: hidden;
  color: #555666;
  cursor: pointer;
}
.user_info_name{
  display: flex;
}
.user_info_name > a{
  white-space: inherit;
  margin-right: 6px;
  overflow: hidden;
  color: #555666;
  cursor: pointer;
}
.name{
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.data-info{
  padding: 9px 10px;
  display: flex;
}
.text-center{
  text-align: center;
  width: 100%;
}
.count{
  color: #4a4d52;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.font{
  font-size: 14px;
  line-height: 22px;
  padding: 3px 0;
  color: #222226;
}
.text-center > a >dt > .iconfont{
  font-size: 20px;
  color: #409EFF;
}
.icons{
  display: flex;
  justify-content: space-around;
}
.data_icon{
  padding: 0 16px;
}
.icons > i{
  font-size: 26px;
}
.profile-intro-name-boxOpration{
  padding: 8px 16px 10px 16px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.opt-letter-watch-box{
  font-size: 12px;
  width: 126px;
  height: 28px;
  border-radius: 14px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #ccccd8;
  background-color: #fff;
}
.opt-letter-watch-box > a{
  color: #555666;
  line-height: 28px;
  border-radius: 14px;
  box-sizing: border-box;
  height: 100%;
  font-size: 14px;
}
.blog-content-box{
  position: relative;
  padding: 0 24px 16px;
  background: #fff;
  border-radius: 2px;
  padding-top: 8px;
  margin-bottom: 10px;
}
.article-title-box{
  margin-bottom: 8px;
}
.article-title-box > h1{
  font-size: 28px;
  word-wrap: break-word;
  color: #222226;
  font-weight: 600;
  margin: 0;
  word-break: break-all;
}
.article-bar-top {
  display: flex;
  align-items: center;
}
.article-bar-top > i{
  margin-right: 10px;
}
.Article_Information > a,.Article_Information > span{
  color: #999aaa;
  font-size: 14px;
  margin-right: 10px;
}
.article-info-box{
  position: relative;
  background: #f8f8f8;
  border-radius: 4px;
}
.Article_Information > a{
  color: #555666;
}
.blog-tags-box{
  padding-left: 62px;
  display: flex;
  justify-content: space-between;
}
.tags-box{
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 4px;
  margin-right: 8px;
}
.tags-box > span{
  display: inline-block;
  color: #999aaa;
}
.tags-box > a{
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 8px;
  padding: 3px 6px;
  font-size: 12px;
  background-color: #fff;
  color: #5094d5;
  border: 1px solid #eaeaef;
  height: 24px;
  line-height: 17px;
  border-radius: 2px;
  display: inline-block;
}
.ArticleContent{
  padding-top: 5px;
}
.v-note-wrapper.markdown-body.md.shadow{
  box-shadow:none !important;
}
.more-toolbox{
  display: flex;
  position: relative;
  margin-bottom: 8px;
}
.left-toolbox{
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 17px 24px;
  height: 64px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 -1px 8px 0 rgb(0 0 0 / 6%);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.toolbox-left{
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.profile-href{
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  display: flex;
}
.profile-img{
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1px solid #f5f5f5;
  margin-right: 8px;
}
.profile-name{
  max-width: 160px;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  color: #222226;
  line-height: 24px;
  margin-right: 8px;
}
.tool-attend{
  border: 1px solid #ccccd8;
  color: #555666;
  display: block;
  min-width: 60px;
  height: 28px;
  background: #fff;
  border-radius: 16px;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
}
.toolbox-list{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.toolbox-list >li{
  padding: 0 8px;
}
.toolbox-list >li >span{
  color: #999aaa;
  font-size: 14px;
}
.toolbox-middle{
  width: 100%;
}
.comment-title{
  font-size: 18px;
  font-weight: 600;
  color: #222226;
  line-height: 32px;
  margin-bottom: 8px;
}
.comment-edit-box{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(111,111,111,0.2);
}
.user-img >a >img{
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e8e8ed;
}
.comment{
  margin-left: 10px;
  width: 100%;
  position: relative;
}
.comment-line-box{
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  min-height: 60px;
  margin-top: 12px;
}
.isShow{
  display: block !important;
}
.comment-list-item{
  display: flex;
  width: 100%;
}
.avatar{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e8e8ed;
}
.comment-list-right {
  width: 100%;
}
.comment-top {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.comment-list-href{
  padding-right: 10px;
}
.comment-like >span{
  margin-right: 10px;
  color: #999aaa;
  vertical-align: middle;
  font-size: 14px;
}
.user-box > a{
  margin-right: 10px;
}
.user_name{
  display: inline-block;
  max-width: 300px;
  color: #777888;
  margin-right: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.user-box >span{
  font-size: 14px;
  color: #777888;
}
.new-comment{
  font-size: 14px;
  color: #222222;
  line-height: 22px;
  word-break: break-word;
}
.reply_input{
  margin-top: 10px;
  display: none;
}
.replay-box{
  padding-left: 32px;
}
.comment-list{
  border-bottom: 1px solid rgba(111,111,111,0.1);
  padding-bottom: 10px;
}
.comment-list:last-child{
  border-bottom:none;
}
.m-right{
  margin-right: 14px;
}
.edit{
  user-select: none;
  margin-right: 16px;
  font-size: 14px;
  color: #777888;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.edit > span{
  color: #409EFF;
}
.del{
  user-select: none;
  margin-right: 16px;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color:red;
}
</style>