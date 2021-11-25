import s from './check.module.css';

export const Check = ({ inputsTypes, types, type, setInputs, title }) => {

    // Set the check type inputs
    const handleSelect = (e) => {
      // Check if the value is
      if (inputsTypes.includes(e.target.value)) {
        // Remove the array
        const filterTypes = inputsTypes.filter(type => type !== e.target.value);
        // Set state - Remove type
        setInputs(prev => ({
          ...prev,
          [type]: [...filterTypes]
        }));
      } else {
        // Set state - Add type
        setInputs(prev => ({
          ...prev,
          [type]: [...inputsTypes, e.target.value]
        }));
      }
    };

  return (
    <div className={s.container}>
      <p className={s.title}>{title} {type.slice(0,type.length - 1)}.</p>
      <div className={s.grid}>
      {
        types && types.map(type => {
          return (
            <div key={type}>
              <label className={ inputsTypes.includes(type) ? s.active : s.label}>
                {type}<input name={type} type="checkbox" value={type} onChange={handleSelect} className={s.check}/>
              </label>
            </div>
          );
        })
      }
      </div>
    </div>
  );
};
