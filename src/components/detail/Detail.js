import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../header/Header';
import { CardDetail } from './CardDetail';
import { Error } from '../error/Error';
import { Service } from '../../utils/service';
import { useState } from 'react';
const api = new Service();

export const Detail = () => {

  const { id } = useParams();
  const [item, setItem] = useState();
  const [error, setError] = useState(null);
  // Get item by id at mount the component
  useEffect(() => {
    api.getItemById(id)
      .then(response => setItem(response.data))
      .catch(err => setError(err.data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      {error && <Error error={error}/>}
      <CardDetail item={item}/>
    </>
  );
};
