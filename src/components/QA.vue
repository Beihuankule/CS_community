<template>
  <div id="QA">
    <toolbar/>
    <el-row type="flex"  justify="space-around" class="QA">
      <el-col :span="3">
        <div class="qa_left">
          <ul>
            <li class="active">全部</li>
            <li>关注</li>
            <li>未回答</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="bg-purple-light">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="最新" name="first">
                <div class="card">
                  <ul>
                    <li>
                      <div>0</div>
                      <p>回答</p>
                    </li>
                  </ul>
                  <div class="card_right">
                    <div class="card_right_title">
                      <router-link  to="/questions/123" target=“_blank”>
                        <h2>记录公开的REST API</h2>
                      </router-link>
                    </div>
                    <p class="card_right_desc">向REST API添加文档是必要的，因为它有助于开发人员将他们的应用程序与您的系统集成。 当你发布模块时，创世会自动生成文档，从而为你的REST API编制文档。平台从REST API的属性、REST API方法及其参数生成文档。 执行以下操作:</p>
                    <div class="card_right_header">
                      <ul>
                        <li class="card_right_header_label">
                          <a href="">mysql</a>
                        </li>
                        <li class="card_right_header_label">
                          <a href="">javascript</a>
                        </li>
                        <li>
                          <i class="el-icon-view"></i>
                          1
                        </li>
                        <li>
                          <i class="el-icon-time"></i>
                          <span>2022-04-24 14:43</span>
                        </li>
                      </ul>
                      <div class="card_right_header_user">
                        <a href="">双龙</a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最热" name="second">最热</el-tab-pane>
              <el-tab-pane label="精华" name="third">精华</el-tab-pane>
              <el-tab-pane label="待回答" name="fourth">待回答</el-tab-pane>
            </el-tabs>
          </template>
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
  name: "QA",
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {
    toolbar
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
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
.active{
  border-left: 2px solid rgb(64,158,255);;
  background: #f5f6f7;
  font-size: 14px;
  font-weight: 600;
  color: #222226;
  line-height: 32px;
}
</style>