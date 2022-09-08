
import { ADD_USER } from "../types/user-type";

 export const addUser = (newUser)=>{
    return {type: ADD_USER , payload: newUser}
    
}

