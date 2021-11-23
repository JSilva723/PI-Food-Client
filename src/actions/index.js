import { Service } from '../utils/service';
import { REQUEST_FAILED, GET_ITEMS, ORDER_BY, FILTER_BY, GET_ITEM_BY_ID, CLEAR_ERROR } from './types';
const api = new Service();

export const getItems = (title) => ((dispatch) => {
  api.getItems(title)
    .then(res => {
      dispatch({
        type: res.status === 200 ? GET_ITEMS : REQUEST_FAILED,
        payload: res.data
      });
    })
    .catch(err => dispatch({
      type: REQUEST_FAILED,
      payload: err.data
    }));
});

export const getItemById = (id) => ((dispatch) => {
  api.getItemById(id)
    .then(res => dispatch({
      type: res.status === 200 ? GET_ITEM_BY_ID : REQUEST_FAILED,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: REQUEST_FAILED,
      payload: err.data
    }));
});

export const orderBy = (order) => ({ type: ORDER_BY, payload: order });

export const filterBy = (filter) => ({ type: FILTER_BY, payload: filter });

export const clearError = () => ({ type: CLEAR_ERROR, });
