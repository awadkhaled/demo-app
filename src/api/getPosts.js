import { axios } from './axios'

const GetPosts = async () => {
    const response = await axios.get("/home/posts",
        {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })
    if (response && response.status === 200) {
        return response.data
    } else {
        throw new Error(response.Error)
    }
}

export default GetPosts