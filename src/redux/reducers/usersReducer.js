const SET_USERS = "SET_USERS";

const defaultState = {
  userItems: [],
  isFetching: true,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userItems: action.payload,
      };

    default:
      return state;
  }
}


export const setUsers = (users) =>({type:SET_USERS,payload:users});