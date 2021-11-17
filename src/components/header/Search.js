import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from '../../actions';
import s from './search.module.css';

export const Search = () => {

  const [input, setInput] = useState('');
  const discpatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (input === '') setShow(false);
    if (show === false) setShow(true);
    discpatch(getItems(input));
    setInput('');
  };
  const handleChange = (e) => setInput(e.target.value);

  return (
    <div>
      <input type="text" placeholder="Ingrese el titúlo..." onChange={handleChange} value={input} className={s.input} />
      <button onClick={handleClick} className={s.button}>Buscar</button>
      <button onClick={handleClick} style={show ? { display: '', marginLeft: '10px' } : { display: 'none' }} className={s.button}>Reset</button>
    </div>
  );
};