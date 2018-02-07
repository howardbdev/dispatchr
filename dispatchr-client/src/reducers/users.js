export const users = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return state;
    default:
      return state;
  }
}
