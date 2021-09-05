import { put, takeEvery, call } from 'redux-saga/effects';
import {
  setCustomersFailure,
  setCustomersStart,
  setCustomersSuccess,
} from 'redux/actions/Customer';
import { FETCH_CUSTOMERS } from 'redux/constants/Customer';

const fetchCustomersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users');

function* fetchCustomerWorker() {
  yield put(setCustomersStart());
  try {
    const data = yield call(fetchCustomersFromApi);
    const json = yield call(
      () =>
        new Promise((res) => {
          setTimeout(() => {
            res(data.json());
          }, 2000);
        })
    );
    yield put(setCustomersSuccess(json));
  } catch (e) {
    yield put(setCustomersFailure);
  }
}

export function* customerWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, fetchCustomerWorker);
}
