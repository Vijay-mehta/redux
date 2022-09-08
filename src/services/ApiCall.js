import axios from "axios"


 const apiCall = async (method,url,values,header={}) =>{
    try {
        let headers = Object.assign({},{
            'x-access-token': `${localStorage.getItem("token")}`,
            "Accpet":"application/Json"
        },header)
        const apiData = {
            method: method,
            url:`${process.env.REACT_APP_BASEURL}${url}`,
            headers:headers,
            data:values
        }
        let res = await axios(apiData)
        return res.data;
    } catch (error) {
        throw error.response.data
    }
    }
    export default apiCall;