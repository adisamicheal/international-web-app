import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const messages = {
    en: {
        message: {
            hello: 'Hello, welcome to the world of internationalization'
        }
    },
    pt: {
        message: {
            hello: 'Olá, bem-vindo ao mundo da internacionalização'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、国際化の世界へようこそ'
        }
    }

}

const i18n = createI18n({
    locale: 'pt', // set locale
    fallbackLocale: 'en', // set fallback locale
    globalInjection: true,
    messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
