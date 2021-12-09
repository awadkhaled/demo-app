import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import common_ar from "../localization/ar/common.json"
import common_en from "../localization/en/common.json"

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: common_en
            },
            ar: {
                translation: common_ar
            }
        }
    })

export default i18n