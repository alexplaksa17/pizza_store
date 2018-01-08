
var addIngredient=(id,index,ingrType)=>{
  console.log('huy');
  return {
    type:"ADD_INGREDIENT",
    id,
    index,
    ingrType
  }

};
var deleteIngredient=(ingredient,index)=>{
  return {
    type:"DELETE_INGREDIENT",
    ingredient,
    index
  }
};

module.exports = {addIngredient ,deleteIngredient};
