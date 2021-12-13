import { axios } from './axios'

/* "testing_email@example.com"  "password"*/

const loginByEmail = async ({email, password}) => {
    const response = await axios.post("/login_by_email", {
        user:{email: email,
        password: password},
        device: { "uid": "3", "token": "i" }
    })
    if (response && response.status === 200) {
        return response.data
    } else {
        throw new Error(response.Error)
    }
}

export default loginByEmail