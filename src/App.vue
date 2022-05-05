<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{

  }
}
</script>

<style>
@import url("https://at.alicdn.com/t/font_3164615_6zmh4jtx5my.css");
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
</style>
