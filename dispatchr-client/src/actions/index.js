const BASE_URL = 'http://localhost:3001'

export const fetchUsers = () => dispatch =>
  fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(payload => dispatch({type: 'GET_USERS_SUCCESS', payload}))
    .catch(console.log)
