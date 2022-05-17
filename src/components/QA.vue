<template>
  <div id="QA">
    <toolbar/>
    <el-row type="flex"  justify="space-around" class="QA">
      <el-col :span="3">
        <div class="qa_left">
          <ul>
            <li :class="{'active':isActive === 1}" @click="getWhole" >全部</li>
            <li :class="{'active':isActive === 2}" @click="getFocusQa" v-show="csToken !== null">关注</li>
          </ul>
          <h4 class="type_title">类型</h4>
          <ul>
            <li :class="{'active':isActive === 3}" @click="isActive = 3">前端</li>
            <li :class="{'active':isActive === 4}" @click="isActive = 4">后端</li>
            <li :class="{'active':isActive === 5}" @click="isActive = 5">数据库</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="13" v-infinite-scroll="onLoad"
              infinite-scroll-distance="1"
              infinite-scroll-immediate-check="false"
              infinite-scroll-disabled="false"
              infinite-scroll-immediate="true">
        <div class="bg-purple-light">
          <template>
            <div v-for="(item,index) in list" class="card" :key="index" v-show="FocusQaShow">
              <ul>
                <li>
                  <div>{{ item.answer_count }}</div>
                  <p>回答</p>
                </li>
              </ul>
              <div class="card_right">
                <div class="card_right_title">
                  <router-link  :to='/questions/+(item.id)' target="_blank">
                    <h2>{{ item.title }}</h2>
                  </router-link>
                </div>
                <p class="card_right_desc">{{item.content}}</p>
                <div class="card_right_header">
                  <ul>
                    <li class="card_right_header_label">
                      <a href="">{{item.label}}</a>
                    </li>
                    <li>
                      <i class="el-icon-view"></i>
                      {{item.browse_num}}
                    </li>
                    <li>
                      <i class="el-icon-time"></i>
                      <span>{{item.create_date}}</span>
                    </li>
                  </ul>
                  <div class="card_right_header_user">
                    <a href="">{{ item.create_user }}</a>
                  </div>
                </div>
              </div>
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick" v-show="!FocusQaShow">
              <el-tab-pane label="最新" name="first" >
                <div v-for="(item,index) in list" class="card" :key="index">
                  <ul>
                    <li>
                      <div>{{ item.answer_count }}</div>
                      <p>回答</p>
                    </li>
                  </ul>
                  <div class="card_right">
                    <div class="card_right_title">
                      <router-link  :to='/questions/+(item.id)' target="_blank">
                        <h2>{{ item.title }}</h2>
                      </router-link>
                    </div>
                    <p class="card_right_desc">{{item.content}}</p>
                    <div class="card_right_header">
                      <ul>
                        <li class="card_right_header_label">
                          <a href="">{{item.label}}</a>
                        </li>
                        <li>
                          <i class="el-icon-view"></i>
                          {{item.browse_num}}
                        </li>
                        <li>
                          <i class="el-icon-time"></i>
                          <span>{{item.create_date}}</span>
                        </li>
                      </ul>
                      <div class="card_right_header_user">
                        <a href="">{{ item.create_user }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最热" name="second" >
                <div v-for="(item,index) in list" class="card" :key="index">
                  <ul>
                    <li>
                      <div>{{ item.answer_count }}</div>
                      <p>回答</p>
                    </li>
                  </ul>
                  <div class="card_right">
                    <div class="card_right_title">
                      <router-link  :to='/questions/+(item.id)' target="_blank">
                        <h2>{{ item.title }}</h2>
                      </router-link>
                    </div>
                    <p class="card_right_desc">{{item.content}}</p>
                    <div class="card_right_header">
                      <ul>
                        <li class="card_right_header_label">
                          <a href="">{{item.label}}</a>
                        </li>
                        <li>
                          <i class="el-icon-view"></i>
                          {{item.browse_num}}
                        </li>
                        <li>
                          <i class="el-icon-time"></i>
                          <span>{{item.create_date}}</span>
                        </li>
                      </ul>
                      <div class="card_right_header_user">
                        <a href="">{{ item.create_user }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="待回答" name="fourth" >
                <div v-for="(item,index) in list" class="card" :key="index">
                  <ul>
                    <li>
                      <div>{{ item.answer_count }}</div>
                      <p>回答</p>
                    </li>
                  </ul>
                  <div class="card_right">
                    <div class="card_right_title">
                      <router-link  :to='/questions/+(item.id)' target="_blank">
                        <h2>{{ item.title }}</h2>
                      </router-link>
                    </div>
                    <p class="card_right_desc">{{item.content}}</p>
                    <div class="card_right_header">
                      <ul>
                        <li class="card_right_header_label">
                          <a href="">{{item.label}}</a>
                        </li>
                        <li>
                          <i class="el-icon-view"></i>
                          {{item.browse_num}}
                        </li>
                        <li>
                          <i class="el-icon-time"></i>
                          <span>{{item.create_date}}</span>
                        </li>
                      </ul>
                      <div class="card_right_header_user">
                        <a href="">{{ item.create_user }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="User_information">
            <div class="user_header">
              <span class="addTitle" v-show="csToken === null">点击登陆</span>
              <span class="addTitle" v-show="csToken !== null">我的问答</span>
              <span class="addQuestion">
                <router-link  to="/newquestions" target=“_blank”><i class="el-icon-plus"></i>提问题</router-link>
                <router-view/>
              </span>
            </div>
            <div class="profile_wrap" v-show="csToken !== null">
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
                  <em>{{ questionNum }}</em>
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
      data:[],
      list:[],
      questionNum:0,
      QAnum:'0',
      csToken:'',
      activeName: 'first',
      isActive:1,
      FocusQaShow:false,
      listParams: {
        pageNum: 1,
        pageSize:10,
        loading: false,
        error: false,
        finished: false,
      },
    };
  },
  components: {
    toolbar
  },
  created() {
    this.getDemoList();

  },
  mounted() {
    if (this.csToken !== null){
      this.getMyQa();
    }
    this.csToken = this.$ajax.getItem("csToken")
    console.log(this.csToken)
    if (this.csToken !== null ){
      console.log('登录了')
    }
  },
  computed: {
    disabled() {
        // console.log(
        //     this.listParams.loading || this.listParams.finished
        // );
      return this.listParams.loading || this.listParams.finished;
    },
  },
  beforeDestroy () {

  },
  methods:{
    handleClick() {
      // console.log(tab.index);
      if (this.activeName === 'first' ){
        this.QAnum = '0'
        this.listParams.pageNum = 1
        this.listParams.finished = false;
        this.list = []
        this.getDemoList();
      }else if (this.activeName === 'second'){
        this.QAnum = '2'
        this.listParams.pageNum = 1
        this.listParams.finished = false;
        this.list = []
        this.getDemoList();
      }else{
        this.QAnum = '1'
        this.listParams.pageNum = 1
        this.listParams.finished = false;
        this.list = []
        this.getDemoList();
      }
    },
    onLoad() {
      this.listParams.loading = true;
      if (this.listParams.finished === false) {
        this.listParams.pageNum++;
        // alert(1)
        this.getDemoList();
      }
    },
    // getDemoList() {
    //   var that = this;
    //   // console.log(this.QAnum)
    //   this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLogin/getQaList',{page:this.listParams.pageNum,rows:this.listParams.pageSize,search_type:this.QAnum}).then(res=> {
    //     console.log(res)
    //     that.list = []
    //     that.list = that.list.concat(res.data.obj.list);
    //     this.data = res.data.obj.list
    //     console.log(that.list)
    //     // console.log('---------------')
    //     // console.log(this.QAnum)
    //     // console.log(res.data.obj.list)
    //   })
    // },
    getDemoList() {
      this.FocusQaShow = false
      var that = this;
      console.log(this.QAnum)
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLogin/getQaList',{page:this.listParams.pageNum,rows:this.listParams.pageSize,search_type:that.QAnum}).then(res=>{
        console.log(res)
        // this.listParams.pageNum = 1
        if (res.status === 200){
          if (res.data.obj.list.length > 0){
                that.list = that.list.concat(res.data.obj.list);
                this.data = res.data.obj.list
            that.listParams.loading = false;
            if (res.data.obj.list.length < that.listParams.pageSize) {
              that.listParams.finished = true;
              this.$message({
                showClose: true,
                message: '没有更多数据了哦',
                type: 'warning'
              });
            }
            // that.data = res.data
            // that.list = that.data.obj.list
            // console.log(res)
          }else{
            that.listParams.loading = false;
            that.listParams.finished = true;
          }
        }
        that.listParams.loading = false;
      })
          .catch(function () {
            that.listParams.error = true;
            that.listParams.loading = false;
          });
    },
    //获取我的提问
    getMyQa(){
      if (this.csToken != null){
        this.$ajax.post('http://192.168.199.209:8081/cs_ow/owQa/getMyQa',{page:this.listParams.pageNum,rows:this.listParams.pageSize}).then(res=>{
          // console.log(res.data.obj)
          this.questionNum = res.data.obj.total
        })
      }
    },
    getWhole(){
      this.isActive = 1
      this.QAnum = '0'
      this.listParams.pageNum = 1
      this.listParams.finished = false;
      this.list = []
      this.activeName = 'first'
      this.getDemoList();
    },
    getFocusQa(){
      this.FocusQaShow = true
      this.isActive = 2
      this.listParams.pageNum = 1
      this.listParams.finished = false;
      var that = this;
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseFocus/getFocusQa',{page:this.listParams.pageNum,rows:this.listParams.pageSize}).then(res=>{
        console.log(res)
        this.list = []
        if (res.status === 200){
          if (res.data.obj.list.length > 0){
            that.list = that.list.concat(res.data.obj.list);
            this.data = res.data.obj.list
            that.listParams.loading = false;
            if (res.data.obj.list.length < that.listParams.pageSize) {
              that.listParams.finished = true;
              this.$message({
                showClose: true,
                message: '没有更多数据了哦',
                type: 'warning'
              });
            }
            // that.data = res.data
            // that.list = that.data.obj.list
            // console.log(res)
          }else{
            that.listParams.loading = false;
            that.listParams.finished = true;
          }
        }
        that.listParams.loading = false;
      })
          .catch(function () {
            that.listParams.error = true;
            that.listParams.loading = false;
          });
    }
  }
}
</script>

<style scoped>
#QA{
  min-width: 1280px;
}
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
.type_title{
  padding: 0 10px;
  color: #888;
  font-weight: 400;
  font-size: 14px;
}
</style>