<template>
<div id="PersonalBlog">
  <toolbar/>
  <div class="PersonalBlog_bg">
  <!--    头部区域-->
    <div class="user-profile-head">
      <div class="user-profile-head-banner"></div>
      <div class="user-profile-head-info">
        <div class="user-profile-head-info-t">
          <div class="user-profile-head-info-l">
            <div class="user-profile-head-info-ll">
              <div class="user-profile-avatar">
                <img src="https://www.beihuankule.com/media/avatars/4.png" alt="">
              </div>
            </div>
            <div class="user-profile-head-info-rr">
              <div class="user-profile-head-info-r-t">
                <div class="user-profile-head-name">
                  <div>{{ user_id }}</div>
                  <i class="user_lv iconfont icon-icon-test3"></i>
                </div>
              </div>
              <div class="user-profile-head-info-r-c">
                <ul>
                  <li>
                    <div class="user-profile-statistics-num">2,000万</div>
                    <div class="user-profile-statistics-name">被访问</div>
                    <div class="user-profile-statistics-bar"></div>
                  </li>
                  <li>
                    <div class="user-profile-statistics-num">1</div>
                    <div class="user-profile-statistics-name">原创</div>
                    <div class="user-profile-statistics-bar"></div>
                  </li>
                  <li>
                    <div class="user-profile-statistics-num">1</div>
                    <div class="user-profile-statistics-name">排名</div>
                    <div class="user-profile-statistics-bar"></div>
                  </li>
                  <li>
                    <div class="user-profile-statistics-num">101.1万</div>
                    <div class="user-profile-statistics-name">粉丝</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="user-profile-head-info-r">
            <div class="user-profile-operate-btn">
              <a href="" class="user-profile-black-btn">编辑资料</a>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    内容区域-->
    <div class="user_main">
      <div class="user_main_left">
        <div class="user_main_left_grade">
          <div class="grade_top">
            <span class="influence-left">创世等级：0</span>
            <span class="influence-right"><a href="">领奖</a><i class="el-icon-arrow-right"></i></span>
          </div>
          <div class="grade_bottom">
            <div>
              <span>总分</span><span>0</span>
              <a href=""><span>当月</span><span>0</span></a>
            </div>
          </div>
        </div>
        <div class="user_main_left_achievement">
          <div class="aside-common-box-head">个人成就</div>
          <div class="aside-common-box-bottom">
            <div class="aside-common-box-content">
              <ul class="aside-common-box-achievement">
                <li>
                  <i class="iconfont icon-dianzan"></i>
                  <div>获得 <span>0</span>次点赞</div>
                </li>
                <li>
                  <i class="el-icon-chat-line-square"></i>
                  <div>内容获得 <span>0</span>次评论</div>
                </li>
                <li>
                  <i class="el-icon-star-off"></i>
                  <div>获得 <span>0</span>次收藏</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="user_main_right">
        <div>
          <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
            <el-tab-pane label="文章" name="article">
              <div class="mainContent">
                <article class="blog-list-box" v-for="(item,index) in data" :key="index">
                  <router-link  :to="/article/+(item.id)" class="active_title" target="_blank">
                    <div class="blog-list-box-top">
                      <h4>{{ item.title }}</h4>
                    </div>
                    <div class="blog-list-content">
                      {{item.cover_abstract}}
                    </div>
                    <div class="blog-list-footer">
                      <div class="blog-list-footer-left">
                        <div class="article-type-yc">{{item.article_type}}</div>
                        <div class="view-time-box">发布博客 {{ item.create_date }}</div>
                        <div class="view-num-box">{{ item.browse_num }} <span>阅读·</span></div>
                        <div class="give-like-box">{{ item.fabulous_num }} <span>点赞·</span></div>
                        <div class="comment-box">{{item.comment_num}} <span>评论</span></div>
                      </div>
                    </div>
                  </router-link >
                </article>
              </div>
            </el-tab-pane>
            <el-tab-pane label="问答" name="QA">
              <div class="Q_A">
                <el-tabs v-model="Q_A"  @tab-click="QA_Click">
                  <el-tab-pane label="回答的问题" name="answer">
                    <div>
                      <div class="answer-list-box" v-for="(item,index) in data" :key="index">
                        <router-link  :to='/questions/+(item.id)' target="_blank">
                          <div class="blog-list-box-top">
                            <h4>{{item.title}}</h4>
                          </div>
                          <div class="blog-list-content answer-list-content">
                            <div>问题:</div>
                            <div>{{item.content}}</div>
                          </div>
                          <div class="blog-list-footer">
                            <div class="blog-list-footer-left">
                              <div class="view-time-box">回答问题 {{ item.create_date }}</div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="发布的问题" name="questions">
                    <div>
                      <div class="answer-list-box" v-for="(item,index) in data" :key="index">
                        <router-link  :to='/questions/+(item.id)' target="_blank">
                          <div class="blog-list-box-top">
                            <h4>{{item.title}}</h4>
                          </div>
                          <div class="blog-list-footer">
                            <div class="blog-list-footer-left">
                              <div class="view-time-box">发布问题 {{ item.create_date }}</div>
                              ·
                              <div class="view-time-box"> {{ item.answer_count }} 回答</div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
            <el-tab-pane label="课程" name="curriculum">课程</el-tab-pane>
            <el-tab-pane label="关注/粉丝" name="follow">
              <div class="follow-list">
                <el-tabs value="follow">
                  <el-tab-pane label="关注" name="follow">
<!--                    所有关注-->
                    <div>
<!--                      关注的每一个人-->
                      <div class="sub-people-list-content">
                        <div class="sub-people-left">
                          <a href="">
                            <img src="https://www.beihuankule.com/media/avatars/6.png" alt="">
                          </a>
                          <div class="sub-people-content">
                            <div class="sub-people-title">
                              <a href=""><div>用户名字</div></a>
                            </div>
                            <div class="sub-people-text">个性签名</div>
                          </div>
                        </div>
                        <div class="sub-people-right">
                          <div class="sub-btn">关注</div>
                        </div>
                      </div>
                      <div class="sub-people-list-content">
                        <div class="sub-people-left">
                          <a href="">
                            <img src="https://www.beihuankule.com/media/avatars/6.png" alt="">
                          </a>
                          <div class="sub-people-content">
                            <div class="sub-people-title">
                              <a href=""><div>用户名字</div></a>
                            </div>
                            <div class="sub-people-text">个性签名</div>
                          </div>
                        </div>
                        <div class="sub-people-right">
                          <div class="sub-btn">关注</div>
                        </div>
                      </div>
                      <div class="sub-people-list-content">
                        <div class="sub-people-left">
                          <a href="">
                            <img src="https://www.beihuankule.com/media/avatars/6.png" alt="">
                          </a>
                          <div class="sub-people-content">
                            <div class="sub-people-title">
                              <a href=""><div>用户名字</div></a>
                            </div>
                            <div class="sub-people-text">个性签名</div>
                          </div>
                        </div>
                        <div class="sub-people-right">
                          <div class="sub-btn">关注</div>
                        </div>
                      </div>
                      <div class="sub-people-list-content">
                        <div class="sub-people-left">
                          <a href="">
                            <img src="https://www.beihuankule.com/media/avatars/6.png" alt="">
                          </a>
                          <div class="sub-people-content">
                            <div class="sub-people-title">
                              <a href=""><div>用户名字</div></a>
                            </div>
                            <div class="sub-people-text">个性签名</div>
                          </div>
                        </div>
                        <div class="sub-people-right">
                          <div class="sub-btn">关注</div>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="粉丝" name="fans">粉丝</el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收藏" name="Collection">
              <div>
                <div class="collect-list-box">
                  <div>
<!--                    收藏内容标题-->
                    <div class="collect-list-header">
                      <div class="collect-list-title">
                        <h4>博客</h4>
                      </div>
                      <div class="focus-on-btn">关注</div>
                    </div>
<!--                    详情-->
                    <div class="collect-list-footer">
                      <div class="collect-list-footer-content">
                        <div class="collect-list-left">
                          <div class="collect-list-right">最近更新: 2022.05.05</div>
                          <div class="collect-content-num"><span>2 <span>内容</span></span></div>
                          <div class="collect-people-num"><span>0 <span>关注</span></span></div>
                        </div>
                      </div>
                    </div>
                    <el-collapse>
                      <el-collapse-item title="详情" name="1">
                        <div class="collect-second-li">
                          <div class="collect-second-li-tag">博客</div>
                          <a href=""><div class="collect-second-li-content">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div></a>
                        </div>
                        <div class="collect-second-li">
                          <div class="collect-second-li-tag">博客</div>
                          <a href=""><div class="collect-second-li-content">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div></a>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import toolbar from './toolbar.vue'
export default {
  name: "PersonalBlog",
  components: {
    toolbar,
  },
  data() {
    return {
      data:[],
      activeName: 'article',
      Q_A:'',
      user_id:'',
      typeNum:'0',
      listParams: {
        pageNum: 1,
        pageSize:10,
        loading: false,
        error: false,
        finished: false,
      },
    };
  },
  beforeCreate() {
    this.$ajax.get('https://sx.water-mind.com/cs_s/login/getLoginInfo').then(res=>{
        console.log(res)
    })
  },
  created() {
    var str = window.location.href;
    var index = str .lastIndexOf("/");
    this.user_id = str .substring(index + 1, str .length);
    console.log('-----------')
    console.log(this.user_id)

    this.getBlogOrQaGrade();
  },
  methods: {
    handleClick() {
      console.log(this.activeName)
      if (this.activeName === 'article'){
        console.log('文章')
        this.typeNum = '0'
        this.getBlogOrQaGrade();
      }else if (this.activeName === 'QA'){
        this.Q_A = 'answer'
        this.typeNum = '1'
        this.getBlogOrQaGrade();
        console.log('问答页面')
      }
    },
    QA_Click(){
      if (this.Q_A === 'answer'){
        console.log('回答的问题')
        this.typeNum = '1'
        this.getBlogOrQaGrade();
      }else if (this.Q_A === 'questions'){
        console.log('发布的问题')
        this.typeNum = '2'
        this.getBlogOrQaGrade();
      }
    },
    getBlogOrQaGrade(){
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/php/getBlogOrQaGrade',{page:this.listParams.pageNum,rows:this.listParams.pageSize,php_type:this.typeNum,user_id:this.user_id}).then(res=>{
        this.data = res.data.obj.list
        console.log(this.data)
      })
    }
  }
}
</script>

<style scoped>
h1,h2,h3,h4,h5,h6{
  margin: 0;
}
.PersonalBlog_bg{
  background-color: #f5f7f8;
  width: 100%;
  min-height: calc(100vh - 48px);
}
.user-profile-head-banner{
  padding-top: 16px;
  width: 1320px;
  margin: auto;
  height: 50px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.user-profile-head-info{
  padding-left: 16px;
  padding-right: 24px;
  background: #fff;
  width: 1320px;
  margin: 0 auto;
  border-radius: 2px;
}
.user-profile-avatar > img{
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.user-profile-avatar{
  position: absolute;
  top: -12px;
  width: 102px;
  height: 102px;
  border: 4px solid #f0f0f2;
  border-radius: 50%;
  background: #fff;
}
.user-profile-head-info-ll{
  position: relative;
  width: 102px;
  height: 90px;
}
.user-profile-head-info-l{
  display: flex;
  -webkit-box-flex: 1;
  flex: 1;
}
.user-profile-head-info-t{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.user-profile-head-info-rr{
  -webkit-box-flex: 1;
  flex: 1;
  margin-left: 16px;
}
.user-profile-head-info-r-t{
  margin-top: 16px;
}
.user-profile-head-info-r-c{
  margin-top: 10px;
}
.user-profile-head-name{
  color: #222226;
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  word-break: break-all;
  -webkit-box-align: start;
  align-items: flex-start;
}
.user-profile-head-name > div{
  color: #222226;
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  word-break: break-all;
}
.user_lv{
  font-size: 22px;
  margin: 4px;
  color: #409EFF;
}
.user-profile-head-info-r-c > ul{
  display: flex;
}
.user-profile-head-info-r-c > ul > li{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.user-profile-statistics-num{
  color: #222226;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-right: 4px;
}
.user-profile-statistics-name{
  color: #555666;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
}
.user-profile-statistics-bar{
  width: 1px;
  height: 16px;
  background: #e8e8ed;
  margin: 0 16px;
}
.user-profile-head-info-r{
  align-self: flex-start;
  margin-top: 30px;
}
.user-profile-black-btn{
  border: 1px solid #ccccd8;
  color: #555666;
  align-items: center;
  font-size: 14px;
  width: 96px;
  text-align: center;
  height: 32px;
  border-radius: 20px;
  margin-left: 16px;
  justify-content: center;
  -webkit-box-align: center;
  display: flex;
  -webkit-box-pack: center;
}
.user_main{
  width: 1360px;
  display: flex;
  min-height: 700px;
  padding-bottom: 32px;
  margin: 10px auto 0;
  border-radius: 2px;
}
.user_main_left{
  width: 338px;
  margin-right: 10px;
  flex: none;
  -webkit-box-flex: 0;

}
.user_main_right{
  -webkit-box-flex: 1;
  flex: 1;
  overflow: hidden;
  background-color: white;
}
.user_main_left_grade{
  background-color: white;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 10px;
}
.grade_top{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.grade_bottom{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 8px;
  background: rgba(64,158,225,.1);
  padding: 12px 8px;
  border-radius: 1px;
}
.influence-left{
  font-weight: 600;
  color: #222226;
  font-size: 16px;
  line-height: 22px;
  vertical-align: -3px;
}
.influence-right > a{
  display: inline-block;
  width: 38px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: rgba(34,34,38,.05);
  border-radius: 2px;
  margin-right: 4px;
  color: #555666;
  font-size: 12px;
}
.influence-right > i{
  font-size: 14px;
}
.grade_bottom > div > span{
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-right: 8px;
}
.grade_bottom > div > a > span{
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-right: 8px;
  color: #222226;
}
.user_main_left_achievement{
  margin-bottom: 10px;
  background: #fff;
  border-radius: 2px;
}
.aside-common-box-head{
  font-size: 16px;
  color: #222226;
  font-weight: 500;
  line-height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #e8e8ed;
}
.aside-common-box-bottom{
  padding: 16px;
}
.aside-common-box-achievement > li {
  margin-bottom: 12px;
  color: #555666;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
}
.aside-common-box-achievement > li > i{
  margin-right: 10px;
}
.aside-common-box-achievement > li > div > span{
  color: #222226;
  font-weight: 500;
  margin: 0 4px;
}
.blog-list-box{
  background: #fff;
}
.blog-list-box > a{
  display: block;
  padding: 24px 0;
  margin: 0 24px;
  border-bottom: 1px solid #f0f0f2;
}
.blog-list-box-top{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.blog-list-content{
  color: #555666;
  margin-top: 8px;
  line-height: 24px;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.blog-list-footer{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 16px;
}
.blog-list-box-top > h4{
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #222226;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.blog-list-footer-left{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.article-type-yc{
  color:  #409EFF;
  background:rgba(64,158,225,.1);
  text-align: center;
  width: 34px;
  height: 20px;
  line-height: 20px;
  border-radius: 2px;
  font-size: 12px;
  margin-right: 8px;
}
.view-time-box,.view-num-box,.give-like-box,.comment-box{
  color: #555666;
  line-height: 20px;
  font-size: 14px;
  margin-right: 8px;
}
.Q_A{
  padding: 0 24px;
}
.answer-list-content{
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.answer-list-box > a{
  display: block;
  padding: 24px 0;
  margin: 0 24px;
  border-bottom: 1px solid #f0f0f2;
}
.follow-list{
  padding: 0 24px;
}
.sub-people-list-content{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  padding: 24px 0;
  margin: 0 24px;
  border-bottom: 1px solid #f0f0f2;
}
.sub-people-right{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 32px;
}
.sub-btn{
  width: 74px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #ccccd8;
  color: #555666;
  text-align: center;
  line-height: 22px;
  font-size: 14px;
  cursor: pointer;
}
.sub-people-left{
  display: flex;
  position: relative;
}
.sub-people-left > a > img{
  width: 48px;
  height: 48px;
  border: 1px solid #e8e8ed;
  border-radius: 50%;
  margin-right: 9px;
  cursor: pointer;
}
.sub-people-content{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.sub-people-title{
  font-size: 16px;
  font-weight: 500;
  color: #222226;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.sub-people-title > a >div{
  color: #222226;
  margin-right: 4px;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  cursor: pointer;
}
.sub-people-text{
  font-size: 14px;
  color: #555666;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.collect-list-header{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.collect-list-box > div{
  padding: 24px 0;
  margin: 0 24px;
  border-bottom: 1px solid #f0f0f2;
}
.focus-on-btn{
  margin-left: 32px;
  flex-shrink: 0;
  width: 74px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #ccccd8;
  color: #555666;
  text-align: center;
  line-height: 22px;
  font-size: 14px;
  cursor: pointer;
}
.collect-list-title > h4{
  font-size: 18px;
  font-weight: 500;
  color: #555666;
  line-height: 24px;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.collect-list-footer{
  margin-top: 16px;
  color: #555666;
  font-size: 14px;
}
.collect-list-footer-content{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.collect-list-left{
  display: flex;
  color: #555666;
}
.collect-list-right{
  margin-right: 8px;
}
.collect-content-num{
  margin-right: 8px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.collect-people-num{
  margin-right: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.el-collapse{
  border: none;
}
.collect-second-li-tag{
  min-width: 36px;
  padding: 5px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #409EFF;
  color: #409EFF;
  font-size: 12px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 8px;
}
.collect-second-li{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 16px;
}
.collect-second-li-content{
  color: #555666;
  font-size: 16px;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>