<template>
<div id="login">
  <el-container>
    <el-header class="cs-iCfMLu">
      <div>
        <router-link class="login_title"  to="/" >
          <span>创世</span>
          <span>V2</span>
        </router-link>
      </div>
    </el-header>
    <el-main class="cs-crHmcD">
      <div class="Login_form">
        <div class="QuickResponse">
          <p class="QuickResponse_title">扫码登陆</p>
          <div class="QuickResponse_img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAYAAAAbWs+BAAAAAXNSR0IArs4c6QAAFntJREFUeF7tXed6G8sOi9//oX0/Jcc32kYUclZ2hPyMZqeAANsWf3x+fn7+yr8gEARuQeAjgrsF5ywSBH4jEMGFCEHgRgQiuBvBzlJBIIILB4LAjQhEcDeCnaWCQAQXDgSBGxGI4G4EO0sFgQguHAgCNyIQwd0IdpYKAhFcOBAEbkQggrsR7CwVBCK4cCAI3IhABHcj2FkqCERw4UAQuBGBluA+Pj6Wb3X/9lC1ZvWm0f6657HKOTpvM7l7r0CuzrW/rrP+87WVTZC9FBs971/BXbGnS2BlP89rRHCPVyYEx+EC/QC9Q/grYkRwR2QUe0ZwOwSQx2S9YCJcT/CJcFtiuo43ES4R7jeTEIEiuG8oOGQ0NnyvMG4nwk3VHW5Kqexdqa82tcVQWo1S3Kl0j7XJCk4yDuqyBOh8YgGBywqsKu4VArnERCRgjbs/xyvSYQWvCI5n6BTXR1PKFd5EIVAEd0wNq2whgvuHBIeiRtXscFNKJVJOkY0lNDKtMs9Uaor2xDaklNsW7pxKhGH5g85f3Tpyg8uyCBfBIXNuf4/garwiuJPu3tTNZNZDIS/DkniVc1Akx+71MWciXN1VZfmD7JMItyNbBHekjNvgUciHxrLpOrJfNQ97TqVxVTW9lAhbptirupR3RA1lDdRBZOsQ1tAKKdHYKdJUNa6yBzfCouhc7cFtnk1hF8GJN6wjuCOdFYfFlgsoailrrmisKesnpdxxRgEvgovg1AgbwTVquI7g2Jqkk5axEQSt4f6OIhM7r+IElfRc2V+aJsBaU/m5UqMoBozgWLnNvXnRqZkiuAjuNwJsiqJECV4K9UjXASlOTskyIrgTe1WgKKRJhKvFOCUqpQvortmxe5VJKA7hLSOca7B9YdvJ8zvt66v9K07GdSRKJFAijEtaZT+K4BSOuHtXrqv204m4G0ey6j6cAmZFmggOv6vG1pgK+VxnFcHVzF/2LGUEpz257xI8Ee7INOUxOZaniXDgWc59aqqkRW5qgYzi1hZ3RKYp4SbC3RjhWG+hjOvUQW5X0F0TPUZ0934eON+95nfEQOEbO1ZxgstqOHazyjiX/CHbH5QjOIVt/NgITnxdiCXiPjX9SQ4gguMFpI58ieDUTb5y/FQ7vzoDMoJb36B52S6lgn+nO8zWwMoaHdyVc68e2+pSrt7c5PwRnIamIgbXIShrRHCa/V4+OoLTTKCIIYLjsU2Ea95eeIYaES8p5fbhZkXUiXAEUVfUFhXB0X0wdz9Vg0URXLU+uwbvS/+MZOedchad2wLK2ZSm1wrcEV5XZ2lFuFUEZ4FXjLufU4k2U6RdYXiE1dTeWbwUm7Bznp0xggPfp++Ae0UqxbgRnP+1rwd2rP0Um7BzRnAXCnAfXdpP54brSlSd+2coinz9jsjGpsNoHsW7u89orrgO2dkVIMJrAvcxTnbeFnAJjgg8drinP1ARwR1Rd5sW7nUR3K9frRougtsicIenRY2Qzh6qGrOKEux1EVwE95sDCkmr6KzM04m4SSnvd3RjWVcnpVRuJrMeUinQOx5zBWlRDeJ2DJVuMErXr6IRchbu3t1mFdoPW5cpeEyJqlqzlVJGcPx9LpQKKgSaIobS5IrgFOlej43giBv4bMcuEQ5/DgJhNN3xVWQy5cgS4U4QSEpZP2b16uwlKeUJaRWjKK1kVgxKbaPstaoNlXlcj4migIulUk+5TR105iqNLSPD7m+QsxxBEY7dj8K1bxHhXJJMEVyZJ4LzP4AUwdUSv62Gi+CQr/37eyLcESvFYSLRs53aq3H7Bhhv2eH7cNUGlU1VY9luWQuUXfrC7h3VHWwaNCm4qvs5RSil2+liqaTDUx1fNt1kz/QY14pwSs6tbCqC+yjhUrKFCO5zg6VSi0VwwvtdiXBHzSpCnUrLULS+8ixofXZeJeuooijaDxtQEuFOkGKNub9UMa5Sk6B12FQ+gju+ZsRi8i0FtyIEd7zOK2oL2tMVbW5Uryh1rJtSViJnHwT4XbMU9TBL9rNshZ0XOU+3rnYFOBrhIjhWbr6n3ZMPESqC4+thJeuI4EBqiNI9Viou0ErUUsZGcHWtivD50RFuRddylVDcaIwMyHZYFayU1EtJBZXU9G5isg7wLG3t4HWVESjdzdK2nddzOqCw10Zw9QPByAG4QpkS7lRGcJeDiuA+6/soE8JVSIEIngi3rZkUbFlbKik3GsvaKxFOtE4VKRVSRHB1w2eKmIp5lTUV+7HZgbTXyZSSbdUir+MeVFl/Cni2C7ivNaZSZcXYnTVZp4RwnaqvKtyV+pzljCLq22o4dvMR3Nx3VCI47c0GxL0fVcNFcNt6szJuJ9ooImMjAZozEW6mNl1247vqciEvk5QS0d/7vSPyCO4bCE7Ja5Xoxz6ShQjE3mdS5ulELbZ+mdrPY6/smkjCr55nav0qECgcRXhd/d6KcBGc/12QO4QbwWFZuE4Zz3w+IoIjPgTLetepyDQ1TwSHZfGjBce2yDuRUanv2PZwZz/YpH9HuHUQex3aC2rZo+u/fmcd0Jng2bQN7ZUVitJLULIOFqvDnJ37cCx4SpNEGYuEEsFt0UQkZkkUwbFIHceNppSJcLUh2EiFHIlr7ggOf6j2GVvWYSv2iOCILy9fGUEBGtVT1RqsUNF+Irh/WHBTuXM1j0KgqhGBCM2mzigysfudbJpUWQe7n72zYPFQHcBUfc7eVlI4imyLzvr1+7IIpxwG1W1XpHEJ85hPSRdYgiGjsPuN4PAb8ayoEJYryqBKfBEcuDm8F6cScRVjK5FIaVoo81ZEYbuCKFtgU2fFeSnZC+s8URBQzrk5c6dLWW3K3VDnoGwEQdH3jnkU0SiEYlObTpRfZVvFObDpJxIu6wAUXJdFuAhui4AS0SI47YtelXDc3zrO3RVgK6WM4CI4l3hKqn42NhFObESwhuqkBOwaSmRi6xyVUEpqozR8yvTm6ZuRKE2cWrM6Z1JKwFil1lFSKAV4diwilEL4q7FojamCvTozSpOuTNrZu7KfKcGxjg9xdEWkXFbDocOwhlCI6I5FhIrg+JdnWbKjDMO1JZqX7ag+5ongdmgq6d5UN89NY5GoFYK5kSARrhbRHp8ILoI7OHBXqKiOZDOQyXlcR+JmU+i6HyW4ypsqNRuKDFcpxBSYKEVh000UGdF+v9ZRorqy96mxSiaBMGEF6O5d4VbHsbH7e8ltAcUIZQEK/lIp671YsM48vbJGBDf3yQfWZhGc+HR+BFffIGaJNzkuEc5HsxXhlEjFPmxaFbWoIXCHN5t6qkFxJKvSc+XeGjsWcYLlAUqrWUzQPKx0FG6Vtu08S4nAvcrPFRBYYB9rKaC4+XoEp6WFbjREHGF5geaJ4ECXkm1gICAjOP8VJZbsZ04wEU4JCzsWJ8LxN06RA3AdiWKDKiVHNEhKWT8YwNq3VcMpBmQNxm6cGTflTZ/XclMkZr/smKozWtXASjrcqaVdvCqnU2GjpI2u/ZBDYm0XwRHfpXQJxN4GYI31NS6C2yIWwQEST3kLRNREOD7lRc5BqdtcB5UIBxjt1g/IuEhIZ56evcYZx+5XcSSd9M45w1kDw60bq1IC7U15UMAVINpD5RCUa52xrZQygqtTm8ogERz+UFAEt2NQBBfBPRBgM4B9lFX4o6yhRB4lK1HmvRqbCEegyBpbMV4iXCIcQb3tEJaIHc9W1Qud7tRU/aKkPWz9onj+Tj1V1TKKQ1C6pjLJ/rtAaeevSOUVZ1quP/loV7UQSzZkELbzuJ9H6bK54CIHxGIQwR1ZEMHdlLsnws09I8o6xLO6zHUWyIGyv0dwEdyBK4lwWgOFFdu+JNk7BCUjUVLlKuVW9r4pOyZTSiVtY+sHxbMpqZj7qFklKqWmrFJedA4lrWbJiNZU6iKXjOxekeAUfFhRdfCJ4Brf0IzgjnJCkZ0VYAQHkFJU7xI1Ee5YwykenCWxYsupzqjS2HJreSXrUDI0FtfDvidTSrYonzKucmhF8Er65LbEVxlXqVEU/DZp0e5bMu5ZOntdURKwkfispmSvHb3xHcF9sLiXb6dPOaQ9MTrzRnBb09rOKhGu13ZPhPM/uZAIR/vnPwOVYpm9j4O2sCKVULyVQhI24qOaaNX+lHkT4f6hCIdEdvW7Sxi03lTq5Rb6aH/u70oDQXEWU/Wxci7F2bPzKvi43PsWNRwLyH6ce2i0XgRXI3QHMVUbofHM73ecK4I7sUQEF8Ghksl19hFcBMc4/82YOyIB2tRbppRujYIMptzXUWqNq7Eoot1h3OocSo3kNnWQTZ73d8dYZBMkSNfW7rzsda0IF8GxMB/HKSlJBKfdulGcl2IH39p/r4zgiD8ukgi3pVoinC+9luCUsK88/1elL8+/ues/5lDSVtYLImGyN8kVQu9Nz+513xRAayp4ufZz09aJsuKsSTJ173jD2cknTVijIOO6BmPXj+D+IKw4QQVb134RHIicboSJ4OqndBR8EuFqkroRf++UFa6XNWQi3BEeF9yklFpzqNMMYquof0pw+0Mjwn2NRx6czZ3Reuw8yHhonatzKfi4xHCvQ2l1tffKfp39sKlox15KaqycBe3p6/dW00QhlJKfs0JBQmDnQWChdSK4v68lKSRVIhyy0aYxUfzt9wgOtOXdG7mTOXgExzdYIrjaNbQiHEtEVNhPzaN4wcojKqRR1nTPifBjvXu1V3TmFXtXamVlfTezWRVxN/aZbJqw5EM1nDsPex1KhRH5ptZx51HSInYNdGaF8KywIzjWOv+Nc40QwYlA74ZHcDV+iXCAMFPCdWmseFp3jcd17jmTUmrYvaXgplrHVfp3VxrEikyJ3Ao+HaGuIF/lANBeq/2wON/hgJQ1lH0va5oohJI2/NTyjeAwchEc/yU1tvbEqF+PiOA66DVSZcUhoajBEkVJnZU1lailjGVNs6KmTYQ7adQkwmFKJsL9wxGO9TSdWgdTTB+BPL97f0a57nnsKnzc/SiIIidYzVVhwF73GKdEUdchKZg8jx1NKSO4rRlcgkdw2hve3+FpJFaAEVzzjW/WyaCaIBGufnwsEe4EAcWjb8Js8cchprzXfrtT6cvzvCidYvFRGhbIs6I9fV2P1pxKvVjHMhXl0bkq+7H2QjYYSykrEiOPHsFtEVLqDsXAERzfNJkSeRmNO89SRnDXojkDnfWYildG4ovgIrgDR5S0UYkEbH3FkvKxcVY0Edy5K0hKqbBth6HiiRWhsHk1SgHco93hAKaEq5zRPReKoit4sMq2Si3v1vnLUsoVQKPaj/WQj3kUMt5dU0ZwWraA7pUip3D1O8snl0sHgXdquAhu7iar2+1UiJAId5TdjxacYnzWIymezSWU4jhQBHYjJZtG3xW5q3Mq0bmDrYIJyyf3XIrdb0spI7gt1IoDUMjl4uzuZy/yCK5RrkymlC4RSo9Q3BSvCmBEEreJo3g6l+CrGgbufhCWirOYiESPOVZETmVOl+u3PdrlAp2U8kgu29jCEz1u6oWchcuDO+b99oJTwGOLUxRBplq1SlqknHNiLDK8Kzhlb240nNqb4mhRplNFYBaTzn42dX0npWQ3u08BFG9Vje0YN4KrrRfB8fW4pIMI7ghXR8gK+FdjE+F6afQKZ5oI17ixjYruCK4m/ApCo7RQscmK/X17wa04tJqaKkba5NnFt+lRjelGuCm8plJBdz+ImGwtj8oO1rbKfhTbsesfHMmqlNI1GDo0a7DHPDYoEZz9kLZCcKU+R/Oy6TkSMuLf1+82tyK4I8SohproeqEUyl0jEU5rdii2dm2yrEvJRjXlkJUncb3eXalp5S0VDFivOxnVFQ+unIW1p7K+grM7b4drEdzg37dWxODWicoaryBUBMdbqPWkiZsWrTCQ6t3vqAUVz8ubrB4ZwWkpJYt7IhzxtS2W8KiQdknMrs8anRnn7rVDqBUO1D0HCgLuvB18lqWUVcr0fFBkIGUsQ8JO9EPXVpFSERxb2+z3M4UlcjpVw4Ct3Vlb7Wts5bpJfCoe2sK9q0upiEgZyxpDAUjxZhGc9uY2ay/kSKp5FP6wolI4UTraCO4IjwJuBBfBsU7kd+TuCE5JJToe6+pAShqkgLIfy6Z7ShStao3OuZQ9KDZho8bU+goG1Vg0z4+KcBGc/3nuCE6LjC7XIrhOqNldi8CcWioRjv9YUiJczbqklIQqI7gITqnrb2uaKGGf4PnvIWMHLR5IRl75jsYIe0sFtczRWa7WQdmCMi97OwStyd6KUOap6vMV/D2UDp2mSVWHKI0H1kD7eyysaLskjeD8Ny+matVOY6TiyYpmUCLc4N8EUDy9G53RdVOe+BWPtylrJsKBkDJFBCW9YqNcZ2+JcIlwiqO9LcKxqSHaPHt/COXuaB1WrJUDUOZg0xdlzqmxCCvWJmg/3w0DdO6v86CsA537//NM1nARXA37dyNblbIp9TlLtn0NPiViZX23txDBnXxCYQoU1nGoho7g+NsLKrbu+H82wrmAKF0uZQ3Fu7JGQVGBnafjOKbOpdS8ypqKjdixLK6P+ZS9KvOye23d+GYXmRznNjCQGKo9usC7wnGvmyRUBDfXKHrmVgRHeIMIbgsSalYRkI4OUeyTCCdCnwhXAzZFqES4bxjhFOOKuvr/cOUJg1XNjud5Fe+u7N0lONpP5f3dm9Ar0u99OozOxdoEzVM1spTIyfK7lVJGcP4rJogIKwilNKBc23ZI6jqAjmOL4HasUMBMhNMe9nYJngjHxrPjuNEI1/Fum07O05P9nUhwNefj/9lUaz9W8fzu3ie7lKwHR+di50Hd4BX3IhXeKam7L6vrKyO4E2wqwiNisqngflmX0B2CK+R39zeF5VRUjeAA4d0ooRBRGRvB+WlrJ1uI4AZfDp0q5t00MYLDT2Akws0kmMtSyqlI0GmasHtAUZStEdj1zkynpHeK6VmhoLpxqsHC7gedsYN1lfajdbu/R3CDD0F3SBDBaTeaO1hHcJ+fG8fBelMUeVijJMLhuoy1CYoAiXCItQWCUx0oJW1UHu2K4OrXYRTyR3DIlXC/v21KuYJsKFJOpTKsI0EUmGoyVet8t70q+1E4grD++j2CI7qtrHeP4I60Uwjutv5Rw+d5XmU/ERz4y6WovX8VYZDBIjitoeESPIIDcfIVNVxlTDdFQl6PnbcT4VhR703SKMFL6yJM2BTKFVFn/hV7n8L5x6WUEdyWilNEULKDjhim6tg76sYVe43giO9cJMJNSeznOospxxbBRXCnalqRlv3kdPjbC67jE9l7ba9odnTOVaUoUzVcJRSFNEp97j4lo+xnKoV062zENZYXyyIcu4GzcRHc9ZM3KEpEcDXzIrgTfCK4CE5x2Er6+08JTgGJHasAVHl/JSVwx6K9ss0XJYqhNdk0VllTafW7WLL8eIy7CwNlT1djR1PKiQ1NGX5viI7hWaEgw7PzKBigNSO4ujM6lYKz3I/gQEp75kGfL1GaHRGc9i0ZlsR3OR12P2WDp/PXc5Tc2d2sAmZSSv+zfUpUTUrpsvnXr1aE85fNlUHgPRGI4N7T7jn1ixCI4F4EfJZ9TwQiuPe0e079IgQiuBcBn2XfE4EI7j3tnlO/CIEI7kXAZ9n3RCCCe0+759QvQiCCexHwWfY9EYjg3tPuOfWLEIjgXgR8ln1PBCK497R7Tv0iBCK4FwGfZd8TgQjuPe2eU78Igf8BbDhNa4AlDbwAAAAASUVORK5CYII=" alt=""> </div>
          <p class="QuickResponse_foot">使用创世V2 APP/小程序</p>
        </div>
        <el-form>
          <el-tabs v-model="activeName" >
            <el-tab-pane label="手机登陆" name="telephone">
              <el-form-item  prop="telephone">
                <div>
                  <div>
                    <el-input class="el_input" type="text" v-model="telephone" placeholder="请输入手机号" autocomplete="off"></el-input>
                  </div>
                </div>
              </el-form-item>
              <el-form-item  prop="code">
                <el-input class="input_code" type="text" v-model="code" placeholder="请输入验证码" autocomplete="off"></el-input>
                <el-button class="btn_code" type="text" :loading="loading" @click="getCode">{{ codetext }}</el-button>
              </el-form-item>
              <p class="usertelephoneerr" v-show="usertelephoneerr">*您输入的手机号码未进行注册*</p>
              <el-checkbox v-model="checked">我已阅读并同意 <a href="" style="text-decoration: none;">服务条款</a>、<a href="" style="text-decoration: none;">隐私政策</a></el-checkbox>
              <p class="usertelephoneerr" v-show="usercheckederr">*请仔细阅读并确认勾选服务条款与隐私政策*</p>
              <el-button type="primary" @click="loginbtn">登陆</el-button>
            </el-tab-pane>
            <el-tab-pane label="扫码登陆" name="QRcode">这是个二维码</el-tab-pane>
          </el-tabs>
        </el-form>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      telephone:'',
      code:'',
      activeName: 'telephone',
      checked: true,
      loading:false,
      codetext:"获取验证码",
      usertelephone:"18650730816",
      usertelephoneerr:false,
      usercheckederr:false,
    };
  },
  methods: {
    getCode(){
      let length = this.telephone.length
      if (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(this.telephone)){
        if (this.telephone != this.usertelephone){
          this.usertelephoneerr = true
        }else{
          this.$message({
            message: '发送成功，请注意查看手机短信',
            type: 'success'
          });
          this.loading = true
          this.codetext = "发送成功"
        }
      }else {
        this.$message.error('请输入正确手机号码');
      }
    },
    loginbtn(){
      let length = this.telephone.length
      this.usercheckederr = false
      if (this.telephone === ''){
        this.$message.error('请输入手机号码');
      }else if(length != 11){
        this.$message.error('请输入正确的手机号码');
      }else if (this.code === ''){
        this.$message.error('请输入验证码');
      }else if(this.checked === false){
        this.usercheckederr = true
      }
    }
  }
}
</script>

<style scoped>
main{
  background: url(https://sx.water-mind.com/cs_devise/static/img/cs-login-bg.c147036c.png) top no-repeat;
}
.el-form{
  background-color: white;
  width: 308px;
  height: 330px;
  padding: 20px;
  border-radius: 0 10px 10px 0;
}
.cs-iCfMLu{
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
  box-sizing: border-box;
  height: 60px;
}
.cs-iCfMLu >div >a{
  text-decoration: none;
}
.cs-crHmcD{
  background-color: rgb(243,243,243);
  min-height: calc(100vh - 60px);
}
.Login_form{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
main.el-main.cs-crHmcD{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input_code{
  position: absolute;
}
.btn_code{
  position: relative;
  right: -212px;
}
button.el-button.btn_code.el-button--default.el-button--mini {
  border: none;
}
button.el-button.el-button--primary {
  width: 100%;
  margin-top: 30px;
}
.usertelephoneerr{
  font-size: 12px;
  color: red;
}
.QuickResponse{
  background-color: white;
  width: 208px;
  height: 330px;
  padding: 20px;
  border-radius: 10px 0 0 10px;
  border-right: 1px solid rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.QuickResponse_img{
  width: 90%;
  height: 55%;
}
.QuickResponse_img > img{
  width: 100%;
  height: 100%;
}
.QuickResponse_title{
  font-weight: 500;
  font-size: 24px;
  color: rgb(24, 24, 24);
}
.QuickResponse_foot{
  font-size: 14px;
  color: rgb(179, 179, 179);
}
.login_title{
  font-size: 18px;
  color: rgb(24, 24, 24);
  display: inline-block;
  padding: 0px 10px;
  margin-top: 15px;
  border-top:none;
}
</style>