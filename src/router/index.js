import Vue from 'vue'     //引入vue
import VueRouter from "vue-router";
Vue.use(VueRouter)   //安装vue-router
import Search  from '../components/Search.vue'//搜索页面
import blog  from '../components/blog.vue'//博客页面
import PersonalBlog  from '../components/PersonalBlog.vue'//博客页面
import article  from '../components/article.vue'//博客文章页面
import newArticle  from '../components/newArticle.vue'//新建文章
import home  from '../components/home.vue'//主页
import doc  from '../components/doc.vue'//文档页面
import newquestions  from '../components/newquestions.vue'//新问题
import questions  from '../components/questions.vue'//问题
import login  from '../components/login.vue'//登陆页面
import authentication  from '../components/authentication.vue'//认证页面
import QA  from '../components/QA.vue'//问答页面
import curriculum  from '../components/curriculum.vue'//课程页面
import practice  from '../components/practice.vue'//练习页面
import Nopage  from '../components/err.vue'   // 引入找不到路径的时候展示的页面

let routes = [     // 打造路由规则
    {
        name:'home',     // 命名路由
        path:'/home',   // 匹配路径
        component:home,  // 展示页面
        props:(route) => {     //  路由props
            //console.log(route);
            return  {
                ...route.params
            }
        },
    },
    {
        name:'QA',
        path:'/QA',
        component:QA,
    },
    {
        name:'article',
        path:'/article',
        component:article,
    },
    {
        name:'PersonalBlog',
        path:'/PersonalBlog',
        component:PersonalBlog,
    },
    {
        name:'newArticle',
        path:'/newArticle',
        component:newArticle,
    },
    {
        name:'login',
        path:'/login',
        component:login
    },
    {
        name:'newquestions',
        path:'/newquestions',
        component:newquestions
    },
    {
        name:'questions',
        path:'/questions/:id',
        component:questions
    },
    {
        name:'authentication',
        path:'/authentication',
        component:authentication
    },
    {
        name:'curriculum',
        path:'/curriculum',
        component:curriculum
    },
    {
        name:'practice',
        path:'/practice',
        component:practice
    },
    {
        name:'blog',
        path:'/blog',
        component:blog
    },
    {
        name:'doc',
        path:'/doc',
        component:doc
    },
    {
        name:'Search',
        path:'/Search',
        component:Search
    },
    {
        path:'/',          //匹配到 /
        redirect:'/home',    // 重定向到 /a
    },
    {
        path:'*',         // 上面所有路径都找不到
        component:Nopage   // 展示丢失页面
    },
]
let router = new VueRouter({      // 打造路由实例
    routes,
    linkActiveClass:'toolbar_active'     //  定义激活时候的class 名字
})

export default router