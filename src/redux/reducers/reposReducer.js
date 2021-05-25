const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHONG = "SET_IS_FETCHING";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";


const defaultState = {
  reposItems: [],
  isFetching: true,
  isFetchingError: false
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        reposItems: action.payload,
        totalCount: action.payload.total_count,
        isFetching: false
      }
    case SET_IS_FETCHONG:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchingError: action.payload
      }

    default:
      return state;
  }
}


export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHONG, payload: bool });
export const setFetchingError = (bool) => ({ type: SET_FETCH_ERROR, payload: bool });