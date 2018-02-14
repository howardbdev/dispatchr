import { GET_USERS_SUCCESS } from '../actions/types';

export const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
