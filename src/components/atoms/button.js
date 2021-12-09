import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const ButtonAtom = (props) => {
    console.log(props)
    return (
        <Button
            key={''}
            type={props.type}
            onClick={props.onClick}
            style={props.style}>
            {props.content}
        </Button>

    )
}

export default ButtonAtom