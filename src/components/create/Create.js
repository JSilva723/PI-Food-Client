import { CardDetail } from '../detail/CardDetail';
import { Header } from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './Form';
import { Error } from '../error/Error';
import { useEffect } from 'react';
import { clearError, clearItem } from '../../actions';

export const Create = () => {

  const error = useSelector((state) => state.error);
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearItem());
      dispatch(clearError());
    };
  },[]); // eslint-disable-line

  return (
    <>
      <Header />
      {error && <Error />}
      {item
        ? <CardDetail item={item} />
        : <Form />
      }
    </>
  );
};
