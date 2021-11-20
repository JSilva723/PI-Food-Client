import s from './create.module.css';
import { useEffect, useState } from 'react';
import { Check } from './Check';
import { Steps } from './Steps';
import { DEFAULT_VALUES } from '../../utils/index';
import { validate } from '../../utils/validations';
import { Service } from '../../utils/service';
import { useDispatch } from 'react-redux';
import { REQUEST_FAILED, SET_ITEM } from '../../actions/types';
import { clearError } from '../../actions';
import { Img } from './Img';
import { Required } from './Required';

const api = new Service();

export const Form = () => {

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(DEFAULT_VALUES);
  const [error, setError] = useState({});
  const [list, setList] = useState({ ingredients: [], equipment: [] });
  
  // Watch inputs for errors
  useEffect(() => {
    setError(validate(inputs));
  }, [inputs]);

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

  // Set inputs other than verification type
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());
    api.insert(inputs)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SET_ITEM,
            payload: response.data
          });
        } else {
          dispatch({
            type: REQUEST_FAILED,
            payload: response.data
          });
        }
      })
      .catch(err => console.log(err)); // eslint-disable-line
  };
  return (
    <>
      <h1 className={s.title}>Create Recipe</h1>
      <form onSubmit={handleSubmit} className={s.container}>
        <Required inputs={inputs} handleChange={handleChange} error={error}/>
        <Check handleSelect={handleSelect} inputsTypes={inputs.types} />
        <Steps setInputs={setInputs} inputsSteps={inputs.steps} list={list} setList={setList} />
        <Img inputs={inputs} handleChange={handleChange}/>
        {
          // Verify that there are no errors and that there is at least one type
          Object.keys(error).length === 0 && inputs.types.length !== 0
            ? <button className={s.submit}>Create</button>
            : null
        }
      </form>
    </>
  );
};