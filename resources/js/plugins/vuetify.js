import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

const vuetify = new Vuetify()
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes:{
      light: {
        primary: '#A176FB',
        info: '#3BBBFB',
        error: '#fa4b50',
        warning: '#ffb531',
        success: '#55ca25',
        secondary: '#8A8D93',
        pastel: '#F4EAE4',
      }
    }
    
  }
})