import { Link } from 'react-router-dom';
import { Search } from './Search';
import { Order } from './Order';
import { useHistory } from 'react-router-dom';
import s from './header.module.css';


export const Header = () => {

  const { location } = useHistory();

  return (
    <header className={s.container}>
      <div className={s.theme}>theme</div>
      {location.pathname.includes('main')
        ? <div className={s.responsive}>
              <Search />
              <Link to="/create" className={s.link}>Crear Receta</Link>
            <div>
              <Order />
            </div>
          </div>
        : <Link to="/main" className={s.link}>Principal</Link>
      }
    </header>
  );
};