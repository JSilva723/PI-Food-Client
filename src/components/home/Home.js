import { Link } from 'react-router-dom';
import s from './home.module.css';


export const Home = () => {
  return (
    <div className={s.home}>
      <Link to="/main" className={s.link}>Bienvenidos!!!</Link>
    </div>
  );
};