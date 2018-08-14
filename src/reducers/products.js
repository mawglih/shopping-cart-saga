import * as R from 'ramda';
import {
  FETCH_PRODUCTS,
} from '../actionTypes';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, type) => {
  switch(type) {
    case FETCH_PRODUCTS:
      const newValue = {title: 'product1', price: '$5.50'};
      return R.merge(newValue, state);
    default:
      return state;
  }
};
