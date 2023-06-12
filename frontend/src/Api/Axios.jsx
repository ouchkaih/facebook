import axios from 'axios'


// create axios that accept credentials 
export default axios.create(
    {
        baseURL:"http://localhost:8000",
        withCredentials: true
    }
)