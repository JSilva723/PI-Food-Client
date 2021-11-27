
import s from './order.module.css';


export const Order = ({setOrder}) => {
  

  const handleChange = (e) => {
    setOrder(e.target.value);
  };
  
  return (
    <select onChange={handleChange} className={s.select}>
      <option value="default">Order By</option>
      <option value="upward_score" >Ascending Score</option>
      <option value="falling_score">Descending Score</option>
      <option value="upward_title">Ascending Alphabetical</option>
      <option value="falling_title">Descending Alphabetical</option>
    </select>
  );
};