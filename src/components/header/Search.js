import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearError, getItems } from '../../actions';
import { REQUEST_FAILED } from '../../actions/types';
import { Service } from '../../utils/service';
import s from './search.module.css';

const api = new Service();

export const Search = ({setRecipes}) => {

  const [input, setInput] = useState('');
  const discpatch = useDispatch();
  const [show, setShow] = useState(true);


  const handleSearch = () => {
    if (input !== '') {
      api.getItems(input)
        .then(response => {
          setRecipes(response.data);
          setInput('');
          setShow(false);
          discpatch(clearError());
        })
        .catch(err => discpatch({ type: REQUEST_FAILED, payload: err.data}));
    }
  };

  const handleTrash = () => {
    api.getItems()
      .then(response => {
        setShow(true);
        setRecipes(response.data);
        discpatch(clearError());
      })
      .catch(err => discpatch({type: REQUEST_FAILED, payload: err.data}));
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