import { useState, useEffect, useRef } from 'react'
import LoginTemplate from '../templates/LoginTemplate'
import LoginByEmail from '../api/loginByEmail'

/* access_token */

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitClicked, setSubmitClicked] = useState(false)
    const firstUpdate = useRef(true) //to Make the useEffect Hook Not Run on Initial Render

    const onSubmit = (e) => {
        e.preventDefault()
        setSubmitClicked(true)
    }

    useEffect(() => {
        if (firstUpdate.current) {  //to Make the useEffect Hook Not Run on Initial Render
            firstUpdate.current = false
            return
        }
        if (submitClicked) {
            LoginByEmail({ email, password }).then(data => {
                localStorage.setItem('access_token',data.data.user.access_token)
            }).catch(err => {
                console.log(err)
            })
            setSubmitClicked(false)
        }
    }, [submitClicked])

    return (
        <LoginTemplate
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={onSubmit} />
    )
}

export default Login