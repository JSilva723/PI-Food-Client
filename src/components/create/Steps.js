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
    // Verificate no empty data
    if (step !== '' && list.ingredients.length !== 0 && list.equipment.length !== 0){
      const data = {
        number,
        step: step,
        ingredients: list.ingredients,
        equipments: list.equipments
      };
      // Set states
      setInputs(prev => ({
        ...prev,
        steps: [...prev.steps, data]
      }));
      setStep('');
      setNumber(number + 1);
      setList({ingredients:[], equipment:[]});
    }
  };

  const selectStep = (e) => {
    // Select the number fot to index
    const index = parseInt(e.target.textContent.split('n° ')[1]);
    setIdx(index);
    // Hidden Create inputs
    if (show === false) setShow(true);
  };

  const addIngredient = (e) =>{
    e.preventDefault();
    // Verificate no empty and duplicate
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
    // Verificate no empty and duplicate
    if (equipment !== '' && !list.equipment.find(e => e.name === equipment)) {
      setList(prev => ({
        ...prev,
        equipment: [...prev.equipment, {name: equipment}]
      }));
    }
    setEquipment('');
  };

  return (
    <>
    <p className={s.txt}>Steps are not required. To add them correctly, the step to follow field must not be empty and the list of ingredients and the list of materials must contain at least one element</p>
      <span className={s.nav}>
        <span onClick={() => setShow(false)} className={show === false ? s.marked : s.marker}>Create</span>
        {inputsSteps.length !== 0
            ? inputsSteps.map(step => {
                return (
                  <span key={step.number} 
                    onClick={selectStep}
                    className={show === true && idx === step.number ? s.marked : s.marker}
                  >n° {step.number}</span>
                );
              })
            : null
          }
      </span>
      <div className={s.container}>
        {show === false
          ? <>
              <textarea placeholder=" Step to follow" 
                type="text" 
                className={s.textarea} 
                value={step}
                onChange={(e) => setStep(e.target.value)}
              />
              <div className={s.list}>
                <input placeholder="Ingredient"
                  type="text"
                  className={s.input}
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                />
                <button onClick={addIngredient} className={s.add}>Add</button>
              </div>
                <span>Ingredients: {list.ingredients.map(i => i.name).join(', ')}</span>
              <div className={s.list}>
                <input placeholder="Equipment"
                  type="text"
                  className={s.input}
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                />
                <button onClick={addEquipment} className={s.add}>Add</button>
              </div>
              <span>Equipments: {list.equipment.map(e => e.name).join(', ')}</span>
              <button onClick={addStep} className={s.addStep}>Add step</button>
            </>
          : null
        }
        {show === true
          ? <div className={s.preview}>
            <p>Step n° {inputsSteps[idx - 1].number}:<br/>{inputsSteps[idx - 1].step}</p>
            <p>Ingredients required: {inputsSteps[idx - 1].ingredients.map(i => i.name).join(', ')}</p>
            <p>Equipments required: {inputsSteps[idx - 1].equipment.map(e => e.name).join(', ')}</p>
            </div>
          : null
        }
      </div>
    </>
  );
};