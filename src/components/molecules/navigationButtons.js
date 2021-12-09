import { Link } from 'react-router-dom'
import ButtonAtom from '../atoms/button'
import { useTranslation } from 'react-i18next'

const NavigationButtons = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Link to='/'><ButtonAtom content={ t('home') }/></Link>
            <Link to='/login'><ButtonAtom content={t('login')} /></Link>
            <Link to='/counter'><ButtonAtom content={ t('counter') }/></Link>
        </div>
    )
}

export default NavigationButtons