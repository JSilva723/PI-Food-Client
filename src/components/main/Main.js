import { Cards } from './Cards';
import { Header } from '../header/Header';
import { useEffect, useState } from 'react';
import { Error } from '../error/Error';

import { Service } from '../../utils/service';
const api = new Service();

export const Main = () => {

  const [filter, setFilter] = useState('default');
  const [order, setOrder] = useState('default');
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [pageSelected, setPageSelected] = useState(1);

  // Get items at mount the component
  useEffect(() => {
    api.getItems('all')
      .then(response => {
        if (response.status === 200) setRecipes(response.data);
        else setError(response.data);
      })
      .catch(err => setError(err.data));
    return () => {
      setError(null);
      setFilter('default');
      setOrder('default');
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header setRecipes={setRecipes} setPageSelected={setPageSelected} setFilter={setFilter} setOrder={setOrder} setError={setError}/>
      {error && <Error error={error}/>}
      <Cards items={recipes} filter={filter} setFilter={setFilter} order={order} pageSelected={pageSelected} setPageSelected={setPageSelected} />
    </>
  );
};