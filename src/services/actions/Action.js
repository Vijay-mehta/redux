import axios from 'axios'
import {SIGNUP,LOGIN,UPDATE, APIRESPONSE,PASSWORDUPDATE} from '../Constances'
import apiCall from '../ApiCall'



// export const Signupfun = (payload) => async (dispatch) => {
//     try{
//         const signupData = {
//             method: 'POST',
//             url:`${process.env.REACT_APP_BASEURL}/auth/signup`,
//             headers:{
//               authorzation:"take",
//               "Content-Type":"application/Json"
//             },
//             data:payload
//         }
//         const {data} = await axios(signupData)
//        dispatch({
//         type: SIGNUP,
//         payload: data,
//        });
//     }
//     catch(err){
//         console.log(err)
//     }
// }


export const Signupfun = (payload) => async (dispatch) => {

    try{
        let res = await apiCall('POST','/auth/signup',payload)
       dispatch({ type: SIGNUP,payload:res});
    }
    catch(err){
        dispatch({type:APIRESPONSE , payload:err})
        console.log(err, 'This is ERROR')
    }
}





export const loginfun = (payload) => async (dispatch) => {

    try{
        let res = await apiCall('POST','/auth/login',payload)
        console.log("res",res)
        let {token} =  res.data;
       localStorage.setItem("token",token);
       dispatch({ type: LOGIN,payload:res});
    }
    catch(err){
        dispatch({type:APIRESPONSE , payload:err})
        console.log(err, 'This is ERROR')
    }
}



export const authuser = () => async (dispatch) => {

    try{
        let res = await apiCall('post','/auth/profile',{})
       dispatch({ type: LOGIN,payload:res});
    }
    catch(err){
        console.log(err, 'This is ERROR')
    }
}

export const updateProfile = (payload) => async (dispatch) => {

    try{
        let res = await apiCall('POST','/auth/update',payload)
       dispatch({ type: UPDATE,payload:res});
    }
    catch(err){
        dispatch({type:APIRESPONSE , payload:err})
        console.log(err, 'This is ERROR')
    }
}




export const PasswordUpdate = (payload) => async (dispatch) => {

    try{
        let res = await apiCall('POST','/auth/updatePassword',payload)
       dispatch({ type: PASSWORDUPDATE,payload:res});
    }
    catch(err){
        dispatch({type:APIRESPONSE , payload:err})
        console.log(err, 'This is ERROR')
    }
}








