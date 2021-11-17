export function Service(){ }

Service.prototype._post = function(url, data){
  /* 
    This function makes a POST query, through the fetch method.
    Receives the URL and the data as parameters. 
    Returns the formatted response 
  */
  return new Promise((resolve, reject) => {
  fetch(url ,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};

Service.prototype._get = function(url){
  /*
    This function makes a GET query, through the fetch method.
    Receives the URL as parameter.
    Returns the formatted response
  */
  return new Promise((resolve, reject) => {
    fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};


Service.prototype.insert = function(data){
  // This function creates an item. Receives the data as parameter.
  return new Promise ((resolve, reject) => {
    this._post('http://localhost:3001/recipes', data)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

Service.prototype.getTypes = function(){
  // This function gets the types
  return new Promise((resolve, reject) => {
    this._get('http://localhost:3001/types')
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

Service.prototype.getItems = function(title){
  // This function gets the items
  return new Promise((resolve, reject) => {
    this._get(`http://localhost:3001/recipes/?title=${title}`)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

Service.prototype.getItemById = function(id){
  // // This function get the item by id
  return new Promise((resolve, reject) => {
    this._get(`http://localhost:3001/recipes/${id}`)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

