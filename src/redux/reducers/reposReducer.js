const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHONG="SET_IS_FETCHING";
const SET_CURRENT_PAGE ="SET_CURRENT_PAGE";


const defaultState = {
  reposItems: [],
  isFetching: true,
  currentPage:1,
  perPage:4,
  totalCount:0
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        reposItems: action.payload,
        totalCount:action.payload.total_count,
        isFetching:false
      }
    case SET_IS_FETCHONG:
      return{
        ...state,
        isFetching:action.payload
      }
    case SET_CURRENT_PAGE:
      return{
        ...state,
        currentPage:action.payload
      }

    default:
      return state;
  }
}


export const setRepos = (repos) =>({type:SET_REPOS,payload:repos});
export const setIsFetching = (bool) =>({type:SET_IS_FETCHONG,payload:bool});
export const setCurrentPage = (page) =>({type:SET_CURRENT_PAGE,payload:page});