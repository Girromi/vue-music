<template>
  <div class="l-content">
    <el-icon>
      <arrow-left />
    </el-icon>
    <el-icon>
      <arrow-right />
    </el-icon>
    <el-input v-model="musicName" class="w-50 m-2" placeholder="搜索音乐、MV、歌单" @change="search" clearable>
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
import { searchMusic } from '../../api/data'
import vueEvent from '../assets/mitt'
// import format from '../components/CommonContent.vue'
export default {
  components: {
    ArrowLeft,
    ArrowRight,
    Search,
    Message,
    Moon
  },
  methods: {
    addZero (s) {
      return s < 10 ? '0' + s : s
    },
    format (value) {
      let minute = Math.floor(value / 600)
      let second = Math.floor(value % 60)
      return `${this.addZero(minute)}:${this.addZero(second)}`
    },
    search () {
      searchMusic(this.musicName)
        .then(res => {
          let { songs } = res.data.result
          this.songs = songs
          for (let i = 0; i < songs.length; i++) {
            let a = ""
            for (let j = 0; j < songs[i].artists.length; j++) {
              a += songs[i].artists[j].name
              if (j >= 2) {
                a += " ..."
                break;
              }
              if (j + 1 !== songs[i].artists.length) {
                a += " / "
              }
            }
            songs[i].singer = a
          }
          for (let i = 0; i < songs.length; i++) {
            songs[i].time = this.format(songs[i].duration % 3600)
            songs[i].number = i + 1
          }
          vueEvent.emit('search', this.songs)
        })
        .catch(err => {
          console.log('error' + err);
        })
    }
  },
  data () {
    return {
      musicName: '',
      songs: []
    }
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