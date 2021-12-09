import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import Label from '../atoms/label'
import Input from '../atoms/input'

const EmailGroup = () => <Form.Group className="mb-3" controlId="formBasicEmail">
    <Label content={'Email address'} />
    <Input type={'email'} placeholder={'Enter email'} />
</Form.Group>

export default EmailGroup