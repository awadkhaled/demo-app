import ButtonAtom from '../atoms/button'
import { useTranslation } from 'react-i18next'
import Nav from 'react-bootstrap/Navbar'

const lngs = {
    en: { nativeName: 'English' },
    ar: { nativeName: 'العربية' }
}

const TranslationButtons = () => {
    const { t, i18n } = useTranslation()
    return (
        <Nav>
            {Object.keys(lngs).map((lng) => (
                <ButtonAtom key={lng}
                    style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit"
                    onClick={() => i18n.changeLanguage(lng)}
                    content={lngs[lng].nativeName}
                />
            ))}
        </Nav>
    )
}

export default TranslationButtons