export const initState= {
email : "",
    password: ""

}

export const loginReducers=(state =initState, action:any)=>
{
    if (action.type === "CHANGEEMAIL") {
        return {
            ...state, email: action.payload
        }
    }
   else if (action.type === "CHANGEPASS") {
        return {
            ...state, password: action.payload
        }
    }


    return state;

}
export  default  loginReducers