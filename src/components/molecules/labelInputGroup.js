import { Form } from 'react-bootstrap'
import Label from '../atoms/forms/label'
import Input from '../atoms/forms/input'

const LabelInputGroup = (props) => <Form.Group
    className={props.className}
    controlId={props.controlId}>
    <Label content={props.content} />
    <Input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value }/>
</Form.Group>

export default LabelInputGroup