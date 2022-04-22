import axios from './axios'

export const getData = (param) => {
   const a = axios.request({
      url: `${axios.baseUrl}/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA`,
      method: 'post',
      data: param
   })
   // console.log(a)
   return a
}

export const getMusic = (id) => {
   return axios.request({
      url: `${axios.baseUrl}/song/url?id=${id}`,
      method: 'post'
   })
}

export const searchMusic = (music) => {
   return axios.request({
      url: `${axios.baseUrl}/search?keywords=${music}`,
      method: 'post'
   })
}