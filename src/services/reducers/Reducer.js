import {SIGNUP,LOGIN,UPDATE,PASSWORDUPDATE,APIRESPONSE} from '../Constances';


const initialState={
    userData:{},
    apiRes:{}
}

export default  (state=initialState,action)=>{
    switch(action.type){
        case SIGNUP:
            return{
                ...state,
                // userData:action.payload,
                apiRes:action.payload
            };
        case LOGIN: 
        
            return{
                ...state,
                userData:action.payload.data,
                apiRes:action.payload

            };
        case UPDATE: 
            return{
                ...state,
                userData:action.payload.data
            };
        case PASSWORDUPDATE: 
            return{
                ...state,
                 userData:action.payload.data,
                apiRes:action.payload
            }
        case APIRESPONSE:
            return {
                ...state,
                apiRes:action.payload
            }

        default:
            return state
    }
};




