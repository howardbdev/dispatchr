import { GET_TRAILS_SUCCESS } from '../actions/types';

export const trails = (state = [], action) => {
  switch (action.type) {
    case GET_TRAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
