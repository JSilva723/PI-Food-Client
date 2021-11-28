import { useState } from 'react';
import { Service } from '../../utils/service';
import s from './search.module.css';

const api = new Service();

export const Search = ({setRecipes, setPageSelected, setError }) => {

  const [input, setInput] = useState('');
  const [show, setShow] = useState(true);


  const handleSearch = () => {
    if (input !== '') {
      api.getItems(input)
        .then(response => {
          setRecipes(response.data);
          setPageSelected(1);
          setInput('');
          setShow(false);
          setError(null);
        })
        .catch(err => setError(err.data));
    }
  };

  const handleTrash = () => {
    api.getItems()
      .then(response => {
        setShow(true);
        setRecipes(response.data);
        setPageSelected(1);
        setError(null);
      })
      .catch(err => setError(err.data));
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