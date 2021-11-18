import { useEffect, useState } from 'react';
import { Check } from './Check';
import { Steps } from './Steps';
import { Service } from '../../utils/service';
import { DEFAULT_VALUES } from '../../utils/index';
import { validate } from '../../utils/validations';
import { Created } from './Created';
import { Header } from '../header/Header';
import s from './create.module.css';
const api = new Service();


export const Create = () => {

  const [inputs, setInputs] = useState(DEFAULT_VALUES);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState({});
  const [list, setList] = useState({ingredients:[], equipments:[]});

  const handleSubmit = (e) => {
    e.preventDefault();
    api.insert(inputs)
      .then(response => {
        if (response.status === 200) {
          setResponse(response.data);
        }
      })
      .catch(err => console.log(err)) // eslint-disable-line
  };

  // Set inputs other than verification type
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Set the check type inputs
  const handleSelect = (e) => {
    // Check if the value is
    if (inputs.types.includes(e.target.value)) {
      // Remove the array
      const filterTypes = inputs.types.filter(type => type !== e.target.value);
      // Set state - Remove type
      setInputs(prev => ({
        ...prev,
        types: [...filterTypes]
      }));
    } else {
      // Set state - Add type
      setInputs(prev => ({
        ...prev,
        types: [...prev.types, e.target.value]
      }));
    }
  };

  // Watch inputs for errors
  useEffect(() => {
    setError(validate(inputs));
  }, [inputs]);

  return (
    <>
      <Header />
      {response ? <Created item={response} setResponse={setResponse} setInputs={setInputs} />
      : <><h1 className={s.title}>Crear Receta</h1>
      <form onSubmit={handleSubmit} className={s.container}>
        <input name="title"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Titúlo..."
          required
          type="text"
          className={s.input}
        />
        {error.title ? <span className={s.error}>{error.title}</span> : <br/>}
        <div className={s.rangeContainer}>
        0 <input name="score"
          value={inputs.score}
          onChange={handleChange}
          required
          type="range" min="0" max="100"
          className={s.range}
          /> 100
        </div>
        {error.score ? <span className={s.error}>{error.score}</span>:<span>Puntuacion: {inputs.score}</span>}
        <div className={s.rangeContainer}>
        0 <input name="healthScore"
          value={inputs.healthScore}
          onChange={handleChange}
          type="range" min="0" max="100"
          className={s.range}
        /> 100
        </div>
        {error.healthScore ? <span className={s.error}>{error.healthScore}</span>:<span>Nivel de saludable: {inputs.healthScore}</span>}
        <textarea name="summary"
          value={inputs.summary}
          onChange={handleChange}
          placeholder="Resumen"
          required
          type="text"
          className={s.textarea}
        />
        {error.summary ? <span className={s.error}>{error.summary}</span>: <br/>}
        <Check handleSelect={handleSelect} inputsTypes={inputs.types} />
        <Steps setInputs={setInputs} inputsSteps={inputs.steps} list={list} setList={setList}/>
        <p className={s.txt}>Por defecto se le asignaremos la imangen, si desea cambiarla ingrese una URL.</p>
        <img src={inputs.img || 'https://spoonacular.com/recipeImages/716426-312x231.jpg'} alt="Recipe" className={s.img}/>
        <input name="img"
          value={inputs.img}
          onChange={handleChange}
          placeholder="URL de la imagen"
          type="text"
          className={s.input}
        />
        {/* The submit button will be shown when the form is completed correctly */}
        {
          // Verify that there are no errors and that there is at least one type
          Object.keys(error).length === 0 && inputs.types.length !== 0
            ? <button className={s.submit}>Crear</button>
            : null
        }
      </form></>}
    </>
  );
};
