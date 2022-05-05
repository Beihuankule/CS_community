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
              <a href="">
                <span class="name">双龙</span>
              </a>
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
            <h1>axios发送请求时如何携带token </h1>
          </div>
<!--          版权信息-->
          <div class="article-info-box">
            <div class="article-bar-top">
              <i>[图片]</i>
              <div class="Article_Information">
<!--                作者姓名-->
                <a href="">双龙</a>
<!--                更新时间-->
                <span><i class="el-icon-time"></i> 于 2022-04-27 17:57:10 发布</span>
                <span><i class="el-icon-view"></i> 200</span>
                <span><i class="el-icon-star-off"></i> 收藏</span>
              </div>
            </div>
            <div class="blog-tags-box">
              <div class="tags-box">
                <span>文章标签:</span>
                <a href="">前端</a>
                <a href="">后端</a>
              </div>
            </div>
          </div>
        </div>
<!--        文章内容-->
        <article class="ArticleContent">
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
        </article>
<!--        底部关注与其他-->
        <div class="more-toolbox">
          <div class="left-toolbox">
<!--            头像/姓名/关注-->
            <div class="toolbox-left">
              <div class="profile-box">
                <a href="" class="profile-href">
                  <img class="profile-img" src="https://www.beihuankule.com/media/avatars/7.png" alt="">
                  <span class="profile-name">双龙</span>
                </a>
              </div>
              <div class="profile-attend">
                <a href="" class="tool-attend">关注</a>
              </div>
            </div>
<!--            点赞/评论/收藏-->
            <div class="toolbox-middle">
              <ul class="toolbox-list">
                <li>
                  <span><i class="iconfont icon-dianzan"></i>点赞(1)</span>
                </li>
                <li>
                  <span><i class="iconfont icon-cai"></i></span>
                </li>
                <li>
                  <span><i class="el-icon-chat-dot-square"></i>评论(1)</span>
                </li>
                <li>
                  <span><i class="el-icon-star-off"></i>收藏</span>
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
          <span>评论 1</span>
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
              <template slot="append">评论</template>
            </el-input>
          </div>
        </div>
<!--        评论列表-->
        <div class="comment-list-container">
          <div class="comment-list-box">
            <ul class="comment-list">
<!--              主评论-->
              <li class="comment-line-box">
                <div class="comment-list-item">
<!--                  评论人头像-->
                  <a href="" class="comment-list-href"><img src="https://www.beihuankule.com/media/avatars/7.png" alt="" class="avatar"></a>
<!--                  评论内容-->
                  <div class="comment-list-right">
                    <div class="comment-top">
                      <div class="user-box">
                        <a href=""><span class="user_name">梦幻小子</span></a>
                        <span>2022.04.28</span>
                      </div>
                      <div class="comment-like">
                        <span @click="reply_input = !reply_input"><i class="el-icon-chat-line-square"></i> 回复 </span>
                        <span><i class="iconfont icon-dianzan"></i> 点赞 </span>
                      </div>
                    </div>
                    <div class="comment-center">
                      <div class="new-comment">点赞评论加关注</div>
                    </div>
                    <div class="reply_input" v-show="reply_input">
                      <el-input placeholder="回复@梦幻小子" v-model="comment">
                        <template slot="append">回复</template>
                      </el-input>
                    </div>
                  </div>
                </div>
              </li>
<!--              子评论-->
              <li class="replay-box">
                <ul>
                </ul>
              </li>
            </ul>
            <ul class="comment-list">
              <!--              主评论-->
              <li class="comment-line-box">
                <div class="comment-list-item">
                  <!--                  评论人头像-->
                  <a href="" class="comment-list-href"><img src="https://www.beihuankule.com/media/avatars/7.png" alt="" class="avatar"></a>
                  <!--                  评论内容-->
                  <div class="comment-list-right">
                    <div class="comment-top">
                      <div class="user-box">
                        <a href=""><span class="user_name">梦幻小子</span></a>
                        <span>2022.04.28</span>
                      </div>
                      <div class="comment-like">
                        <span @click="reply_input = !reply_input"><i class="el-icon-chat-line-square"></i> 回复 </span>
                        <span><i class="iconfont icon-dianzan"></i> 点赞 </span>
                      </div>
                    </div>
                    <div class="comment-center">
                      <div class="new-comment">点赞评论加关注</div>
                    </div>
                    <div class="reply_input" v-show="reply_input">
                      <el-input placeholder="回复@梦幻小子" v-model="comment">
                        <template slot="append">回复</template>
                      </el-input>
                    </div>
                  </div>
                </div>
              </li>
              <!--              子评论-->
              <li class="replay-box">
                <ul>
                  <li class="comment-line-box">
                    <div class="comment-list-item">
                      <!--                  评论人头像-->
                      <a href="" class="comment-list-href"><img src="https://www.beihuankule.com/media/avatars/7.png" alt="" class="avatar"></a>
                      <!--                  评论内容-->
                      <div class="comment-list-right">
                        <div class="comment-top">
                          <div class="user-box">
                            <a href=""><span class="user_name">梦幻小子</span></a>
                            <span>2022.04.28</span>
                          </div>
                          <div class="comment-like">
                            <span @click="reply_input = !reply_input"><i class="el-icon-chat-line-square"></i> 回复 </span>
                            <span><i class="iconfont icon-dianzan"></i> 点赞 </span>
                          </div>
                        </div>
                        <div class="comment-center">
                          <div class="new-comment">点赞评论加关注</div>
                        </div>
                        <div class="reply_input" v-show="reply_input">
                          <el-input placeholder="回复@梦幻小子" v-model="comment">
                            <template slot="append">回复</template>
                          </el-input>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="comment-line-box">
                    <div class="comment-list-item">
                      <!--                  评论人头像-->
                      <a href="" class="comment-list-href"><img src="https://www.beihuankule.com/media/avatars/7.png" alt="" class="avatar"></a>
                      <!--                  评论内容-->
                      <div class="comment-list-right">
                        <div class="comment-top">
                          <div class="user-box">
                            <a href=""><span class="user_name">梦幻小子</span></a>
                            <span>2022.04.28</span>
                          </div>
                          <div class="comment-like">
                            <span @click="reply_input = !reply_input"><i class="el-icon-chat-line-square"></i> 回复 </span>
                            <span><i class="iconfont icon-dianzan"></i> 点赞 </span>
                          </div>
                        </div>
                        <div class="comment-center">
                          <div class="new-comment">点赞评论加关注</div>
                        </div>
                        <div class="reply_input" v-show="reply_input">
                          <el-input placeholder="回复@梦幻小子" v-model="comment">
                            <template slot="append">回复</template>
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
      reply_input:false,
      comment:'',
      webDataString:'#### 1.创建一个 axios1.js 在axios1中进行如下配置:\n' +
          '```javascript\n' +
          'import axios from "axios"; //引入官方的axios\n' +
          '```\n' +
          '```javascript\n' +
          'axios.defaults.withCredentials = true //开启请求时携带token\n' +
          '```\n' +
          '```javascript\n' +
          'import qs from \'qs\';//处理参数\n' +
          '```\n' +
          '```javascript\n' +
          'import router from "./router"; //引入路由,新建一个router目录,在目录下创建一个index.js进行路由配置\n' +
          '```\n' +
          '#### 2.新建一个 vue-storage.js:\n' +
          '在vue-storage.js中写入如下代码\n' +
          '```javascript\n' +
          'import VueCookies from \'vue-cookies\'; //引入vue-cookies\n' +
          '\n' +
          'export const getItem = (name) => {\n' +
          '    // const data = window.localStorage.getItem(name);\n' +
          '    const data = VueCookies.get(name);\n' +
          '    try {\n' +
          '        return JSON.parse(data);\n' +
          '    } catch (err) {\n' +
          '        return data;\n' +
          '    }\n' +
          '};\n' +
          '\n' +
          'export const setItem = (name, value) => {\n' +
          '    if (typeof value === "object") {\n' +
          '        value = JSON.stringify(value);\n' +
          '    }\n' +
          '    // window.localStorage.setItem(name, value);\n' +
          '    VueCookies.set(name, value);\n' +
          '};\n' +
          '\n' +
          'export const removeItem = (name) => {\n' +
          '    // window.localStorage.removeItem(name);\n' +
          '    VueCookies.remove(name);\n' +
          '};\n' +
          '\n' +
          '```\n' +
          '\n' +
          '#### 3.在我们自己的axios(axios1.js)中引入刚刚写好的vue-storage.js\n' +
          '```javascript\n' +
          'import {\n' +
          '    getItem,\n' +
          '    removeItem,\n' +
          '    setItem\n' +
          '} from \'./vue-storage.js\';\n' +
          '```\n' +
          '#### 4.按需是否引入:\n' +
          '//非必要文件\n' +
          '```javascript\n' +
          'import {\n' +
          '    Notification\n' +
          '} from \'element-ui\';\n' +
          '```\n' +
          '#### 5.配置请求路径:\n' +
          '```javascript\n' +
          'const baseURL = "https://xx.xxxxxx.xxx/";\n' +
          'const request = axios.create({\n' +
          '    baseURL: baseURL,\n' +
          '});\n' +
          '```\n' +
          '#### 6.设置请求拦截器:\n' +
          '```javascript\n' +
          '// 请求拦截器\n' +
          '//按照项目实际情况进行配置\n' +
          'request.interceptors.request.use(\n' +
          '    function(config) {\n' +
          '        config.headers[\'content-type\'] = \'application/x-www-form-urlencoded\';\n' +
          '        if(config.url != \'/login/loginAP\'){\n' +
          '            config.headers[\'Token\'] = getItem(\'Token\');\n' +
          '        }\n' +
          '        return config;\n' +
          '    },\n' +
          '    function(error) {\n' +
          '        return Promise.reject(error);\n' +
          '    }\n' +
          ');\n' +
          '\n' +
          '\n' +
          'request.interceptors.response.use(\n' +
          '    // 在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据\n' +
          '    (response) => {\n' +
          '        return response;\n' +
          '    },\n' +
          '    // 任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误\n' +
          '    (error) => {\n' +
          '        if(error == \'Error: Network Error\'){\n' +
          '            Notification({\n' +
          '                title: \'错误\',\n' +
          '                message: "错误",\n' +
          '                type: \'error\'\n' +
          '            });\n' +
          '            return Promise.reject( {success:false,msg:"网络异常"});\n' +
          '        } else {\n' +
          '            if(error.response == undefined){\n' +
          '                setTimeout(function() {\n' +
          '                    router.replace(\'/login\')\n' +
          '                }, 500);\n' +
          '                return;\n' +
          '            }\n' +
          '            const {\n' +
          '                status,\n' +
          '                data,\n' +
          '            } = error.response;\n' +
          '            if (status == 500) {\n' +
          '                if (data.success == false) {\n' +
          '                    if (data.obj.code == \'error0002\') {\n' +
          '                        removeItem("Token");\n' +
          '                        Notification({\n' +
          '                            title: \'错误\',\n' +
          '                            message: data.obj.message,\n' +
          '                            type: \'error\'\n' +
          '                        });\n' +
          '                        console.log("错误输出！");\n' +
          '                        setTimeout(function() {\n' +
          '                            router.replace(\'/login\')\n' +
          '                        }, 500);\n' +
          '                    } else if (data.obj.code == \'error9999\') {\n' +
          '                        return Promise.reject(data);\n' +
          '\n' +
          '                    }\n' +
          '                }\n' +
          '            }\n' +
          '            // 将未处理的异常往外抛\n' +
          '            return Promise.reject(error);\n' +
          '        }\n' +
          '\n' +
          '    }\n' +
          ');\n' +
          '\n' +
          'const post = function(url, data) {\n' +
          '    return request({\n' +
          '        method: "post",\n' +
          '        url: url,\n' +
          '        data: qs.stringify(data)\n' +
          '    });\n' +
          '}\n' +
          'const get = function(url, data) {\n' +
          '    return request({\n' +
          '        method: "get",\n' +
          '        url: url,\n' +
          '        data: qs.stringify(data)\n' +
          '    });\n' +
          '}\n' +
          '\n' +
          'const updateFile = function(url, params) {\n' +
          '    return axios.post(baseURL + url, params, {\n' +
          '        headers: {\n' +
          '            \'Content-Type\': \'multipart/form-data\',\n' +
          '            \'Token\': getItem(\'Token\')\n' +
          '        }\n' +
          '    });\n' +
          '}\n' +
          '\n' +
          'export default {\n' +
          '    post,\n' +
          '    get,\n' +
          '    updateFile,\n' +
          '    getItem,\n' +
          '    removeItem,\n' +
          '    setItem,\n' +
          '    baseURL\n' +
          '};\n' +
          '```\n' +
          '\n' +
          '------------\n' +
          '\n' +
          '我们自己的axios相关配置完毕\n' +
          '\n' +
          '#### 接着在全局main.js进行引入即可:\n' +
          '```javascript\n' +
          'import Vue from \'vue\'\n' +
          'import axios1 from \'./axios1\'\n' +
          '\n' +
          'Vue.prototype.$ajax= axios1//此处不可使用axios进行命名,请使用其他名称挂载到vue原型上\n' +
          '```\n' +
          '\n' +
          '#### 在需要的组件中使用:\n' +
          '```javascript\n' +
          'this.$ajax.get(post)发送相关请求//$ajax为main.js中自定义方法名\n' +
          '```\n' +
          '相关阅读:[vue框架如何配置虚拟域名](https://www.beihuankule.com/article/39/ "vue框架如何配置虚拟域名")',
    }
  },
  components: {
    toolbar
  },
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
  padding-left: 48px;
  display: flex;
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
</style>