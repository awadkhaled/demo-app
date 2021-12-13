import { Link } from 'react-router-dom'
import ButtonAtom from '../atoms/button'
import { useTranslation } from 'react-i18next'
import Nav from 'react-bootstrap/Navbar'

const NavigationButtons = () => {
    const { t } = useTranslation()
    return (
        <Nav>
            <Link to='/'><ButtonAtom content={ t('home') }/></Link>
            <Link to='/login'><ButtonAtom content={t('login')} /></Link>
            <Link to='/counter'><ButtonAtom content={ t('counter') }/></Link>
        </Nav>
    )
}

export default NavigationButtons