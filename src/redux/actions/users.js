import axios from "axios"
import { setUsers } from "../reducers/usersReducer"

export const getUsers = (user)=>{
   return async (dispatch)=>{
      const response = await axios.get(`https://api.github.com/users/${user}`)
      
      dispatch(setUsers(response.data))
      

   }
}