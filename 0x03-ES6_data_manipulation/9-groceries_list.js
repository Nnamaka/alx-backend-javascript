const groceriesList = () => {
    
    const res = new Map();
    const groceries = {
      Apples: 10,
      Tomatoes: 10,
      Pasta: 1,
      Rice: 1,
      Banana: 5,
    };

    for (const key of Object.keys(groceries)) {
      res.set(key, groceries[key]);
    }
    return res;
  };
  
  export default groceriesList;