import { useState, useEffect } from 'react'
import GetPosts from '../api/getPosts'
import HomeTemplate from '../templates/Home'

const Home = () => {

    const [posts, setPosts] = useState([])
    const [error,setError] = useState('')

    useEffect(() => {
        GetPosts().then(posts => {
            setPosts(posts.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    console.log(posts)
    return (
        
            <HomeTemplate />
        
    )
}

export default Home