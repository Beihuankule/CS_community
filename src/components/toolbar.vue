<template>
  <div id="toolbar" v-bind:class="{ 'fixed': isFixed }">
    <div  class="toolbar">
      <div class="Left">
        <div class="logo">
            <p>创世</p>
            <p class="logo_text">社区</p>
        </div>
        <div class="Navigation">
          <router-link  to="/blog" >博客</router-link>
          <router-link  to="/doc" >文档</router-link>
          <router-link  to="/practice" >练习</router-link>
          <router-link  to="/curriculum" >课程</router-link>
          <router-link  to="/QA" >问答</router-link>
          <router-link  to="/authentication" >认证</router-link>
          <router-link  to="/Search" >搜索</router-link>
        </div>
      </div>
      <div class="Centre">
        <el-input
            v-show="Sousu"
            class="toolbar_input"
            placeholder="请输入内容"
            v-model="text">
        </el-input>
        <i @click="Sousu_show" v-show="icon_show" class="el-icon-search"></i>
      </div>
      <div class="Right" v-cloak>
        <div  v-if="isShow">
          <el-dropdown>
            <el-button type="button" class="ant-btn">
              <i class="el-icon-edit"></i> 创作
              <i class="el-icon-arrow-down"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <div>
                <div class="create">
                  <div><i class="el-icon-tickets"></i><span><router-link to="/newArticle" target=_blank>写文章</router-link></span></div>
                  <div><i class="el-icon-s-opportunity"></i><span><router-link to="/">发Blink</router-link></span></div>
                  <div><i class="el-icon-question"></i><span><router-link to="/newquestions" target=_blank>提问题</router-link></span></div>
                  <div><i class="el-icon-upload"></i><span><router-link to="/">传资源</router-link></span></div>
                  <div><i class="el-icon-folder-opened"></i><span><router-link to="/">新建项目</router-link></span></div>
                </div>
                <div class="activity">
                  <div class="activity_more">
                    <span>创作活动</span>
                    <a href="/">更多 <i class="el-icon-arrow-right"></i></a>
                  </div>
                  <div class="activity_link">
                    <a href="/">xxxxxxxxxxxxxxx</a>
                    <a href="/">xxxxxxxxxxxxxxx</a>
                  </div>
                </div>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <div class="el-icon-s-custom user"></div>
            <el-dropdown-menu slot="dropdown" class="dropdown">
              <div class="username">
                <router-link to="/PersonalBlog">{{this.username}}</router-link>
                <span><i class="iconfont icon-icon-test2"></i></span>
              </div>
              <div class="user_data">
                <div>
                  <a href="/">--</a>
                  <span>粉丝</span>
                </div>
                <div>
                  <a href="/">--</a>
                  <span>关注</span>
                </div>
                <div>
                  <a href="/">--</a>
                  <span>获赞</span>
                </div>
              </div>
              <div class="classification">
                <span><i class="el-icon-user-solid"></i>个人中心</span>
                <span><i class="el-icon-document"></i>内容管理</span>
                <span><i class="el-icon-collection"></i>学习平台</span>
                <span><i class="el-icon-tickets"></i>我的订单</span>
                <span><i class="el-icon-wallet"></i>我的钱包</span>
                <span><i class="el-icon-link"></i>我的API</span>
                <span><i class="el-icon-medal"></i>我的认证</span>
              </div>
              <div class="raffle">
                <span><i class="el-icon-present"></i>签到抽奖</span>
              </div>
              <div class="signout">
                <span @click="login_quit"><i class="iconfont icon-tuichu"></i>退出</span>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div  v-else-if="!isShow">
          <!--        <router-link  :to="{path:'/login', query:{url:this.url}}" class="login_button"></router-link>-->
          <a :href='loginurl'>
            <el-button type="primary" size="small" round @click="getloginurl">登陆</el-button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {
      icon_show:1,
      Sousu:0,
      isFixed:false,
      text: '',
      userdata:'',
      isShow:false,
      username:null,
      url:window.location.href,
      // toolbar_show:1,
      loginurl:'https://sx.water-mind.com/cs_devise/#/login?uri=',
    }
  },
  beforeCreate() {
    //判断是否登陆
    this.$ajax.post('https://sx.water-mind.com/cs_s/login/getLoginInfo').then(res=>{
      if (res.data.obj !== null){
        // console.log(res.config.headers.csToken)
        this.userdata = res.data
        this.username = res.data.obj.name
        this.isShow = this.username != null;
      }
    })
  },
  created() {
  },
  beforeMount() {

  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll () {
      let _this=this;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      _this.isFixed = !!scrollTop;
    },
    Sousu_show(){
      // this.$axios.defaults.withCredentials=true;
      this.Sousu = 1
      this.icon_show = 0
    },
    getloginurl(){
      // this.toolbar_show = 0
      this.loginurl = `https://sx.water-mind.com/cs_devise/#/login?uri=${this.url}`
    },
    login_quit(){
      this.$ajax.post('https://sx.water-mind.com//cs_s/login/quit').then(res=>{
        console.log(res.config.headers.csToken)
        this.$message({
          message: '退出成功',
          type: 'success'
        });
        setTimeout(function (){
          location.reload();
        },1000)
      })
    },
  }
}
</script>

<style scoped>
#toolbar{
  display: flex;
  height: 48px;
  width: 100%;
  align-items: center;
  z-index: 200;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 35%);
}
.username > span >i{
  font-size: 24px;
  color: skyblue;
}
.dropdown{
  min-width: 250px;
}
.toolbar{
  margin: 0 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.Left{
  display: flex;
  width: 33%;
  justify-content: space-around;
  align-items: center;
}
.logo{
  margin-right: 10px;
  display: flex;
}
.logo > p{
  margin: 0;
}
.logo_text{
  color: rgb(64,158,255);
}
.Navigation{
  height: 48px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  min-width: 350px;
  text-align: center;
}
.Navigation >a{
  padding: 12px 0 0 0;
  width: 16.6%;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
}
.Navigation >a:hover{
  background-color: rgba(188,188,188,0.1);
}
.Centre{
  display: flex;
  width: 33%;
  align-items: center;
  color: #999;
  justify-content: flex-end;
}
.Right{
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: flex-end;
}
.el-button{
  min-width: 88px;
  height: 32px;
  color: #fff;
  background-color: #409EFF;
  border-radius: 20px;
  margin-right: 20px;
  padding: 0;
}
.user{
  height: 25px;
  width: 25px;
  color: rgb(85,95,111);
  text-align: center;
  font-size: 21px;
  background-color: rgb(223,225,229);
  border-radius: 50%;
}
.user_data{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.user_data > div{
  text-align: center;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}
.classification{
  display: flex;
  flex-direction: column;
}
.classification > span,.raffle >span,.signout >span{
  margin: 8px  20px;
  font-size: 14px;
  color: #999;
}
.classification > span > i,.raffle >span >i,.signout > span >i{
  margin-right:5px;
}
.username{
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  min-height: 40px;
}
div > a{
  text-decoration:none;
  font-size: 20px;
  color: #222226;
  font-style: normal;
  font-weight: 600;
  height: 30px;
}
.user_data > div > span{
  color: #999;
  font-size: 14px;
}
.username , .user_data , .classification , .raffle{
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.signout{
  padding: 10px 0;
}
.create{
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin: 10px;
}
.create > div{
  display: flex;
  align-items: center;
  margin: 15px;
  flex-direction: column;
}
.create > div >span{
  margin-top: 10px;
}
.activity{
  margin: 15px;
}
.activity_more{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.activity_more > span,a{
  font-size: 14px !important;
}
.activity_more > a{
  color: #999aaa;
  font-weight: 400;
}
.activity_link{
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}
.activity_link >a{
  color: #999aaa;
  font-weight: 400;
}
.create > div >i{
  font-size: 24px;
  color: rgb(85,95,111);
  background-color: rgb(223,225,229);
  padding: 6px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.create > div > span > a{
  font-size: 14px;
  color: #999aaa;
  font-weight: 400;
  border-top:none;
}
.login_button {
  border-top: none;
}
.login_button >button{
  min-width:68px !important;
}
[v-cloak]{
  display: none;
}
.classification > span,  .raffle > span, .signout > span{
  cursor:pointer;
}
.classification > span:hover{
  background-color: rgba(199,199,199,0.1);
}
.fixed{
  position: fixed;
}
.username > a{
  border-top: none;
}
</style>