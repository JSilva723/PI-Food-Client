import { Cards } from './Cards';
import { Header } from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getItems } from '../../actions';
import { useEffect, useState } from 'react';
import { Error } from '../error/Error';

export const Main = () => {

  const recipes = useSelector((state) => state.items);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [pageSelected, setPageSelected] = useState(1);

  // Get items at mount the component
  useEffect(() => {
    dispatch(getItems());
    return dispatch(clearError());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      {error && <Error error={error}/>}
      <Cards items={recipes} filter={filterBy} order={orderBy} pageSelected={pageSelected} setPageSelected={setPageSelected} />
    </>
  );
};