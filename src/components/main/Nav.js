import s from './nav.module.css';
import { paginate } from '../../utils';

export const Nav = ({index, setIndex, recipes}) => {
  
  const total = Math.ceil(recipes.length/9);
  const pages = paginate(total);

  const handleClick = (e) => { 
    setIndex(parseInt(e.target.textContent));
  };
  
  return (
    <nav>
      <ul className={s.container}>
        {
          pages && pages.map(page => {
            return (
              <li key={page} onClick={handleClick} className={ page === index ? s.active : null}>
                {page}
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

