import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import {getCategory} from './apis/testAPI'
// getCategory().then(res => {
//   console.log(res);
  
// })
import { lazyPlugin } from './directives'

// 引入全局组件插件
import { componentPlugin } from '@/components'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(componentPlugin)
app.use(pinia)
app.use(lazyPlugin)

app.use(router)

app.mount('#app')

