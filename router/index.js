import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

createApp().use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import('../veiws/Main.vue'),
   }
]

const router = VueRouter.createRouter({
   history: VueRouter.createWebHashHistory(),
   routes
})

export default router