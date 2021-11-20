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
  const [index, setIndex] = useState(1);

  // Get items at mount the component
  useEffect(() => {
    if (recipes.length === 0) dispatch(getItems());
    return () => dispatch(clearError());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      {error
        ? <div style={{backgroundColor: 'lightgrey', minHeight: '90vh'}}> <Error /></div>
        : <Cards items={recipes} filter={filterBy} order={orderBy} index={index} setIndex={setIndex} />
      }
    </>
  );
};