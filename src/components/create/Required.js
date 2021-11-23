import s from './create.module.css';

export const Required = ({ inputs, handleChange, error }) => {
  return (
    <>
      <input name="title" value={inputs.title} onChange={handleChange}
        placeholder="Title..." required type="text" className={s.input}
      />
      {error.title ? <span className={s.error}>{error.title}</span> : <br />}
      <div className={s.rangeContainer}>
        0<input name="score" value={inputs.score} onChange={handleChange}
          required type="range" min="0" max="100" className={s.range}
        /> 100
      </div>
      {error.score ? <span className={s.error}>{error.score}</span> : <span>Score: {inputs.score}</span>}
      <div className={s.rangeContainer}>
        0<input name="healthScore" value={inputs.healthScore} onChange={handleChange}
          type="range" min="0" max="100" className={s.range}
        /> 100
      </div>
      {error.healthScore ? <span className={s.error}>{error.healthScore}</span> : <span>Health score: {inputs.healthScore}</span>}
      <br />
      {error.summary ? <span className={s.error}>{error.summary}</span> : <br />}
      <textarea name="summary" value={inputs.summary} onChange={handleChange}
        placeholder="Summary" required type="text" className={s.textarea}
      />
    </>
  );
};