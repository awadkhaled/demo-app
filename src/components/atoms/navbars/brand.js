import Navbar from 'react-bootstrap/Navbar'

const Brand = ({ content, as, href }) => <Navbar.Brand
    as={as}
    href={href}>
    {content}
</Navbar.Brand>

export default Brand