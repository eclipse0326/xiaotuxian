// 通过插件,把components中的所有组件都进行全局化注册

import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('ImageView',ImageView)
    app.component('XtxSku',XtxSku)
  }
}