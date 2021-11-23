import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../header/Header';
import { CardDetail } from './CardDetail';
import { Service } from '../../utils/service';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { REQUEST_FAILED } from '../../actions/types';
const api = new Service();

export const Detail = () => {

  const { id } = useParams();
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  // Get item by id at mount the component
  useEffect(() => {
    api.getItemById(id)
      .then(response => setItem(response.data))
      .catch(err => dispatch({type: REQUEST_FAILED, payload: err.data}));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <CardDetail item={item}/>
    </>
  );
};
