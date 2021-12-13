import { Alert } from 'react-bootstrap'

const AlertAtom = (props) => <Alert
    varient={props.varient}
    transition={props.transition}
    onClose={props.onClose}
    dismissible={props.dismissible}>
    {props.content}
</Alert>

export default AlertAtom