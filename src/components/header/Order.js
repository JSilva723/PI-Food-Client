import { useDispatch } from "react-redux";
import { orderBy, getItems } from "../../actions";
import s from './order.module.css';

export const Order = () => {
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === 'default') {
      // Set the state
      dispatch(orderBy((e.target.value)));
      // Get items
      dispatch(getItems());
    } else {
      dispatch(orderBy((e.target.value)));
    }
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