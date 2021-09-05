import {
  SET_CUSTOMERS_START,
  SET_CUSTOMERS_SUCCESS,
  SET_CUSTOMERS_FAILURE,
  REMOVE_CUSTOMER,
} from '../constants/Customer';

const initialState = {
  data: [],
  loading: false,
};

const customers = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS_START:
      return { ...state, loading: true };
    case SET_CUSTOMERS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case SET_CUSTOMERS_FAILURE:
      return { ...state, loading: false };
    case REMOVE_CUSTOMER:
      const data = state.data.filter((c) => +c.id !== +action.payload.id);
      return { ...state, data };
    default:
      return state;
  }
};

export default customers;
