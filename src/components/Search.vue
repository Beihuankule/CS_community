<template>
  <div id="search">
    <toolbar/>
    <el-row class="search">
      <el-col :span="span" :offset="offset" :xs="{span: 24, offset: 0}">
        <el-container>
          <el-header class="search_header" v-bind:class="{header_style:temp}">
            <router-link class="logo-root" to="/Search" >创世搜索
              <sup class="logo-sxkj">Search</sup></router-link>
            <div class="input" :class="{input_top:inputtop===1}">
<!--              搜索输入框-->
              <el-input
                  v-model="text"
                  autocomplete="on"
                  name="search"
                  prefix-icon="el-icon-search"
                  suffix-icon="el-icon-microphone"
                  @keydown.enter.native="search(text)"
                  placeholder="请输入搜索关键词"
                  clearable></el-input>
<!--              搜索按钮，获取输入框的值，判断是否为空-->
              <el-button type="primary" @click="search(text)" >搜索</el-button>
            </div>
          </el-header>
          <!--              主页快捷标签-->
          <div class="container" v-show="container">
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世官网</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世社区</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世训练</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世论坛</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世博客</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世文档</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>创世认证</span>
              </div>
            </a>
            <a href="javascript:;" class="navigation">
              <div class="tile-icon"></div>
              <div class="tile-title">
                <span>加入我们</span>
              </div>
            </a>
          </div>
          <el-container >
<!--            搜索结果-->
            <el-col :span="19" :offset="5">
              <el-main>
                <!--              上方分类-->
                <el-aside width="100%">
                  <el-col v-show="showfilter">
                    <div class="filter-section">
                    <span class="Filters" >
<!--                      点击标签携带分类参数发起请求-->
                      <span @click="allshow()"><i class="el-icon-s-grid "></i><a :class="{active:shows===1}" href="javascript:;" >全部</a></span>
                      <span @click="wzshow()"><i class="el-icon-connection"></i><a :class="{active:shows===2}" href="javascript:;" >网站</a></span>
                      <span @click="blogshow()"><i class="el-icon-s-custom"></i><a :class="{active:shows===3}" href="javascript:;" >博客</a></span>
                      <span @click="bbsshow()"><i class="el-icon-chat-line-round"></i><a :class="{active:shows===4}" href="javascript:;">论坛</a></span>
                      <span @click="docshow()"><i class="el-icon-document"></i><a :class="{active:shows===5}" href="javascript:;" >文档</a></span>
                    </span>
                    </div>
                  </el-col>
                </el-aside>
                <!--              搜索内容显示区域-->
                <ul>
                  <p v-show="show">未在"{{this.classification}}"中搜索到与"{{this.title}}"有关的结果</p>
                  <span v-show="Tips" class="demonstration">共为您找到相关结果约 '{{this.resultAll.length}}' 个</span>
                  <li v-for="item in result" v-bind:key="item.title">
                    <div>
                      <div>
                        <a :href="docurl + item.item.id" target="_blank" class="for_title" v-html="getHTML( item.item.title , title)"></a>
                      </div>
                    </div>
                    <div class="for_content" v-html="getHTML( item.item.content , title)"></div>
                    <div class="for_footer" >
                      <div class="left">
                        {{item.item.source}}
                      </div>
                      <div class="right">
                        {{item.item.date}}
                      </div>
                    </div>
                  </li>
                  <!--                分页-->
                  <el-pagination
                      v-show="this.resultAll.length"
                      background
                      @current-change="handleCurrentChange"
                      layout="prev, pager, next"
                      :current-page="pageNum"
                      :page-size="pageSize"
                      :total="this.resultAll.length">
                  </el-pagination>
                </ul>
              </el-main>
            </el-col>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
    <div class="bottom_layer" v-show="container">
      <p><a>关于创世</a></p>
      <p><a>使用手册</a></p>
      <p><a>备案号:xxxxxxx</a></p>
      <p><a>创世 © - 保留所有权利</a></p>
      <p><a>条款和条件</a></p>
      <p><a>Cookie 政策</a></p>
      <p><a>意见反馈</a></p>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import toolbar from './toolbar.vue'
export default {
  name: 'HelloWorld',
  components: {
    toolbar
  },
  data(){
    return{
      Tips:0,
      offset:6,
      container:1,
      pageNum: 1,//当前页
      pageSize: 10,//每页显示数量
      classification:"全部",
      docurl:"",
      span:12,
      title: "",
      text:"",
      temp:false,
      fuse: null,
      result: [],
      show:0,
      shows:1,
      resultAll:[],
      books: [],
      showfilter:false,
      inputtop:1,
    };
  },
  created() {
    // 2. 初始化

  },
  watch: {
    // 要变量名一致
    title(newName, oldName) {
      // 新值
      //console.log(newName);
      // 旧值
      console.log(oldName);
      // 3. 搜索内容
      //用一个变量存储所有转换后的数据
      this.resultAll = this.fuse.search(newName);
      //进行切割分页
      this.result = this.resultAll.slice((this.pageNum - 1) * this.pageSize, this.pageNum * this.pageSize)
      this.show = this.result.length === 0;
    }
  },
  methods: {
    handleCurrentChange(pageNum){
      //改变当前页面的值
      this.pageNum = pageNum;
      //搜索到的总数提示，第一页的时候显示，其余页数隐藏
      if (this.pageNum === 1 ){
        this.Tips = 1
      }else {
        this.Tips = 0
      }
      //console.log(this.pageNum);//点击第几页
      //重新加载数组
      document.documentElement.scrollTop = 50
      this.result = this.resultAll.slice((this.pageNum - 1) * this.pageSize, this.pageNum * this.pageSize)
    },
    // 初始化
    init() {
      var options = {
        shouldSort: true, // 是否按分数对结果列表排序
        includeScore: true, //  是否应将分数包含在结果集中。0分表示完全匹配，1分表示完全不匹配。
        threshold: 0.5, // 匹配算法阈值。阈值为0.0需要完全匹配（字母和位置），阈值为1.0将匹配任何内容。
        /**
         * 确定匹配与模糊位置（由位置指定）的距离。一个精确的字母匹配，即距离模糊位置很远的字符将被视为完全不匹配。
         *  距离为0要求匹配位于指定的准确位置，距离为1000则要求完全匹配位于使用阈值0.8找到的位置的800个字符以内。
         */
        location: 0, // 确定文本中预期找到的模式的大致位置。
        distance: 1000,
        maxPatternLength: 32, // 模式的最大长度
        minMatchCharLength: 1, // 模式的最小字符长度
        // 搜索标题与内容
        keys: ["title", "content"]
      };
      // 设置数据与参数
      this.fuse = new Fuse(this.books, options);
    },
    search(title){
      if (title.replace(/(^\s*)|(\s*$)/g, "") === ''){
        this.$message({
          message: '请输入搜索关键词',
          type: 'warning'
        });
      }else{
        this.$axios.get('http://192.168.199.95:8080/sx_doc/client/findSearchAll').then(res=>{
          this.books = res.data
          this.title = this.text
          this.showfilter = true
          this.container = 0
          this.temp = true
          //动态改变搜索框上边距
          this.inputtop = 0
          //动态改变左边距
          this.offset = 0
          //将分页器页码重归于1
          this.pageNum = 1
          this.span = 12
          if (this.pageNum === 1 ){
            this.Tips = 1
          }else {
            this.Tips = 0
          }
          this.init();
        })
        this.docurl = "http://192.168.199.83:3413/sx_doc/doc/cs2/cs2_doc/"
        // window.open('/key='+this.text)
      }
    },
    //左侧导航条点击事件
    allshow(){
      this.shows = 1
      this.classification = "全部"
    },
    wzshow(){
      this.shows = 2
      this.classification = "网站"
    },
    blogshow(){
      this.shows = 3
      this.classification = "博客"
    },
    bbsshow(){
      this.shows = 4
      this.classification = "论坛"
    },
    docshow(){
      this.shows = 5
      this.classification = "文档"
    },
    getHTML(val, keyword) {
      //添加高亮
      //console.log(val)
      if (val !== null){
        val = val.replace(/\*/g, '').replace(/#/ig, "").replace(/\|/g, '').replace(/-/g, '').replace(/>/g, '').replace(/</g, '').replace(/!\[]/g, '').replace(/\[TOC]/g, '').replace(/\(\)/g, '')
      }
      const Reg = new RegExp(keyword, 'gi');
      if (val) {
        return val.replace(Reg, `<span style="color:#f73131;">${keyword}</span>`);
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  max-width: 1700px;
  background-color:#f5f7f8;
  min-height: calc(100vh - 80px);
}
body{
  margin: 0;
  padding: 0;
}
.el-card__body, .el-main{
  padding:15px 15px;
}
.el-row{
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.input{
  display: flex;
  width: 70%;
  margin: 0 auto;
}
.logo-root{
  color: #333;
  text-decoration: none!important;
  font-size: 28px;
  font-weight: 500;
  min-width: 117px;
  margin-left: 40px;
  border-top: none;
}
.el-header{
  text-align: center;
  height: auto !important;
  padding: 0 !important;
}
.logo-sxkj{
  font-size: 12px;
  font-weight: 400;
}
.input > .el-button{
  border-radius: 0 10px 10px 0;
}
::v-deep .el-input__inner {
  border-right: 0;
  border-radius: 10px 0 0 10px;
}
.el-aside{
}
.el-main{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.line-separator{
  width: 100%;
  height: 1px;
  margin-top: 5px;
  border-bottom: 2px solid #ECEFF1;
}
.filter-title{
  color: #BDC5C7;
  font-size: 15px;
  font-weight: 700;
}
.Filters {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
span > a{
  color: #333;
  display: block;
  font-size: 14px;
  line-height: 19px;
  overflow: hidden;
  padding: 5px;
  padding-left: 0;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  margin-left: 10px;
}
.for_title{
  color: #08c;
  font-weight: 600;
  text-decoration: none;
}
li{
  list-style-type:none;
  background-color: white;
  border-bottom: 1px solid #D3DADB;
  margin: 10px 0;
  padding:5px 15px;
}
ul{
  margin: 10px 6px;
  padding: 0;
}
.for_content{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0 0 0 ;
  font-size: 13px;
  line-height: 21px;
  color: #333;
}
.for_footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.left{
  margin-top: 15px;
  text-transform: capitalize;
  color: #626675;
  font-size: 13px;
  line-height: 21px;
}
.right{
  font-size: 12px;
  margin-top: 15px;
  text-transform: capitalize;
  color: #999;
  float: right;
}
.search_header{
  margin-top: 130px;
}
.header_style{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.active{
  color: #08c;
  font-size: 15px;
  font-weight: 700;
}
.ant-btn{
  border: none;
  margin: 0;
  border-radius: 6px;
  color: #fff!important;
  background-color: #409EFF;
  border-color: #409EFF;
  height: 24px;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.499;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
}
a:hover{
  color: #005985;
}
.Filters > span{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer
}
.Filters > span:hover{
  background-color: #f9f9f9;
}
.bottom_layer{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  z-index: 302;
  bottom: 0;
  left: 0;
  height: 30px;
  padding-top: 1px;
  overflow: hidden;
  zoom: 1;
  margin: 0;
  line-height: 39px;
  background: #fff;
}
.bottom_layer > p{
  margin: 0;
}
.bottom_layer > p >a{
  color: #bbb;
  font-size: 12px;
  text-decoration: none;
}
.demonstration{
  ine-height: 39px;
  font-size: 13px;
  color: #9195a3;
}
.container{
  display: flex;
  width: 520px;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: space-between;
}
.navigation{
  width: 112px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none!important;
}
.navigation:hover{
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;
}
.navigation > .tile-icon{
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color:rgba(222,222,222,1);
  border-radius: 50%;
}
.navigation > .tile-title{
  align-items: center;
  color: rgba(0,0,0,1);
  margin-top: 6px;
  padding: 2px 8px;
  width: 88px;
  display: flex;
  justify-content: center;
}
.tile-title > span{
  font-size: 12px;
}
.el-pagination {
  margin: 20px 0px;
}
.input_top{
  margin-top: 28px;
}
.el-pagination.is-background {
  display: flex;
  justify-content: center;
}
</style>
