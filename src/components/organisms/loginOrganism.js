import { Form } from 'react-bootstrap'
import LabelInputGroup from '../molecules/labelInputGroup'
import ButtonAtom from '../atoms/button'

const Login = ({ setEmail, setPassword, onSubmit}) => {

    return (
        <Form onSubmit={onSubmit}>
            <LabelInputGroup className="mb-3" controlId="formBasicEmail" type="email" placeholder="Enter email" content="Email address" onChange={(e) => setEmail(e.target.value)} />
            <LabelInputGroup className="mb-3" controlId="formBasicPassword" type="password" placeholder="Password" content="Password" onChange={(e) => setPassword(e.target.value)}  />
            <ButtonAtom type={'submit'} content={'Login'} />
        </Form>
    )
}

export default Login