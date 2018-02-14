import { combineReducers } from 'redux';
import { users } from './users'
import { trails } from './trails'

const rootReducer = combineReducers({
    users,
    trails
  })

export default rootReducer;
