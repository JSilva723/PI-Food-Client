const re_name = /[0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]/;
const re_number = /[A-Za-z_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]/;

export function validate(input) {
  let errors = {};
  if (!input.title) {
    errors.title = '*El titúlo es requerido';
  } else if (re_name.test(input.title)) {
    errors.title = '*Solo se admiten letras, puntos y comas';
  }
  if (!input.summary) {
    errors.summary = '*El resumen es requerido';
  } else if (re_name.test(input.summary)) {
    errors.summary = '*Solo se admiten letras, puntos y comas';
  }
  if (!input.score) {
    errors.score = '*La puntuación es requerida';
  } else if (re_number.test(input.score)) {
    errors.score = '*Debe ser un numero';
  }
  if (!input.healthScore) {
    errors.healthScore = '*El nivel de comida saludable es requerido';
  } else if (re_number.test(input.healthScore)) {
    errors.healthScore = '*Debe ser un numero';
  }
  return errors;
};