import axios, { Axios } from "axios";

const useApi = ()=>{
    const baseApiUrl = 'https://ecommerce-api.udemig.dev/api/v2/'

    axios.defaults.baseApiURL =baseApiUrl
    
    const token = localStorage.getItem('token')
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    }
    return Axios


}

export default useApi