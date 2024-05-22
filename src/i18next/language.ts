import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
const Languages: any = ['uz', 'ru', 'en']


i18n.use(Backend)
i18n.use(LanguageDetector)
i18n.use(initReactI18next)
i18n.init({
    fallbackLng: 'uz',
    debug: false,
    whitelist: Languages,
    interpolation: {
        escapeValue: false
    },
    delection: {
        order: ['cookie', 'localStorage'],
        lookupCookie: 'lang',
        lookupLocalStorage: 'lang',
        caches: ['cookie', 'localStorage']
    }
})

export default i18n