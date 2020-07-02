export const actionCreator = (type) => (payload) => ({ type, payload });

export const SET_VALUE = 'SET_VALUE';
export const SET_VALUES = 'SET_VALUES';

export const setValue = actionCreator(SET_VALUE);
export const setValues = actionCreator(SET_VALUES);

export default {
  setValue,
  setValues,
};
