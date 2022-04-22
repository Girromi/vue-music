<template>
  <div style="height:640px">
    <div class="cont-top">
      <a class="mod-btn">
        <el-icon>
          <success-filled />
        </el-icon>
        <span>收藏</span>
      </a>
      <a class="mod-btn">
        <el-icon>
          <circle-plus />
        </el-icon>
        <span>添加到</span>
      </a>
      <a class="mod-btn">
        <el-icon>
          <download />
        </el-icon>
        <span>下载</span>
      </a>
      <a class="mod-btn">
        <el-icon>
          <delete />
        </el-icon>
        <span>删除</span>
      </a>
      <a class="mod-btn">
        <el-icon>
          <folder-delete />
        </el-icon>
        <span>清空列表</span>
      </a>
    </div>
    <!-- <div class="music-list">
      <span class="songlist-name">歌曲</span>
      <span class="songlist-author">歌手</span>
      <span class="songlist-time">时长</span>
    </div> -->
    <div class="music-table">
      <!-- <el-table :data="songsData" stripe style="width: 100%">
        <el-table-column show-overflow-tooltip v-for="item in songsData" :key="item.name" :label="item.label"
          :width="item.width ? item.width : 125">
          <template>
            <span style="margin-left:10px">{{scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table> -->
      <el-table :data="songs" style="width: 100%" @row-click="playMusic" height="800">
        <el-table-column prop="number" label=" " width="40px" />
        <el-table-column prop="name" label="歌曲" min-width="60%" />
        <el-table-column prop="singer" label="歌手" min-width="20%" />
        <el-table-column prop="time" label="时长" min-width="15%" />
        <el-table-column fixed="right" label="移除" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click.prevent="deleteRow(scope.$index)">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script >
import { SuccessFilled, CirclePlus, Download, Delete, FolderDelete } from "@element-plus/icons-vue";
import { getData, getMusic } from "../../api/data";
import vueEvent from '../assets/mitt'

export default {
  components: {
    CirclePlus,
    Download,
    Delete,
    FolderDelete,
    SuccessFilled
  },
  data () {
    return {
      songs: [],
      musicUrl: ""
    }
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
    deleteRow (index) {
      console.log(index)
      this.songs.splice(index, 1)
      for (let i = 0; i < this.songs.length; i++) {
        this.songs[i].number = i + 1
      }
    },
    playMusic (row) {
      // console.log(row.id, event, column)
      getMusic(row.id).then(({ data: res }) => {
        this.musicUrl = res.data[0].url
      })
      vueEvent.emit('go', this.musicUrl)
    }
  },
  mounted () {
    //  console.log("mounted开始")
    //  console.log("mounted开始")
  },
  created () {
    //  console.log("created开始")
    //  console.log(getData)
    getData()
      .then(res => {
        // this.songsData = res.songs
        let { songs } = res.data.result
        //   if (code == 200) {
        //     this.songs = songs
        //   }
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
          //  songs[i].duration % 3600 | this.format
          //  console.log(songs[i].time)
          songs[i].number = i + 1
        }

        //   console.log("res", res);
        //   console.log(songs);
      })
      .catch(err => {
        console.log('error' + err);
      });
    //  console.log("created结束")
    vueEvent.on('search', musicInformation => {
      this.songs = musicInformation
      console.log(this.songs)
    })
  }
};
</script>

<style>
.cont-top {
  height: 40px;
  display: flex;
  justify-content: flex-start;
}
.mod-btn {
  display: inline-block;
  line-height: 38px;
  border: 1px solid #c9c9c9;
  color: #000;
  margin: 1px 10px;
  min-width: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
}
.mod-btn:hover {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
}
.music-list {
  display: flex;
  width: 100%;
  text-align: left;
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid hsla(0, 87%, 48%, 0.1);
}
.songlist-name {
  padding-left: 40px;
  box-sizing: border-box;
  width: 60%;
}
.songlist-author {
  width: 10%;
}
.songlist-time {
  width: 60px;
}
.el-table__row {
  height: 68px;
}
</style>