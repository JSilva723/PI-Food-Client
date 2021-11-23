import { CardDetail } from '../detail/CardDetail';
import { Header } from '../header/Header';
import { Form } from './Form';
import { Error } from '../error/Error';
import { useEffect, useState } from 'react';
import { Service } from '../../utils/service';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_FAILED } from '../../actions/types';
const api = new Service();

export const Create = () => {

  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const [list, setList] = useState({diets: [], meals: []});

  useEffect(() => {
    api.getTypes()
      .then(response => setList(response.data))
      .catch(err => dispatch({ type: REQUEST_FAILED, payload: err.data}));
  },[]); // eslint-disable-line
  return (
    <>
      <Header />
      {error && <Error error={error}/>}
      {item
        ? <CardDetail item={item} />
        : <Form listTypes={list} setItem={setItem}/>
      }
    </>
  );
};
