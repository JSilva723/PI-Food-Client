import { useState } from "react";
import s from './steps.module.css';


export const Steps = ({ setInputs, inputsSteps, list, setList }) => {

  const [number, setNumber] = useState(1);
  const [step, setStep] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [equipment, setEquipment] = useState('');
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  const addStep = (e) => {
    e.preventDefault();
    if (step !== '' && list.ingredients.length !== 0 && list.equipments.length !== 0){
      const data = {
        number,
        step: step,
        ingredients: list.ingredients,
        equipments: list.equipments
      };
      setInputs(prev => ({
        ...prev,
        steps: [...prev.steps, data]
      }));
      setStep('');
      setNumber(number + 1);
      setList({ingredients:[], equipments:[]});
    }
  };

  const selectStep = (e) => {
    const index = parseInt(e.target.textContent.split(' n° ')[1]);
    setIdx(index);
    if (show === false) setShow(true);
  };

  const addIngredient = (e) =>{
    e.preventDefault();
    if (ingredient !== '' && !list.ingredients.find(i => i.name === ingredient)) {
      setList(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, {name: ingredient}]
      }));
    }
    setIngredient('');
  };

  const addEquipment = (e) => {
    e.preventDefault();
    if (equipment !== '' && !list.equipments.find(e => e.name === equipment)) {
      setList(prev => ({
        ...prev,
        equipments: [...prev.equipments, {name: equipment}]
      }));
    }
    setEquipment('');
  };

  return (
    <>
    <p className={s.txt}>Los pasos no son requeridos. Para agregarlos correctamente, el campo paso a seguir no debe estar vacio y la lista de ingredientes y la de materiales debe contener al menos un elemento</p>
      <span className={s.nav}>
        <span onClick={() => setShow(false)} className={show === false ? s.marked : s.marker}>Crear</span>
        {inputsSteps.length !== 0
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
              <textarea placeholder=" Paso a seguir" 
                type="text" 
                className={s.textarea} 
                value={step}
                onChange={(e) => setStep(e.target.value)}
              />
              <div className={s.list}>
                <input placeholder="Ingrediente"
                  type="text"
                  className={s.input}
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                />
                <button onClick={addIngredient} className={s.add}>+</button>
              </div>
                <span>Ingredientes: {list.ingredients.map(i => i.name).join(', ')}</span>
              <div className={s.list}>
                <input placeholder="Elemento"
                  type="text"
                  className={s.input}
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                />
                <button onClick={addEquipment} className={s.add}>+</button>
              </div>
              <span>Elementos: {list.equipments.map(e => e.name).join(', ')}</span>
              <button onClick={addStep} className={s.addStep}>Agregar paso</button>
            </>
          : null
        }
        {show === true
          ? <div className={s.preview}>
            <p>Paso n° {inputsSteps[idx - 1].number}:<br/>{inputsSteps[idx - 1].step}</p>
            <p>Ingredientes necesarios: {inputsSteps[idx - 1].ingredients.map(i => i.name).join(', ')}</p>
            <p>Elementos necesarios: {inputsSteps[idx - 1].equipments.map(e => e.name).join(', ')}</p>
            </div>
          : null
        }
      </div>
    </>
  );
};