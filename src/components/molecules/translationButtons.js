import ButtonAtom from '../atoms/button'
import { useTranslation } from 'react-i18next'

const lngs = {
    en: { nativeName: 'English' },
    ar: { nativeName: 'العربية' }
}

const TranslationButtons = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            {Object.keys(lngs).map((lng) => (
                <ButtonAtom key={lng}
                    style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit"
                    onClick={() => i18n.changeLanguage(lng)}
                    content={lngs[lng].nativeName}
                />
            ))}
        </div>
    )
}

export default TranslationButtons