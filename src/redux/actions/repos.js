import axios from "axios"
import { setFetchingError, setIsFetching, setRepos } from "../reducers/reposReducer"


export const getRepos = (user) => {
   return async (dispatch) => {
      try {
         dispatch(setIsFetching(true))
         const response = await axios.get(`https://api.github.com/users/${user}/repos?per_page=4`)

         dispatch(setRepos(response.data))
         dispatch(setFetchingError(false))
      } catch (error) {
         dispatch(setFetchingError(true))
         dispatch(setIsFetching(false))
      }




   }
}