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
    <div class="music-list">
      <span class="songlist-name">歌曲</span>
      <span class="songlist-author">歌手</span>
      <span class="songlist-time">时长</span>
    </div>
    <div class="music-table">
      <!-- <el-table :data="songsData" stripe style="width: 100%">
        <el-table-column show-overflow-tooltip v-for="item in songsData" :key="item.name" :label="item.label"
          :width="item.width ? item.width : 125">
          <template>
            <span style="margin-left:10px">{{scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
      </el-table> -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>


<script >
import {
  SuccessFilled,
  CirclePlus,
  Download,
  Delete,
  FolderDelete,
} from "@element-plus/icons-vue";
import { getPlayList } from "../../api/data";

// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]

export default {
  components: {
    CirclePlus,
    Download,
    Delete,
    FolderDelete,
    SuccessFilled
  },
  mounted () {
    getPlayList()
      .then(({ data: res }) => {
        // this.songsData = res.songs
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
</style>