import {
  FETCH_CUSTOMERS,
  REMOVE_CUSTOMER,
  SET_CUSTOMERS_FAILURE,
  SET_CUSTOMERS_START,
  SET_CUSTOMERS_SUCCESS,
} from 'redux/constants/Customer';

export const fetchCustomers = () => ({ type: FETCH_CUSTOMERS });

export const setCustomersStart = () => ({
  type: SET_CUSTOMERS_START,
});

export const setCustomersSuccess = (payload) => ({
  type: SET_CUSTOMERS_SUCCESS,
  payload,
});

export const setCustomersFailure = () => ({
  type: SET_CUSTOMERS_FAILURE,
});

export const removeCustomer = (id) => ({
  type: REMOVE_CUSTOMER,
  payload: { id },
});
