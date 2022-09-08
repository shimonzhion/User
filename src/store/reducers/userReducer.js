
import { GET_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER } from "../types/user-type"


function userReducer({users},action){

    switch (action.type) {
        case GET_BY_ID:
            return [...users]
        case ADD_USER:
            return {users:[...users, action.payload]}
        case UPDATE_USER:
            let newArray = users.filter((userItem) => {
                userItem.Id == action.payload.Id
            })
            users[users.indexOf(newArray[0])] = action.payload
            return {users:[...users]}
        case DELETE_USER:
            let newUsersArray = users.filter((userItem) => {
                userItem.Id !== action.payload
            })
            return {users:[...newUsersArray]}
        // return newUsersArray
        default:
            return {users}
    }
} 
export default userReducer