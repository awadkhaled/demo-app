import { Button } from 'react-bootstrap'

const ButtonAtom = (props) => <Button
    key={''}
    type={props.type}
    onClick={props.onClick}
    style={props.style}>
    {props.content}
</Button>

export default ButtonAtom