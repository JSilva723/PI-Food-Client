// Default values for form to create a new recipe
export const DEFAULT_VALUES = {
  title: '',
  summary: '',
  score: '',
  healthScore: '',
  steps: [],
  img: '',
  types: []
};

export const filterItems = (array, filter) => {
  // For default return array
  if (filter.toLowerCase() === 'default') return array;
  // Filter by type of diet
  return array.filter(item => item.types.includes(filter));
};

export const sortItems = function (array, order_by) {
  // First we separate the direction and the attribute
  const [direction, by] = order_by.split('_');
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 0; i < array.length - 1; i++) {
      // Verificate if direction is upward or falling and 
      if (direction === 'upward') {
        // Compare the item by the attribute
        if (array[i][by] > array[i + 1][by]) { 
          let aux = array[i];
          array[i] = array[i + 1];
          array[i + 1] = aux;
          swaped = true;
        };
      } else {
        // Compare the item by the attribute
        if (array[i][by] < array[i + 1][by]) {
          let aux = array[i];
          array[i] = array[i + 1];
          array[i + 1] = aux;
          swaped = true;
        };
      }
    };
  };
  return array;
};
