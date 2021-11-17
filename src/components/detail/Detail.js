import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearItem, getItemById } from '../../actions';
import { Header } from '../header/Header';
import { CardDetail } from './CardDetail';


export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item);

  // Get item by id at mount the component
  useEffect(() => {
    dispatch(getItemById(id));
    // Clear the item at unmount the component
    return () => dispatch(clearItem());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <CardDetail item={item}/>
    </>
  );
};
