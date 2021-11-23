import { GET_ITEMS, ORDER_BY, FILTER_BY, REQUEST_FAILED, CLEAR_ERROR } from '../actions/types';

const initialState = {
  items: [],
  filterBy: 'default',
  orderBy: 'default',
  error: ''
};

const actionsObj = {
  [GET_ITEMS]: (state, payload) => ({
    ...state,
    items: [...payload]
  }),
  [ORDER_BY]: (state, payload) => ({
    ...state,
    orderBy: payload
  }),
  [FILTER_BY]: (state, payload) => ({
    ...state,
    filterBy: payload
  }),
  [REQUEST_FAILED]: (state, payload) => ({
    ...state,
    error: payload
  }),
  [CLEAR_ERROR]: (state) => ({
    ...state,
    error: ''
  })
};

export const rootReducer = (state = initialState, action) => {
  if (!actionsObj.hasOwnProperty(action.type)) return state;
  return actionsObj[action.type](state, action.payload);
};
