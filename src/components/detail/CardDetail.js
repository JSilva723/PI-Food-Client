import {Loading} from '../loading/Loading';

export const CardDetail = ({item}) => {
  return (
    <>
      {!item ?  <Loading />
      : <div>
        <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} />
        {
          item.types.map(type => <span key={type}>{type}</span>)
        }
        <p>Puntuacion: {item.score}</p>
        <p>Nivel de saludable{item.healthScore}</p>
        <p>Resumen:<br />{item.summary}</p>
        <p>{JSON.stringify(item.steps)}</p>
        {
          item.steps.map(step => {
            return (
              <>
                <h3>Paso N° {step.number}</h3>
                <p>{step.step}</p>
                <span>Los ingredientes:</span>
                {
                  step.ingredients.map(ingredient => <span key={ingredient}>{ingredient}</span>)
                }
                <span>Los materiales:</span>
                {
                  step.equipments.map(equipment => <span key={equipment}>{equipment}</span>)
                }
              </>
            );
          })
        }
      </div>
 
      }
    </>
  );
};