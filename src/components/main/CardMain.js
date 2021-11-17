import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterBy } from '../../actions';
import s from './cardMain.module.css';

export const CardMain = ({img, title, types, id}) => {
  
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
      <span onClick={() => dispatch(filterBy('default'))} className={s.filter}>#todas</span>
      {
        types && types.map(type => <span key={type} onClick={handleFilter} className={s.filter}>#{type}</span>)
      }
      </div>
    </div>
  );
};