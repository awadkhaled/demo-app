import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import EmailGroup from '../components/molecules/emailGroup'
import PasswordGroup from '../components/molecules/passwordGroup'
import ButtonAtom from '../components/atoms/button'

const Login = () => {
    return (
        <Form>
            <EmailGroup />
            <PasswordGroup />
            <ButtonAtom type={'submit'} content={'Submit'} />
        </Form>
    )
}

export default Login