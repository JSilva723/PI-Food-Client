import { 
  REQUEST_FAILED, GET_TYPES, GET_ITEMS, ORDER_BY, FILTER_BY, 
  GET_ITEM_BY_ID, CLEAR_ITEM, CLEAR_ERROR, SET_ITEM 
} from '../actions/types';

const initialState = {
  types: [],
  items: [],
  item: undefined,
  filterBy: 'default',
  orderBy: 'default',
  error: ''
};

const actionsObj = {
  [REQUEST_FAILED]: (state, payload) => ({
    ...state,
    error: payload
  }),
  [CLEAR_ERROR]: (state) => ({
    ...state,
    error: ''
  }),
   [GET_TYPES]: (state, payload) => ({
    ...state,
    types: [...payload]
  }),
  [GET_ITEMS]: (state, payload) => ({
    ...state,
    items: [...payload]
  }),
  [GET_ITEM_BY_ID]: (state, payload) => ({
    ...state,
    item: {...payload}
  }),
  [SET_ITEM]: (state, payload) => ({
    ...state,
    item: payload
  }),
  [CLEAR_ITEM]: (state) => ({
    ...state,
    item: undefined
  }),
  [ORDER_BY]: (state, payload) => ({
    ...state,
    orderBy: payload
  }),
  [FILTER_BY]: (state, payload) => ({
    ...state,
    filterBy: payload
  })
};

export const rootReducer = (state = initialState, action) => {
  if (!actionsObj.hasOwnProperty(action.type)) return state;
  return actionsObj[action.type](state, action.payload);
};
