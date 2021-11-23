import s from './error.module.css';
export const Error = ({error}) => {
  
  return(
    <div className={s.container}>
      <p className={s.txt}>{error}</p>
    </div>
  );
};