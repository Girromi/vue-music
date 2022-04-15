<template>
  <div class="l-content">
    <el-icon>
      <arrow-left />
    </el-icon>
    <el-icon>
      <arrow-right />
    </el-icon>
    <el-input class="w-50 m-2" placeholder="搜索音乐、MV、歌单">
      <template #prefix>
        <el-icon class="el-input__icon">
          <search />
        </el-icon>
      </template>
    </el-input>
  </div>
  <div class="r-content">
    <el-dropdown>
      <img src="../assets/user.webp" class="userImg" alt="" vertical-align="middle">
      <span class="el-dropdown-link">
        点击登录
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>评论通知</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-icon>
      <message />
    </el-icon>
    <el-icon>
      <moon />
    </el-icon>
  </div>
</template>

<script>
import { ArrowLeft, ArrowRight, Search, Message, Moon } from '@element-plus/icons-vue'
export default {
  components: {
    ArrowLeft,
    ArrowRight,
    Search,
    Message,
    Moon
  }
}
</script>

<style>
.l-content {
  float: left;
  margin-top: 8px;
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.r-content {
  float: right;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-input__inner {
  border-radius: 20px;
  height: 30px;
}
.el-icon {
  margin: auto 10px;
}
.el-input {
  width: 240px;
  font-size: 10px;
}
.userImg {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.el-dropdown-link {
  margin-right: 20px;
  margin-left: 10px;
}
.el-tooltip__trigger {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
}
</style>