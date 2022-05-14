<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//
//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| 2 |||// \
//                     / _||||| -0- |||||- \
//                       | | \\\ 2 /// | |
//                     | \_| ''\-2-/'' | |
//                      \ .-\__ `0` ___/-. /
//                   ___`. .' /--5--\ `. . __
//                ."" '< `.___\_<1>_/___.' >'"".
//               | | : `- \`.;`\ 0 /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑                  永无BUG
//          佛曰:
//                  写字楼里写字间，写字间里程序员；
//                  程序人员写程序，又拿程序换酒钱。
//                  酒醒只在网上坐，酒醉还来网下眠；
//                  酒醉酒醒日复日，网上网下年复年。
//                  但愿老死电脑间，不愿鞠躬老板前；
//                  奔驰宝马贵者趣，公交自行程序员。
//                  别人笑我忒疯癫，我笑自己命太贱；
//                  不见满街漂亮妹，哪个归得程序员？
export default {
  name: 'App',
  components: {
  },
  beforeCreate() {
    //判断是否登陆
    var url = window.location.href;
    var temp = url.split('?')[1];
    var pram = new URLSearchParams('?'+temp);
    // console.log(pram.get('csTmpTicket'));
    let csTmpTicket = pram.get('csTmpTicket')
    // console.log('------------');
    console.log(this.$ajax.getItem("csToken"))
    if(csTmpTicket != "" && csTmpTicket != null && csTmpTicket != undefined){
      this.$ajax.post('https://sx.water-mind.com/cs_s/login/verifyTicket',{csTmpTicket:csTmpTicket}).then(res=>{
        if (res.data.success === true){
          console.log(res)
          let TokenVal = res.data.obj
          this.$ajax.setItem('csToken', TokenVal)
          let newurl = url.split('?')[0]
          window.location.replace(newurl);
          location.reload();
        }else{
          this.loginurl = `https://sx.water-mind.com/cs_devise/#/login?uri=${url}`
        }
      })
    }

    this.$ajax.post('https://sx.water-mind.com/cs_s/login/getLoginInfo').then(res=>{
      this.Current_user = res.data.obj.account
    })
  },
  methods:{

  }
}
</script>

<style>
@import url("https://at.alicdn.com/t/font_3164615_chbhzbp18p.css");
h1,h2,h3,h4,h5,h6,ul{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
  min-width: 1116px;
}
.toolbar_input > .el-input__inner{
  height: 28px;
  border-radius: 20px;
}
.toolbar_active{
border-top: 2px solid rgb(64,158,255);
}
.Comment_box > .v-md-editor > .v-md-editor__right-area > .v-md-editor__main > .v-md-editor__preview-wrapper{
  display: none !important;
}
ul{
  list-style:none;
}
i ,em{font-style:normal }
#app{
  min-width: 1280px;
}
</style>
