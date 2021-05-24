import axios from "axios"
import { setIsFetching, setRepos } from "../reducers/reposReducer"


export const getRepos = (user)=>{
   return async (dispatch)=>{
      dispatch(setIsFetching(true))
      const response = await axios.get(`https://api.github.com/users/${user}/repos`)
      
      dispatch(setRepos(response.data))
      
      

   }
}