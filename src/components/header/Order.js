import { useDispatch } from "react-redux";
import { orderBy, getItems } from "../../actions";

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
    <select onChange={handleChange}>
      <option value="default">Ordenar por</option>
      <option value="upward_score">Ascendente Puntuación</option>
      <option value="falling_score">Descendente Puntuación</option>
      <option value="upward_title">Ascendente Alfabético</option>
      <option value="falling_title">Descendente Alfabético</option>
    </select>
  );
};