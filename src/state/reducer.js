/* eslint-disable no-case-declarations */
import {
  SET_VALUE,
  SET_VALUES,
} from './actions';

export default (state, { type, payload }) => {
  const key = payload?.key;
  const value = payload?.value;

  switch (type) {
    case SET_VALUE:
      return {
        ...state,
        [key]: value,
      };
    case SET_VALUES:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
