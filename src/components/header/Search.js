import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getItems } from '../../actions';
import s from './search.module.css';

export const Search = () => {

  const [input, setInput] = useState('');
  const discpatch = useDispatch();
  const [show, setShow] = useState(true);
  const error = useSelector((state) => state.error);

  const handleSearch = () => {
    if (input !== '') {
      if (error) discpatch(clearError());
      discpatch(getItems(input));
      setInput('');
      setShow(false);
    }
  };

  const handleTrash = () => {
    setShow(true);
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div>
      <button onClick={handleSearch} className={s.button}>🔎</button>
      <input type="text" placeholder="Ingrese el titúlo..." onChange={handleChange} value={input} className={s.input} />
      {!error && <button onClick={handleTrash} style={show ? { display: 'none' } : null} className={s.button}>🗑️</button>}
    </div>
  );
};