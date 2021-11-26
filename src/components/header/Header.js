import { Link } from 'react-router-dom';
import { Search } from './Search';
import { Order } from './Order';
import { useHistory } from 'react-router-dom';
import s from './header.module.css';


export const Header = ({setRecipes}) => {

  const { location } = useHistory();

  return (
    <header className={s.container}>
      {location.pathname.includes('main')
        ? <div className={s.responsive}>
              <Search setRecipes={setRecipes}/>
              <Link to="/create" className={s.link}>Create Recipe</Link>
            <div>
              <Order />
            </div>
          </div>
        : <Link to="/main" className={s.link}>Main</Link>
      }
    </header>
  );
};