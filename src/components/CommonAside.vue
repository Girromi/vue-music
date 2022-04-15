<template>
  <el-col :span="12">
    <span class="mb-2">在线音乐</span>
    <el-menu default-active="1" class="el-menu-vertical-demo" text-color="#bdbdbe" active-text-color="#fff"
      @click="handleClick">
      <el-menu-item index="1">
        <i class="iconfont myIconStyle">&#xe60a;</i>
        <span>推荐</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="iconfont myIconStyle">&#xe61f;</i>
        <span>音乐馆</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont myIconStyle">&#xe66c;</i>
        <span>视频</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont myIconStyle">&#xe636;</i>
        <span>电台</span>
      </el-menu-item>

      <span class="mb-2">我的音乐</span>

      <el-menu-item index="5">
        <i class="iconfont myIconStyle">&#xe86f;</i>
        <span>我喜欢</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="iconfont myIconStyle">&#xe6b9;</i>
        <span>本地歌曲</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="iconfont myIconStyle">&#xe632;</i>
        <span>下载歌曲</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="iconfont myIconStyle">&#xe605;</i>
        <span>最近播放</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
// import { Calendar } from '@element-plus/icons-vue'
export default {
  methods: {

  },
  //   components: {
  //     Calendar
  //   }
}
</script>

<style>
.el-aside {
  width: 186px;
}
.el-col-12 {
  max-width: 100%;
}
.el-menu-item.is-active {
  background-color: #31c27c !important;
}
.el-menu {
  border-right: 0;
  background-color: #fdfdfd;
}
.el-menu-item {
  border-radius: 8px;
  padding: 0px 20px 0px 10px;
  margin-top: 4px;
  height: 46px;
}
.el-menu-item:hover {
  color: #000000;
}
.el-col {
  margin-left: 25px;
  width: 160px;
  background-color: #fdfdfd;
  height: 100vh;
}
.mb-2 {
  margin: 25px 0 10px 10px;
  display: block;
  font-size: 1em;
  text-align: left;
  border-width: 300px;
}
/* .el-menu-vertical-demo{
   background-color: #fff;
} */
span {
  font-size: 16px;
  font-weight: bold;
}
.iconfont {
  margin-right: 6px;
  font-size: 20px;
}
</style>