import { Service } from '../utils/service';
import { 
  REQUEST_FAILED, GET_TYPES, GET_ITEMS, ORDER_BY,
  FILTER_BY, GET_ITEM_BY_ID, CLEAR_ITEM, CLEAR_ERROR 
} from './types';
const api = new Service();


export const getTypes = () => ((dispatch) =>{
  api.getTypes()
    .then(res => {
      if (res.status === 200){
        dispatch({
          type: GET_TYPES,
          payload: res.data
        });
      } else {
        dispatch({
          type: REQUEST_FAILED,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
});

export const getItems = (title) => ((dispatch) =>{
  api.getItems(title)
    .then(res => {
      if (res.status === 200){
        dispatch({
          type: GET_ITEMS,
          payload: res.data
        });
      } else {
        dispatch({
          type: REQUEST_FAILED,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
});

export const orderBy = (attr) => {
  return {
    type: ORDER_BY,
    payload: attr
  };
}; 

export const filterBy = (attr) => {
  return {
    type: FILTER_BY,
    payload: attr
  };
}; 

export const clearItem = () => {
  return {
    type: CLEAR_ITEM,
  };
}; 

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
}; 

export const getItemById = (id) => ((dispatch) =>{
  api.getItemById(id)
    .then(res => {
      if (res.status === 200 ){
        dispatch({
          type: GET_ITEM_BY_ID,
          payload: res.data
        });
      } else {
        dispatch({
          type: REQUEST_FAILED,
          payload: res.data
        });

      }
    })
    .catch(err => {
      dispatch({
        type: REQUEST_FAILED,
        payload: err
      });
    });
});
