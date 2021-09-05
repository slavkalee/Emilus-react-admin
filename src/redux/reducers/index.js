import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Customer from './Customer';

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  customers: Customer,
});

export default reducers;
