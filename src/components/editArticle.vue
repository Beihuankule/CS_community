<template>
  <div id="newArticle">
    <toolbar/>
    <div class="article_bg">
      <div class="article_content">
        <div class="article_content_title">
          <div class="article_title">
            <div class="pos-box">
              <pre class="input__title_pre"></pre>
              <div class="input__title">
                <textarea v-model="textdata" autocomplete="off" id="txtTitle" :placeholder="title" autofocus="autofocus" maxlength="100" class="el-textarea__inner" style="resize: none; min-height: 32px;"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="article_content_md">
          <v-md-editor v-model="text"  height="800px"></v-md-editor>
        </div>
      </div>
      <div class="article_attribute">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="封面&摘要">
            <div class="cover-count">
              <div class="cover_head_img_box">
                <el-upload
                    action="#"
                    :limit="1"
                    ref="upload"
                    accept=".jpg,.jpeg,.png,.JPG,.PNG"
                    :http-request="httpRequest"
                    :before-upload="beforeUpload"
                    list-type="picture-card"
                    :auto-upload="false"
                    :file-list="uploadFiles"
                    :on-exceed="handleExceed"
                    :on-change="loadJsonFromFile"
                    :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <!--                :headers="imgUpload.headers"-->
                <!--              <el-dialog :visible.sync="dialogVisible" >-->
                <!--                <img width="100%" :src="dialogImageUrl" alt="">-->
                <!--              </el-dialog>-->
              </div>
              <div class="desc-box">
                <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="textarea"
                    :rows="6"
                    resize="none"
                    maxlength="256"
                    show-word-limit
                >
                </el-input>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="文章标签">
            <el-radio-group v-model="form.label">
              <el-tag type="info" v-show="this.tagsvalue.length >= 1">{{tagsvalue[0]}}</el-tag>
              <el-tag type="info" v-show="this.tagsvalue.length >= 2">{{tagsvalue[1]}}</el-tag>
              <el-tag type="info" v-show="this.tagsvalue.length >= 3">{{tagsvalue[2]}}</el-tag>
              <el-button  @click="dialogVisible = true" class="tag__btn-tag"><i class="el-icon-plus"></i><span>添加文章标签</span></el-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章类型">
            <el-radio-group v-model="form.Article_type">
              <el-radio label="原创"></el-radio>
              <el-radio label="转载"></el-radio>
              <el-radio label="翻译"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="发布形式">
            <el-radio-group v-model="form.Release">
              <el-radio label="全部可见"></el-radio>
              <el-radio label="仅我可见"></el-radio>
              <el-radio label="粉丝可见"></el-radio>
              <el-radio label="VIP可见"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="内容等级">
            <el-radio-group v-model="form.Content_level">
              <el-radio label="初级"></el-radio>
              <el-radio label="中级"></el-radio>
              <el-radio label="高级"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="newArticle">发布文章</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>



        <el-dialog
            title="标签"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
          <el-select v-model="tagsvalue" :multiple-limit="3" :multiple="true" placeholder="请选择" >
            <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.label_name"
                :value="item.label_name">
            </el-option>
          </el-select>
          <div class="el-tabs__content">
            <div class="el-tab-pane">
              <span class="el-tag el-tag--light"  v-for="item in options" :key="item.id" @click="addTag(item)">{{ item.label_name }}</span>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from './toolbar.vue'
export default {
  name: "newArticle",
  components: {
    toolbar,
  },
  data(){
    return{
      //封面上传
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      uploadFiles:[],
      fileList: [],
      textdata:'',
      title:'请输入文章标题（5～100个字）',
      //文章标签
      tagsvalue:[],
      mark_selection_box:false,
      textarea:'',
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
      form: {
        Article_type: '原创',
        Content_level:'初级',
        Release:'全部可见',
        label:'',
      },
      text:'\n' +
          '# 前言\n' +
          '`提示：这里可以添加本文要记录的大概内容：`\n' +
          '\n' +
          '例如：随着人工智能的不断发展，机器学习这门技术也越来越重要，很多人都开启了学习机器学习，本文就介绍了机器学习的基础内容。\n' +
          '\n' +
          '---\n' +
          '\n' +
          '`提示：以下是本篇文章正文内容，下面案例可供参考`\n' +
          '\n' +
          '# 一、pandas是什么？\n' +
          '示例：pandas 是基于NumPy 的一种工具，该工具是为了解决数据分析任务而创建的。\n' +
          '\n' +
          '# 二、使用步骤\n' +
          '## 1.引入库\n' +
          '代码如下（示例）：\n' +
          '\n' +
          '```c\n' +
          'import numpy as np\n' +
          'import pandas as pd\n' +
          'import matplotlib.pyplot as plt\n' +
          'import seaborn as sns\n' +
          'import warnings\n' +
          'warnings.filterwarnings(\'ignore\')\n' +
          'import  ssl\n' +
          'ssl._create_default_https_context = ssl._create_unverified_context\n' +
          '```\n' +
          '\n' +
          '## 2.读入数据\n' +
          '代码如下（示例）：\n' +
          '```c\n' +
          'data = pd.read_csv(\n' +
          '    \'https://labfile.oss.aliyuncs.com/courses/1283/adult.data.csv\')\n' +
          'print(data.head())\n' +
          '```\n' +
          '该处使用的url网络请求的数据。\n' +
          '\n' +
          '---\n' +
          '\n' +
          '# 总结\n' +
          '提示：这里对文章进行总结：\n' +
          '例如：以上就是今天要讲的内容，本文仅仅简单介绍了pandas的使用，而pandas提供了大量能使我们快速便捷地处理数据的函数和方法。',
    }
  },
  beforeCreate() {
    this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBaseLabel/getLabelData').then(res=>{
      this.options = res.data.obj
    })
  },
  methods: {
    httpRequest(option) {
      this.fileList.push(option)
    },
    beforeUpload(file) {
      let fileSize = file.size
      const FIVE_M= 5*1024*1024;
      //大于5M，不允许上传
      if(fileSize>FIVE_M){
        this.$message.error("最大上传5M")
        return  false
      }
      return true
    },
    handleExceed() {
      this.$message({ type: 'error', message: '最多支持1张封面图片上传' })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    loadJsonFromFile(file, fileList) {
      this.uploadFiles = fileList
    },
    newArticle(){
      // let cover_field = this.uploadFiles[0].raw
      //文章等级
      let article_grade = this.form.Content_level
      //文章类型
      let article_type = this.form.Article_type
      //内容
      let content = this.text
      //摘要
      let cover_abstract = this.textarea
      //发布形式
      let release_type = this.form.Release
      //标题
      let title = this.textdata
      //标签
      let label = ''
      for (var i=0;i<this.tagsvalue.length;i++)
      {
        label =  label + this.tagsvalue[i] + '   '
      }
      console.log(release_type)
      // console.log(cover_field)
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBlog/addBlogArticle', {article_grade,article_type,content,cover_abstract,release_type,title,label}).then(res=>{
        console.log(res)
      })
      // this.$refs.upload.submit()
      // console.log(this.$refs.upload)

      // let fd = new FormData();
      // fd.append(cover_field, this.uploadFiles[0].raw)
      // fd.append(article_grade, this.form.Content_level)
      // fd.append(article_type, this.form.Article_type)
      // fd.append(content, this.text)
      // fd.append(cover_abstract, this.textarea)
      // fd.append(Release, this.form.Release)
      // fd.append(title, this.textdata)
      // fd.append(label, label)
      //
      //
      // fetch('http://192.168.199.209:8081/cs_ow/owBlog/addBlogArticle',{
      //   method: 'post',
      //   data: fd,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     'csToken' : 'ef03c69993ff4459b6b81bc33820f47b'
      //   }
      // }).then(({ data }) => {
      //   console.log(data)
      // })
      //

      //
      // //  console.log(title)
      // //  console.log(article_grade)
      // /*{cover_field,article_grade,article_type,content,cover_abstract,Release,title,label}*/
      // console.log(cover_field)
      //  this.$ajax.post('http://192.168.199.209:8081/cs_ow/owBlog/addBlogArticle', fd).then(res=>{
      //    console.log(res)
      //  })
    },
    handleClose(done) {
      done();
    },
    addTag(item){
      console.log(this.tagsvalue.indexOf(item.label_name))
      if (this.tagsvalue.length < 3 && this.tagsvalue.indexOf(item.label_name) === -1){

        this.tagsvalue.push(item.label_name)
      }

      console.log(this.tagsvalue)
    }
  }
}
</script>

<style scoped>
.article_content{
  background-color: white;
  width: 1216px;
  margin: 0 auto;
}
.article_bg{
  background-color: #f5f7f8;
  padding: 10px 0;
  width: 100%;
  min-height: calc(100vh - 48px);
}
.article_content_title{
  padding: 32px 64px 24px 64px;
}
.article_title{
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.pos-box{
  position: relative;
}
.input__title_pre{
  visibility: hidden;
  padding-right: 48px;
  box-sizing: content-box;
  min-height: 36px;
  line-height: 32px;
  font-size: 23px;
  font-weight: 600;
  word-break: break-all;
  white-space: pre-wrap;
}
.input__title{
  border-bottom: 1px solid #e8e7e8;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  padding-right: 48px;
  display: inline-block;
  width: 93%;
  vertical-align: bottom;
  font-size: 14px;
}
.el-textarea__inner{
  resize: none;
  min-height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: none;
  padding-right: 48px;
  line-height: 32px;
  font-size: 23px;
  font-weight: 600;
  word-break: break-all;
  white-space: pre-wrap;
  color: #606266;
  background-color: #fff;
  background-image: none;
}
.v-md-editor{
  box-shadow:none;
}
.article_content_md{
  padding: 0 8px;
}
.article_attribute{
  position: relative;
  background-color: white;
  min-height: 200px;
  margin: 15px auto;
  width: 1116px;
  border-radius: 4px;
  text-align: left;
  padding: 10px 50px;
}
.article_attribute > div{
  margin-top: 16px;
  margin-bottom: 8px;
}
.tag__btn-tag{
  padding: 0 8px;
  height: 28px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e8e8ee;
  color: #555666;
  line-height: 26px;
  font-size: 14px;
}
.cover-count{
  display: flex;
  width: 100%;
}
.cover_head_tip{
  margin-top: 8px;
  font-size: 12px;
  color: #999aaa;
}
.cover_head_img{
  position: relative;
  width: 160px;
  height: 90px;
  display: inline-block;
  border: none;
  vertical-align: top;
  text-align: center;
  line-height: 105px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-right: 24px;
}
.cover_head_img_hover{
  width: 160px;
  height: 90px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  background: #fff;
  border: 1px dashed #bfbfbf;
  border-radius: 4px;
}
.cover_head_img_hover:hover{
  background: #f5f5f5;
}
.add_tag{
  color: #999;
  font-size: 24px;
}
.desc-box{
  width: 68%;
  height: 130px;
}
.el-textarea{
  height: 100% ;
}
.cover_head_img_box{
  margin-right: 20px;
}
.mark_selection_box{
  position: absolute;
  top: 20px;
  left: 450px;
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
  width: 100%;
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
span.el-tag.el-tag--info.el-tag--light {
  margin-right: 10px;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.el-tab-pane > span{
  padding: 0 8px;
  height: 24px;
  background-color: #ebf2f7;
  border-radius: 2px;
  font-weight: 400;
  color: #507999;
  line-height: 24px;
  cursor: pointer;
  margin-right: 16px;
  margin-bottom: 16px;
  border: none;
  font-size: 13px!important;
}
</style>