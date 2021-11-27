import { CardMain } from './CardMain';
import { filterItems, sortItems } from '../../utils';
import { Loading } from '../loading/Loading';
import { Nav } from './Nav';
import s from './cards.module.css';

export const Cards = ({ items, filter, setFilter, order, pageSelected, setPageSelected }) => {
  
  const limit = 9;
  const start = 0 + limit*(pageSelected - 1);
  const end = limit*pageSelected;
  
  const firstStep = filterItems(items, filter);
  const parseItems = sortItems(firstStep.slice(start, end), order);

  return (
    <>
      {parseItems.length !== 0 && <Nav setPageSelected={setPageSelected} pageSelected={pageSelected} recipes={filter === 'default' ? items : firstStep}/>}
      <div className={parseItems.length !== 0 ? s.container : null}>
        {
          parseItems.length !== 0
          ? parseItems.map(item => <CardMain key={item.id} id={item.id} title={item.title} img={item.img} diets={item.diets} setFilter={setFilter} filter={filter}/>)
          : <Loading />
        } 
      </div>
    </>
  );
};