import { Loading } from '../loading/Loading';
import s from './cardDetail.module.css';
import { createMarkup } from '../../utils';


export const CardDetail = ({ item }) => {

  return (
    <>
      {!item
        ? <Loading />
        : <div className={s.container}>
            <div className={s.uno}>
              <h1 className={s.title}>{item.title}</h1>
              <span>#{item.types.join(' #')}</span>
              <p>Score: {item.score}</p>
              <p>Health score: {item.healthScore}</p>
            </div>
            <div className={s.dos}>
              <img src={item.img} alt={item.title} className={s.img}/>
              <p>Summary:<br/><span dangerouslySetInnerHTML={createMarkup(item.summary)}></span></p>
              <br />
            </div>
            <div className={s.tres}>
            {item.steps.length !== 0 ? <h2 style={{textAlign: 'center'}}>Making</h2> : null }  
            {
              item.steps.map(step => {
                return (
                  <div key={step.number}>
                    <h3>Step N° {step.number}</h3>
                    <p>{step.step}</p>
                    <p>Ingredients required: {step.ingredients.map(i => i.name).join(', ')}</p>
                    <p>Equipment required: {step.equipment.map(e => e.name).join(', ')}</p>
                  </div>
                );
              })
            }
            </div>
          </div>
      }
    </>
  );
};