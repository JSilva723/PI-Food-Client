import { useRef, useState } from "react";
import s from './steps.module.css';


export const Steps = ({ setInputs, inputsSteps, list, setList }) => {

  const step = useRef();
  const [number, setNumber] = useState(1);
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const [ingredient, setIngredient] = useState('');
  const [equipment, setEquipment] = useState('');

  const addStep = (e) => {
    e.preventDefault();
    const data = {
      number,
      step: step.current.value,
      ingredients: list.ingredients,
      equipments: list.equipments
    };
    setInputs(prev => ({
      ...prev,
      steps: [...prev.steps, data]
    }));
    step.current.value = '';
    setNumber(number + 1);
    setList({ingredients:[], equipments:[]});
  };

  const selectStep = (e) => {
    const index = parseInt(e.target.textContent.split(' n° ')[1]);
    setIdx(index);
    if (show === false) setShow(true);
  };

  const addIngredient = (e) =>{
    e.preventDefault();
    setList(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, {name: ingredient}]
    }));
    setIngredient('');
  };

  const addEquipment = (e) =>{
    e.preventDefault();
    setList(prev => ({
      ...prev,
      equipments: [...prev.equipments, {name: equipment}]
    }));
    setEquipment('');
  };


  return (
    <>
      <span className={s.nav}>
        <span onClick={() => setShow(false)} className={show === false ? s.marked : s.marker}>Crear</span>
        {inputsSteps.lenght !== 0
            ? inputsSteps.map(step => {
                return (
                  <span key={step.number} 
                    onClick={selectStep}
                    className={show === true && idx === step.number ? s.marked : s.marker}
                  > n° {step.number}</span>
                );
              })
            : null
          }
      </span>
      <div className={s.container}>
        {show === false
          ? <>
              <textarea ref={step} placeholder="Ingrese el paso a seguir" type="text" className={s.textarea} />
              <div className={s.list}>
                <input name="ingredient"
                  placeholder="Ingrediente"
                  type="text"
                  className={s.input}
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                />
                <button onClick={addIngredient} className={s.add}>+</button>
                <span>Ingredientes: {JSON.stringify(list.ingredients)}</span>
              </div>
              <div className={s.list}>
                <input name="equipment"
                  placeholder="Elemento"
                  type="text"
                  className={s.input}
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                />
                <button onClick={addEquipment} className={s.add}>+</button>
                <span>Ingredientes: {JSON.stringify(list.equipments)}</span>
              </div>
              <button onClick={addStep} className={s.add}>Agregar paso</button>
            </>
          : null
        }
        {show === true
          ? <div className={s.preview}>
            <p>Paso n° {inputsSteps[idx - 1].number}:<br/>{inputsSteps[idx - 1].step}</p>
            <p>Ingredientes necesarios son: {inputsSteps[idx - 1].ingredients.join(', ')}</p>
            <p>Materiales necesarios son: {inputsSteps[idx - 1].equipments.join(', ')}</p>
            </div>
          : null
        }
      </div>
    </>
  );
};