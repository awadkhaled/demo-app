import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonGroup, Button, Alert } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Counter = ({ counter, increment, decrement, reset }) => {
    const {t} = useTranslation()
    return (
        <div>
            <Alert className="text-center">{counter}</Alert>
            <div className="text-center">
                <ButtonGroup>
                    <Button onClick={increment}>{ t('inrement')}</Button>
                    <Button onClick={decrement}>{t('derement')}</Button>
                    <Button onClick={reset}>{ t('reset')}</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default Counter