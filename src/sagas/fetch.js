import { instance } from 'api';
import { put } from 'redux-saga/effects';
import * as actions from 'actions';

export function* fetchProductsSaga(action) {
  try {
    const response = yield instance.get(
      'http://localhost:3001/get-items'
    );
    console.log('responce from server: ', response);
    yield put(actions.fetchProducts(response.data))
  } catch(error){
    yield put(actions.fetchProductsFailure());
  }
};