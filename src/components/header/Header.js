import { Link } from 'react-router-dom';
import { Search } from './Search';
import { Order } from './Order';
import { useHistory } from 'react-router-dom';
import s from './header.module.css';


export const Header = ({setRecipes, setPageSelected, setOrder, setError}) => {

  const { location } = useHistory();

  return (
    <header className={s.container}>
      {location.pathname.includes('main')
        ? <div className={s.responsive}>
              <Search setRecipes={setRecipes} setPageSelected={setPageSelected} setError={setError}/>
              <Link to="/create" className={s.link}>Create Recipe</Link>
            <div>
              <Order setOrder={setOrder}/>
            </div>
          </div>
        : <Link to="/main" className={s.link}>Main</Link>
      }
    </header>
  );
};