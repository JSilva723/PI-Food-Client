import s from './create.module.css';
import { useEffect, useState } from 'react';
import { Check } from './Check';
import { Steps } from './Steps';
import { validate } from '../../utils/validations';
import { Service } from '../../utils/service';
import { Img } from './Img';
import { Required } from './Required';

const api = new Service();
const DEFAULT_VALUES = {
  title: '',
  score: 0,
  healthScore: 0,
  summary: '',
  diets: [],
  meals: [],
  steps: [],
  img: ''
};

export const Form = ({ listTypes, setItem, error, setError }) => {

  const [inputs, setInputs] = useState(DEFAULT_VALUES);
  const [errorInputs, setErrorInputs] = useState({});
  // State for list to ingredients and equipmen in steps component
  const [list, setList] = useState({ ingredients: [], equipment: [] });

  // Watch inputs for errors
  useEffect(() => {
    setErrorInputs(validate(inputs));
  }, [inputs]);

  // Set inputs other than verification type
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) setError(null); // Clear prev error
    api.insert(inputs)
      .then(response => {
        if (response.status === 200) {
          setItem(response.data);
        } else {
          setError(response.data);
        }
      })
      .catch(err => console.log(err)); // eslint-disable-line
  };
  return (
    <>
      <h1 className={s.title}>Create Recipe</h1>
      <form onSubmit={handleSubmit} className={s.container}>
        <Required inputs={inputs} handleChange={handleChange} error={errorInputs} />
        <Check inputsTypes={inputs.diets} types={listTypes.diets} type={'diets'} setInputs={setInputs} title={'Select at least one type of'}/>
        <Check inputsTypes={inputs.meals} types={listTypes.meals} type={'meals'} setInputs={setInputs} title={'Select a type of'}/>
        <Steps setInputs={setInputs} inputsSteps={inputs.steps} list={list} setList={setList}/>
        <Img inputs={inputs} handleChange={handleChange} />
       {
          // Verify that there are no errors and that there is at least one type
          Object.keys(errorInputs).length === 0 && inputs.diets.length !== 0
            ? <button className={s.submit}>Create</button>
            : null
        } 
      </form>
    </>
  );
};