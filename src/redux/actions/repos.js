import axios from "axios"
import { setRepos } from "../reducers/reposReducer"


export const getRepos = (user)=>{
   return async (dispatch)=>{
      const response = await axios.get(`https://api.github.com/users/${user}/repos`)
      
      dispatch(setRepos(response.data))
      

   }
}