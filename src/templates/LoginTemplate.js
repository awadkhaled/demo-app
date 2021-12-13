import LoginOrganism from '../components/organisms/loginOrganism'

const LoginTemplate = ({ setEmail, setPassword, onSubmit }) =>
    <LoginOrganism
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={onSubmit} />

export default LoginTemplate