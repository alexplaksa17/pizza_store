

var store = require("./data");



var reducer = function(state = store, action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
    {
      let selectedIngredient=state.ingredients[action.ingrType][action.index];
      let newComposition = state.customRecipe.composition.concat(state.ingredients[action.ingrType][action.index]);
      let newTotalPrice =  state.customRecipe.totalPrice + selectedIngredient.price;
      let newTotalWeight = state.customRecipe.totalWeight + selectedIngredient.weight;
      let newTotalCalories = state.customRecipe.totalCalories + selectedIngredient.calories;
      return Object.assign({}, state, {
        customRecipe: {
          composition: newComposition,
          totalPrice: newTotalPrice,
          totalWeight: newTotalWeight,
          totalCalories: newTotalCalories,
        }
      });

      break;
    }
    case "DELETE_INGREDIENT":
    {
      let selectedIngredient=state.customRecipe.composition[action.index];
      let newComposition = [...state.customRecipe.composition.slice(0, action.index),
							...state.customRecipe.composition.slice(action.index + 1)];
      let newTotalPrice =  state.customRecipe.totalPrice - selectedIngredient.price;
      let newTotalWeight = state.customRecipe.totalWeight - selectedIngredient.weight;
      let newTotalCalories = state.customRecipe.totalCalories - selectedIngredient.calories;
      return Object.assign({}, state, {
        customRecipe: {
          composition: newComposition,
          totalPrice: newTotalPrice,
          totalWeight: newTotalWeight,
          totalCalories: newTotalCalories,
        }
      });

      break;

    }
    default:
    {
      console.log("default reducer");
      return state;
    }



  }

}
module.exports = reducer;
