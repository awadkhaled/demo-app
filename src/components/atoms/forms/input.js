import { Form } from 'react-bootstrap'

const Input = (props) => <Form.Control
    type={props.type}
    placeholder={props.placeholder} 
    onChange={props.onChange}
    value={props.value}
    />

export default Input