import { CardDetail } from '../detail/CardDetail';
import { Header } from '../header/Header';
import { Form } from './Form';
import { Error } from '../error/Error';
import { useEffect, useState } from 'react';
import { Service } from '../../utils/service';
const api = new Service();

export const Create = () => {

  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);
  const [list, setList] = useState({diets: [], meals: []});

  useEffect(() => {
    api.getTypes()
      .then(response => setList(response.data))
      .catch(err => setError(err.data));
  },[]); // eslint-disable-line
  return (
    <>
      <Header />
      {error && <Error error={error}/>}
      {item
        ? <CardDetail item={item} />
        : <Form listTypes={list} setItem={setItem} error={error} setError={setError}/>
      }
    </>
  );
};
