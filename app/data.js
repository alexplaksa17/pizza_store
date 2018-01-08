var ingredients={
  dough : [
    {
      id:"wheat",
      name:"Пшеничная основа",
      weight : 200,
      price:25,
      calories: 100
    },
    {
      id:"rye",
      name :"Ржаная основа",
      weight:200,
      price:25,
      calories:100
    }
  ],
  meat:[
    {
      id:"becon",
      name:"Бекон",
      weight:100,
      price:20,
      calories:300
    },
    {
      id:"chicken",
      name:"Курица",
      weight:100,
      price:20,
      calories:300
    },

  ],
  сheese:[
    {
      id:"mozzarella",
      name:"Моцарела",
      weight:100,
      price:15,
      calories:150
    },
    {
      id:"cheddar",
      name:"Чеддер",
      weight:100,
      price:15,
      calories:150
    },
  ],
  sauce:[
    {
      id:"ketchup",
      name:"Кетчуп",
      weight:100,
      price:10,
      calories:20
    },
    {
      id:"garlic",
      name:"Чесночный соус",
      weight:100,
      price:10,
      calories:20
    }
  ]
};
var customRecipe={
  composition:[
  ],
  totalPrice:0,
  totalWeight:0,
  totalCalories:0,

};
var savedRecipes=[
    {
      id:"wheat",
      name:"Пшеничная основа",
      weight : 200,
      price:25,
      calories: 100
    },
    {
      id:"becon",
      name:"Бекон",
      weight:100,
      price:20,
      calories:300
    },
    {
      id:"becon",
      name:"Бекон",
      weight:100,
      price:20,
      calories:300
    },
    {
      id:"mozzarella",
      name:"Моцарела",
      weight:100,
      price:15,
      calories:150
    },
    {
      id:"mozzarella",
      name:"Моцарела",
      weight:100,
      price:15,
      calories:150
    },
    {
      id:"ketchup",
      name:"Кетчуп",
      weight:100,
      price:10,
      calories:20
    }

];
var store={
  ingredients,
  customRecipe
};
module.exports=store;
