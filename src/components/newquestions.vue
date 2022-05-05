<template>
<div>
  <toolbar/>
  <el-row type="flex"  justify="space-around" class="questions">
    <el-col :span="16" class="left">
      <h5>标题</h5>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <h5>内容</h5>
      <div>
        <v-md-editor v-model="text"  height="500px"></v-md-editor>
      </div>
    </el-col>
    <el-col :span="7" class="right">
      <h5 class="h5_title">标签</h5>
      <div class="mark_selection">
        <div class="mark_selection_title_el_tag">
          <span class="tips_tag">
            <span class="span_add"><i class="el-icon-plus" @click="mark_tags_box"></i></span>
            <div v-show="this.tagsvalue.length">
              <el-tag type="info" v-show="this.tagsvalue.length >= 1">{{tagsvalue[0]}}</el-tag>
              <el-tag type="info" v-show="this.tagsvalue.length >= 2">{{tagsvalue[1]}}</el-tag>
              <el-tag type="info" v-show="this.tagsvalue.length >= 3">{{tagsvalue[2]}}</el-tag>
            </div>
            <span v-show="this.tagsvalue.length === 0">至少添加一个标签</span>
          </span>
        </div>
      </div>
      <div class="mark_selection_box" v-show="mark_selection_box">
        <div class="mark_selection_box_body_title">
          标签 <span class="el-icon-close" @click="mark_selection_box = false"></span>
        </div>
        <el-select v-model="tagsvalue" :multiple-limit="3" :multiple="true" placeholder="请选择" >
          <el-option
              v-for="item in options"
              @click.native = 'tags'
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <div>
          <div>大工程，未完成</div>
        </div>
      </div>
      <div class="btns_wrap">
        <span>提交问题</span>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import toolbar from './toolbar.vue'
export default {
  name: "newquestions",
  components: {
    toolbar,
  },
  mounted() {
    document.querySelector('.v-md-editor').style.height = document.body.offsetHeight - 260 + 'px'
  },
  data() {
    return {
      input: '',
      text: '###### 问题遇到的现象和发生背景 \n' +
          '\n' +
          '###### 问题相关代码，请勿粘贴截图 \n' +
          '\n' +
          '###### 运行结果及报错内容 \n' +
          '\n' +
          '###### 我的解答思路和尝试过的方法 \n' +
          '\n' +
          '###### 我想要达到的结果',
      mark_selection_box:false,
      options: [{
        value: 'JavaScript',
        label: 'JavaScript'
      }, {
        value: 'HTMl5',
        label: 'HTMl5'
      }, {
        value: 'Css3',
        label: 'Css3'
      }, {
        value: 'PHP',
        label: 'PHP'
      }, {
        value: 'MySql',
        label: 'MySql'
      }],
      tagsvalue: [],
    }
  },
  methods:{
    tags() {

    },
    mark_tags_box(){
      this.mark_selection_box = true
    },
  }
}
</script>

<style scoped>
.questions{
  padding: 0 5%;
  background: #f5f7f8;
  min-height: calc(100vh - 48px);
}
.questions > div{
  margin-top: 10px;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
}
.left{
  padding: 0 20px 12px;
}
.right{
  padding: 0 20px 12px;
}
.h5_title{
  margin-top: 20px;
  margin-bottom: 16px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: #222226;
  line-height: 24px;
}
.mark_selection{
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f2;
  min-height: 24px;
  position: relative;
}
.mark_selection_title_el_tag{
  text-align: center;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
}
.tips_tag{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  font-size: 14px;
}
.span_add{
  display: inline-block!important;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #ebf2f7;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 10px;
}
.btns_wrap{
  width: 100%;
  height: 84px;
  background: #fff;
  bottom: 0;
  left: 0;
  text-align: center;
}
.btns_wrap >span{
  margin-top: 24px;
  text-align: center;
  display: inline-block;
  width: 202px;
  height: 36px;
  background: #409EFF;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 36px;
  border-radius: 18px;
  cursor: pointer;
}
.mark_selection_box{
  position: absolute;
  top:72px;
  left: -564px;
  width: 560px;
  height: 370px;
  margin: auto;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  border: 1px solid #ccccd8;
  z-index: 1900;
}
.mark_selection_box_body_title{
  position: relative;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #222226;
}
.mark_selection_box_body_title >span{
  position: absolute;
  top: 14px;
  right: 16px;
  cursor: pointer;
}
.el-select{
  width: 528px;
  margin-left: 15px;
  margin-bottom: 10px;
}
.el-select__tags{
  position: absolute;
  line-height: normal;
  white-space: normal;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
}
.el-tag{
  margin-left: 5px;
}
.v-md-editor{
  box-shadow:none;
}


.vuepress-markdown-body h1{ font-size: 28px; }
.vuepress-markdown-body h2{ font-size: 26px; }
.vuepress-markdown-body h3{ font-size: 24px; }
.vuepress-markdown-body h4{ font-size: 22px; }
.vuepress-markdown-body h5{ font-size: 20px; }
.vuepress-markdown-body:not(.custom){padding: 5px 10px!important;}
</style>