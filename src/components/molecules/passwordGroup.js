import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import Label from '../atoms/label'
import Input from '../atoms/input'

const PasswordGroup = () => <Form.Group className="mb-3" controlId="formBasicPassword">
    <Label content={'Password'} />
    <Input type={'password'} placeholder={'Password'} />
</Form.Group>

export default PasswordGroup