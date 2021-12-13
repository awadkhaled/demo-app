import Navbar from 'react-bootstrap/Navbar'

const Toggle = ({as,label,onClick }) => <Navbar.Toggle
    as={as}
    label={label}
    onClick={onClick}
/>

export default Toggle;