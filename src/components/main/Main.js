import { Cards } from './Cards';
import { Header } from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, orderBy, filterBy } from '../../actions';
import { useEffect, useState } from 'react';
import { Error } from '../error/Error';
import { Service } from '../../utils/service';
import { REQUEST_FAILED } from '../../actions/types';

const api = new Service();

export const Main = () => {

  const filter = useSelector(state => state.filterBy);
  const order = useSelector(state => state.orderBy);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  const [pageSelected, setPageSelected] = useState(1);

  // Get items at mount the component
  useEffect(() => {
    api.getItems()
      .then(response => setRecipes(response.data))
      .catch(err => dispatch({type: REQUEST_FAILED, payload: err.data}));
    return () => {
      dispatch(clearError());
      dispatch(orderBy('default'));
      dispatch(filterBy('default'));
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header setRecipes={setRecipes} setPageSelected={setPageSelected}/>
      {error && <Error error={error}/>}
      <Cards items={recipes} filter={filter} order={order} pageSelected={pageSelected} setPageSelected={setPageSelected} />
    </>
  );
};