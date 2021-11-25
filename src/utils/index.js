export const filterItems = (array, filter) => {
  // For default return array
  if (filter.toLowerCase() === 'default') return array;
  // Filter by type of diet
  return array.filter(item => item.diets.includes(filter));
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

export const paginate = (number) => {
  // This function receives the total number of pages to be generated and returns an array with the elements from one to the total
  const array = [];
  for (let i=0; i<number; i++){
    array.push(i + 1);
  }
  return array;
};

export function createMarkup(text) {
  // return an objet to dangerouslySetInnerHTML
  return {
     __html: text };
}; 
