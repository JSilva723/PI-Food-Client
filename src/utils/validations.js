const re_name = /[0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]/;

export function validate(input) {
  let errors = {};
  if (!input.title) {
    errors.title = '*Title is required';
  } else if (re_name.test(input.title)) {
    errors.title = '*Only letters, semicolons and commas are supported';
  }
  if (!input.summary) {
    errors.summary = '*The summary is required';
  }
  if (!input.score) {
    errors.score = '*Score is required';
  }
  if (!input.healthScore) {
    errors.healthScore = '*Healt score is required';
  }
  return errors;
};