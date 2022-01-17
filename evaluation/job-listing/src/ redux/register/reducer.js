import { REG_FAILURE,REG_SUCCESS,REG_REQUESt } from "./action";
const initialize  = {
    isLoading :false,
    message:"",
    isError:false
}

export const reducer = (state = initialize,{type,payload})=>{
    switch(type){
        case REG_REQUESt:
            return {
                isLoading : true,
                message :"",
                isError : false
            }
            case REG_SUCCESS:
                return{
                    isLoading:false,
                    message:payload,
                    isError : false
                }
                case REG_FAILURE:
                    return{
                        isLoading:false,
                        message:payload,
                        isError : false
                    }
                    default:
                        return state
    }
}