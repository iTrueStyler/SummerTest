const SET_REPOS = "SET_REPOS";

const defaultState = {
  reposItems: [],
  isFetching: true,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        reposItems: action.payload,
      };

    default:
      return state;
  }
}


export const setRepos = (repos) =>({type:SET_REPOS,payload:repos});