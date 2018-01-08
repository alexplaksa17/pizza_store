var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions");


class SelectedIngredients extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(props) {

  }
  render(){

    return(
      <div >
        <h3>selected ingredients: </h3>
        <h4>Total Price: {this.props.totalPrice}</h4>
        <h4>Total Weight: {this.props.totalWeight}</h4>
        <h4>Total Calories: {this.props.totalCalories}</h4>
        <ul>
          {this.props.selectedIngredients.map((ingredient,index)=>{
            return(
            <li key={index}>
              {ingredient.name}
              <label onClick={() => {this.props.deleteThisIngredient(ingredient,index)}} className="delete_btn">X</label>
            </li>
            )
          })}
        </ul>
      </div>
    )
  }

};

class ListOfIngredients extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(props) {

  }
  render(){

      var typesOfIngredients=[];
      for(var typeOfIngredient in this.props.ingredients){
        typesOfIngredients.push(typeOfIngredient);
      }
    return(
      <div >
        <h3>List of test ingredients:</h3>
        {typesOfIngredients.map((type,key)=>{return(
          <div>
          <p>{type}</p>
          <ul>
            {this.props.ingredients[type].map((ingredient,index)=>{
              return(
              <li  key={ingredient.id}>
                {ingredient.name}
                <label onClick={() => {this.props.addNewIngredient(ingredient.id,index,type)}} className="add_btn">+</label>
              </li>
              )
            })}
          </ul>
          </div>
          )})}
      </div>
    )
  }

};

class AppView extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
          <div className="container-fluid">
            <div className="row-fluid">
              <div className="col-xs-3">
                <ListOfIngredients {...this.props}/>
              </div>
              <div className="col-xs-6">

              </div>
              <div className="col-xs-3">
                <SelectedIngredients {...this.props}/>
              </div>
            </div>
          </div>
        )
  }
};

function mapStateToProps(state) {
  return {
    ingredients : state.ingredients,
    selectedIngredients: state.customRecipe.composition,
    totalPrice : state.customRecipe.totalPrice,
    totalWeight : state.customRecipe.totalWeight,
    totalCalories: state.customRecipe.totalCalories
  };

};
function mapDispatchToProps(dispatch) {
  return {
    	addNewIngredient: (id,index,ingrType)=> {
    		dispatch(actions.addIngredient(id,index,ingrType));
  	  },
      deleteThisIngredient: (ingredient,index)=> {
    		dispatch(actions.deleteIngredient(ingredient,index));
  	  },

  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppView);
