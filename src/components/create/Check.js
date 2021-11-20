import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../actions';
import s from './check.module.css';

export const Check = ({ handleSelect, inputsTypes }) => {

  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  // Check if have the types, at the mount the component
  useEffect(() => {
    if (types.length === 0)dispatch(getTypes());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <p className={s.title}>Select at least one type of diet.</p>
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
    </>
  );
};
