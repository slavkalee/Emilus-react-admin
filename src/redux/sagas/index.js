import { all } from 'redux-saga/effects';
import Auth from './Auth';
import { customerWatcher } from './Customer';

export default function* rootSaga(getState) {
  yield all([Auth(), customerWatcher()]);
}
