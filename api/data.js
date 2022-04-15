import axios from './axios'

export const getPlayList = (param) => {
   return axios.request({
      url: 'http://localhost:3000/artist/top/song?id=6452',
      method: 'post',
      data: param
   })
}