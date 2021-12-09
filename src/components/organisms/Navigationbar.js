import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import Header2 from '../atoms/header2'
import NavigationButtons from '../molecules/navigationButtons'
import TranslationButtons from '../molecules/translationButtons'

function Navigationbar() {
    return (
        <Navbar >
            <Header2 content={'Navbar'} />
            <NavigationButtons/>
            <TranslationButtons/>
        </Navbar>
    )
}

export default Navigationbar