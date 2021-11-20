import s from './create.module.css';

export const Img = ({inputs, handleChange}) => {
  return (
    <>
      <p className={s.txt}>By default we will assign the image, if you want to change it enter a URL.</p>
      <img src={inputs.img || 'https://spoonacular.com/recipeImages/716426-312x231.jpg'} alt="Recipe" className={s.img} />
      <input name="img"
        value={inputs.img}
        onChange={handleChange}
        placeholder="Image url"
        type="text"
        className={s.input}
      />
    </>
  );
};