import { takeEvery } from 'redux-saga/effects';
import { fetchProductsSaga } from './fetch';
import {
  FETCH_PRODUCTS_START,
} from '../actionTypes';

export function* watchFetch() {
  yield takeEvery(FETCH_PRODUCTS_START, fetchProductsSaga);
}