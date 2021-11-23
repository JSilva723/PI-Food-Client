import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearError, getItems } from '../../actions';
import s from './search.module.css';

export const Search = () => {

  const [input, setInput] = useState('');
  const discpatch = useDispatch();
  const [show, setShow] = useState(true);


  const handleSearch = () => {
    if (input !== '') {
      discpatch(getItems(input));
      setInput('');
      setShow(false);
      discpatch(clearError());
    }
  };

  const handleTrash = () => {
    setShow(true);
    discpatch(getItems(''));
    discpatch(clearError());
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div>
      <button onClick={handleSearch} className={s.button}>🔎</button>
      <input type="text" placeholder="Ingrese el titúlo..." onChange={handleChange} value={input} className={s.input} />
      <button onClick={handleTrash} style={show ? { display: 'none' } : null} className={s.button}>🗑️</button>
    </div>
  );
};