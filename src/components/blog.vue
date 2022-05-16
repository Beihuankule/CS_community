<template>
  <div id="blog">
    <toolbar/>
    <div class="blog_bg">
      <div class="home_wrap" >
<!--        头部区域-->
        <div class="blog_nav">
          <div class="blog-nav-box">
            <ul>
              <li>
                <a href="">先加载出来</a>
              </li>
              <li>
                <a href="">再分类</a>
              </li>
              <li>
                <a href="">前端</a>
              </li>
              <li>
                <a href="">后端</a>
              </li>
              <li>
                <a href="">JavaScript</a>
              </li>
              <li>
                <a href="">HTML5</a>
              </li>
              <li>
                <a href="">Css3</a>
              </li>
              <li>
                <a href="">PHP</a>
              </li>
              <li>
                <a href="">推荐</a>
              </li>
              <li>
                <a href="">关注</a>
              </li>
              <li>
                <a href="">前端</a>
              </li>
              <li>
                <a href="">后端</a>
              </li>
              <li>
                <a href="">JavaScript</a>
              </li>
              <li>
                <a href="">HTML5</a>
              </li>
              <li>
                <a href="">Css3</a>
              </li>
              <li>
                <a href="">PHP</a>
              </li>
            </ul>
          </div>
        </div>
<!--        内容区域-->
        <div class="blog_index" >
          <div class="left" v-infinite-scroll="onLoad"
               infinite-scroll-distance="1"
               infinite-scroll-immediate-check="false"
               infinite-scroll-disabled="false"
               infinite-scroll-immediate="true">
<!--            文章列表-->
            <div class="Community">
              <div class="active_blog" v-for="(item,index) in list"  :key="index">
                <div class="Community-item-active">
<!--                  上方标题-->
                  <router-link  :to="/article/+(item.id)" class="active_title">{{item.title}}</router-link >
<!--                  下方内容-->
                  <div class="active_content">
<!--                    左侧文章图片-->
                    <div class="active_left">
                      <router-link  :to="/article/+(item.id)" >
                        <img src="https://img2.baidu.com/it/u=3542822865,178316978&fm=253&fmt=auto&app=138&f=JPEG?w=412&h=186" alt="">
                      </router-link>
                    </div>
<!--                    内容简介-->
                    <div class="active_right">
                      <router-link  :to="/article/+(item.id)">
                        <p>
                          {{item.cover_abstract}}
                        </p>
                      </router-link>
                      <div class="operation">
                        <div class="operation_icon">
                          <p><i class="iconfont icon-dianzan"></i> 1.2K 赞</p>
                          <p><i class="el-icon-time"></i> {{ item.create_date }}</p>
                        </div>
                        <div>
                          <a href="">
                            <span class="user_name">{{ item.create_user }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<!--          右边推荐列-->
          <div class="right">
<!--            作者推荐-->
            <div class="template">
              <div class="template-title">
                <span>作者推荐</span>
              </div>
              <div class="template-cont ">
                <div class="recommendation">
                  <a href=""><img src="https://img1.baidu.com/it/u=1126564427,3157831871&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501" alt=""></a>
                  <dl>
                    <dt><a href="">Johnson</a></dt>
                    <dd>《后端工程师》</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://img1.baidu.com/it/u=805747545,363279269&fm=253&fmt=auto&app=138&f=JPEG?w=318&h=298" alt=""></a>
                  <dl>
                    <dt><a href="">山哥</a></dt>
                    <dd>全栈高级工程师</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://img1.baidu.com/it/u=1960857060,182460086&fm=253&fmt=auto&app=120&f=JPEG?w=703&h=500" alt=""></a>
                  <dl>
                    <dt><a href="">龍尐</a></dt>
                    <dd>九球天后</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://img2.baidu.com/it/u=1564667873,597951830&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt=""></a>
                  <dl>
                    <dt><a href="">梦幻小子</a></dt>
                    <dd>架构师</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://img2.baidu.com/it/u=3667804120,2819862792&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=388" alt=""></a>
                  <dl>
                    <dt><a href="">牧童</a></dt>
                    <dd>软件测试</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
              </div>
            </div>
<!--            热门推荐-->
            <div class="template">
              <div class="template-title">
                <span>热门推荐</span>
              </div>
              <div class="template-cont">
                <div class="template_bottom">
                  <a href="" class="template-blog">
                    <img class="template-blog-left" src="https://img2.baidu.com/it/u=3542822865,178316978&fm=253&fmt=auto&app=138&f=JPEG?w=412&h=186" alt="">
                    <p class="template-blog-right">团队合作和可访问性实践</p>
                  </a>
                </div>
                <div class="template_bottom">
                  <a href="" class="template-blog">
                    <img class="template-blog-left" src="https://img2.baidu.com/it/u=3542822865,178316978&fm=253&fmt=auto&app=138&f=JPEG?w=412&h=186" alt="">
                    <p class="template-blog-right">与选项卡绑定值 value 对应的标识符，表示选项卡别名</p>
                  </a>
                </div>
              </div>
            </div>
<!--            官方博客-->
            <div class="template">
              <div class="template-title">
                <span>官方博客</span>
                <a href="">官方账号入驻</a>
              </div>
              <div class="template-cont ">
                <div class="recommendation">
                  <a href=""><img src="https://t9.baidu.com/it/u=492875650,3128397426&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1651165200&t=a7f9e106d3ee12eaaa036b8080757264" alt=""></a>
                  <dl>
                    <dt><a href="">特斯拉</a></dt>
                    <dd>特斯拉（Tesla），是美国一家电动汽车及能源公司，特斯拉市值达2100亿美元，产销电动汽车、太阳能板、及储能设备。总部位于帕洛阿托（Palo Alto），2003年7月1日，由马丁·艾伯哈德和马克·塔彭宁共同创立，创始人将公司命名为“特斯拉汽车”，以纪念物理学家...</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://t9.baidu.com/it/u=492875650,3128397426&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1651165200&t=a7f9e106d3ee12eaaa036b8080757264" alt=""></a>
                  <dl>
                    <dt><a href="">特斯拉</a></dt>
                    <dd>特斯拉（Tesla），是美国一家电动汽车及能源公司，特斯拉市值达2100亿美元，产销电动汽车、太阳能板、及储能设备。总部位于帕洛阿托（Palo Alto），2003年7月1日，由马丁·艾伯哈德和马克·塔彭宁共同创立，创始人将公司命名为“特斯拉汽车”，以纪念物理学家...</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://t9.baidu.com/it/u=492875650,3128397426&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1651165200&t=a7f9e106d3ee12eaaa036b8080757264" alt=""></a>
                  <dl>
                    <dt><a href="">特斯拉</a></dt>
                    <dd>特斯拉（Tesla），是美国一家电动汽车及能源公司，特斯拉市值达2100亿美元，产销电动汽车、太阳能板、及储能设备。总部位于帕洛阿托（Palo Alto），2003年7月1日，由马丁·艾伯哈德和马克·塔彭宁共同创立，创始人将公司命名为“特斯拉汽车”，以纪念物理学家...</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://t9.baidu.com/it/u=492875650,3128397426&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1651165200&t=a7f9e106d3ee12eaaa036b8080757264" alt=""></a>
                  <dl>
                    <dt><a href="">特斯拉</a></dt>
                    <dd>特斯拉（Tesla），是美国一家电动汽车及能源公司，特斯拉市值达2100亿美元，产销电动汽车、太阳能板、及储能设备。总部位于帕洛阿托（Palo Alto），2003年7月1日，由马丁·艾伯哈德和马克·塔彭宁共同创立，创始人将公司命名为“特斯拉汽车”，以纪念物理学家...</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
                <div class="recommendation">
                  <a href=""><img src="https://t9.baidu.com/it/u=492875650,3128397426&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1651165200&t=a7f9e106d3ee12eaaa036b8080757264" alt=""></a>
                  <dl>
                    <dt><a href="">特斯拉</a></dt>
                    <dd>特斯拉（Tesla），是美国一家电动汽车及能源公司，特斯拉市值达2100亿美元，产销电动汽车、太阳能板、及储能设备。总部位于帕洛阿托（Palo Alto），2003年7月1日，由马丁·艾伯哈德和马克·塔彭宁共同创立，创始人将公司命名为“特斯拉汽车”，以纪念物理学家...</dd>
                  </dl>
                  <div class="recommendation-btn ">关注</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from "./toolbar";

export default {
  name: 'blog',
  components: {
    toolbar
  },
  data() {
    return {
      data:[],
      list:[],
      listParams: {
        pageNum: 1,
        pageSize:10,
        loading: false,
        error: false,
        finished: false,
      },
    }
  },
  created() {
    this.getDemoList();

  },
  computed: {
    disabled() {
      // console.log(
      //     this.listParams.loading || this.listParams.finished
      // );
      return this.listParams.loading || this.listParams.finished;
    },
  },
  methods:{
    getDemoList(){
      var that = this;
      this.$ajax.post('http://192.168.199.209:8081/cs_ow/dontLoginBlog/getBlogList',{page:this.listParams.pageNum,rows:this.listParams.pageSize}).then(res=>{
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
    onLoad() {
      this.listParams.loading = true;
      if (this.listParams.finished === false) {
        this.listParams.pageNum++;
        // alert(1)
        this.getDemoList();
      }
    },
  }

};
</script>

<style scoped>
dd{
  margin: 0;
}
li, ol, ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.blog_bg{
  background-color: #f5f7f8;
  width: 100%;
  min-height: calc(100vh - 48px);
}
.home_wrap{
  width: 1280px;
  margin: 0 auto;
  padding-top: 16px;
  -webkit-font-smoothing: antialiased;
}
.blog_nav{
  width: 100%;
  height: 72px;
  display: flex;
  -webkit-box-align: start;
  align-items: flex-start;
  background: #fff;
  position: relative;
}
.blog-nav-box{
  width: 100%;
  padding: 24px 24px 0;
  background: #fff;
  overflow: hidden;
  max-height: 48px;
}
.blog-nav-box > ul{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 8px;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
}
.blog-nav-box > ul >li{
  margin-right: 31px;
}
.blog-nav-box > ul >li >a{
  font-size: 15px;
  font-weight: 400;
  color: #222226;
}
.blog_index{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 14px;
}
.left{
  width: 890px;
}
.Community{
  background-color: white;
  margin-bottom: 10px;
}
.right{
  width: 338px;
}
.right > div{
  background-color: white;
  border-radius: 2px;
  border: 1px solid #e8e8ed;
  margin-bottom: 16px;
}
.Community-item-active{
  padding: 15px 10px 0;
}
.active_title{
  font-size: 18px;
  font-weight: 500;
  color: #222226;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 25px;
}
.active_left > a{
  position: relative;
  border-radius: 2px;
  width: 134px;
  height: 84px;
  display: inline-block;
  background-position: 50%;
  border: 1px solid #f5f6f7;
  overflow: hidden;
  background: #f5f6f7;
}
.active_left > a >img{
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: auto;
  position: absolute;
}
.active_right{
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-left: 20px;
}
.active_right > a > p{
  font-size: 14px;
  font-weight: 400;
  color: #555666;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.active_content {
  display: flex;
  align-items: center;
}
.operation{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.operation_icon{
  display: flex;
}
.operation_icon > p{
  margin-right: 10px;
  min-width: 22px;
  text-align: start;
  font-size: 14px;
  padding-right: 24px;
  color: #555666;
  line-height: 20px;
}
.user_name{
  font-size: 14px;
  color: #555666;
  font-weight: 400;
}
.template-title{
  height: 48px;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 48px;
  color: #222226;
  border-bottom: 1px solid #e8e8ed;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.template-title > a{
  font-size: 14px;
  font-weight: 400;
  color: #277ccc;
}
.template-cont{
  padding: 24px 24px 8px;
}
.recommendation{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  font-size: 14px;
  margin-bottom: 16px;
}
.recommendation > a{
  position: relative;
}
.recommendation > a >img{
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #e8e8ed;
  margin-right: 8px;
}
.recommendation >dl{
  -webkit-box-flex: 1;
  flex: 1;
}
.recommendation >dl >dt{
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.recommendation >dl >dt >a{
  font-weight: 400;
  color: #222226;
}
.recommendation >dl >dd{
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 12px;
  color: #999aaa;
}
.recommendation >div{
  cursor: pointer;
  text-align: center;
  width: 48px;
  height: 24px;
  background: #fff;
  line-height: 24px;
  border-radius: 12px;
  border: 1px solid #ccccd8;
  font-size: 12px;
  margin-left: 16px;
}
.template-blog-left{
  width: 100px;
  height: 58px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 8px;
}
.template-blog-right{
  margin-top: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #222226;
  line-height: 22px;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  -webkit-box-flex: 1;
  flex: 1;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.template-blog{
  font-size: 0;
  align-items: flex-start;
  display: flex;
  -webkit-box-align: start;
}
.template_bottom{
  margin-bottom: 16px;
}
</style>
