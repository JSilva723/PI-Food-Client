import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterBy } from '../../actions';
import s from './cardMain.module.css';

export const CardMain = ({img, title, diets, id}) => {
  
  const filter_By = useSelector(state => state.filterBy);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  const handleFilter = (e) => {
    const txt = e.target.textContent;
    const formatTxt = txt.slice(1,txt.length);
    dispatch(filterBy(formatTxt));
  };

  return (
    <div className={s.container} >
      <img src={img} alt={title} className={s.img}/>
      <h3 onClick={handleClick} className={s.title}>{title}</h3>
      <div className={s.container_filter}>
      <span onClick={() => dispatch(filterBy('default'))} className={ filter_By === 'default' ? s.filterSelected : s.filter }>#all</span>
      {
        diets && diets.map(diet => <span key={diet} onClick={handleFilter} className={filter_By === diet ? s.filterSelected : s.filter}>#{diet}</span>)
      }
      </div>
    </div>
  );
};