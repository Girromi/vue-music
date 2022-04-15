import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '../router'
import App from './App.vue'
import '../font_3321632_kmcaxe7917/iconfont.css'
import http from 'axios'

createApp(App).config.globalProperties.$http = http

createApp(App).use(router).use(ElementPlus).use(router).mount('#app')
