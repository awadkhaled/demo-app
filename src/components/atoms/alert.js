import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'

const AlertAtom = (props) => {
    return (
        <Alert>{props.content}</Alert>
    )
}

export default AlertAtom