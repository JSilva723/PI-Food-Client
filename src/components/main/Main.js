import { Cards } from './Cards';
import { Header } from '../header/Header';
import s from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, clearError } from '../../actions';
import { useEffect, useState } from 'react';

export const Main = () => {

  const recipes = useSelector((state) => state.items);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);

  // Get items at mount the component
  useEffect(() => {
    dispatch(getItems());
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => dispatch(clearError());
  return (
    <>
      <Header />
      {error
        ? <div className={s.loadAndError}>
            {error === 'not found' ? <p>No se encuentra el titúlo</p> : <p>{error}</p>}
            <button onClick={handleClick}>Aceptar</button>
          </div>
        : <Cards items={recipes} filter={filterBy} order={orderBy} index={index} setIndex={setIndex} />
      }
    </>
  );
};