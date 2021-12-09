import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'

const Input = (props) => <Form.Control
    type={props.type}
    placeholder={props.placeholder} />

export default Input