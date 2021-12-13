import Navbar from 'react-bootstrap/Navbar'
import Brand from '../atoms/navbars/brand'
import NavigationButtons from '../molecules/navigationButtons'
import TranslationButtons from '../molecules/translationButtons'

function Navigationbar() {
    return (
        <Navbar >
            <Brand content={'Navbar'} />
            <NavigationButtons/>
            <TranslationButtons/>
        </Navbar>
    )
}

export default Navigationbar