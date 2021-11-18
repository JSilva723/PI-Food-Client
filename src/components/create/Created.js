import { CardDetail } from '../detail/CardDetail';
import { DEFAULT_VALUES } from '../../utils/index';
import s from './created.module.css';
import { useHistory } from 'react-router';

export const Created = ({ item, setResponse, setInputs }) => {
  
  const history = useHistory();

  const handleClick = () => {
    setResponse(null);
    setInputs(DEFAULT_VALUES);
    history.push('/main');
  };
  
  return (
    <div className={s.container}>
      <button onClick={handleClick} className={s.button}>Aceptar</button>
      {item.errors
        ? <p>{item.errors[0].message}</p>
        : <CardDetail item={item} />
      }
    </div>
  );
};