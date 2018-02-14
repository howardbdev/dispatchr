import { GET_USERS_SUCCESS, GET_TRAILS_SUCCESS } from './types'
const BASE_URL = 'http://localhost:3001'

export const fetchUsers = () => dispatch =>
  fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(payload => dispatch({type: GET_USERS_SUCCESS, payload}))
    .catch(console.log)

export const fetchTrails = () => dispatch =>
  fetch(`${BASE_URL}/trails`)
    .then(response => response.json())
    .then(payload => dispatch({type: GET_TRAILS_SUCCESS, payload}))
    .catch(console.log)
