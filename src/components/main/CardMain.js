import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterBy } from '../../actions';
import s from './cardMain.module.css';

export const CardMain = ({img, title, diets, id, setFilter, filter}) => {
  
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  const handleFilter = (e) => {
    const txt = e.target.textContent;
    const formatTxt = txt.slice(1,txt.length);
    setFilter(formatTxt);
  };

  return (
    <div className={s.container} >
      <img src={img} alt={title} className={s.img}/>
      <h3 onClick={handleClick} className={s.title}>{title}</h3>
      <div className={s.container_filter}>
      <span onClick={() => setFilter('default')} className={ filter === 'default' ? s.filterSelected : s.filter }>#all</span>
      {
        diets && diets.map(diet => <span key={diet} onClick={handleFilter} className={filter === diet ? s.filterSelected : s.filter}>#{diet}</span>)
      }
      </div>
    </div>
  );
};