import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import esLocale from './es'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  // en: {
  //   ...enLocale,
  //   ...elementEnLocale
  // },
  es: {
    ...esLocale,
    ...elementEsLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh', // set locale
  messages // set locale messages
})

export default i18n
