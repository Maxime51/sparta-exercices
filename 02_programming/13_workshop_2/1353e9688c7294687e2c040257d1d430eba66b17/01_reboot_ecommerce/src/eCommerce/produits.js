
let product = [{
  name : "beer",
  price : 4,
  quantity : 100,
  majQuantity : function (keyboard){
    this.quantity = this.quantity - parseInt(keyboard);
  }
},{
  name : "chips",
  price : 2,
  quantity : 25,
  majQuantity : function (keyboard){
    this.quantity = this.quantity - parseInt(keyboard);
  }
},
{
  name : "cheese",
  price : 3,
  quantity : 50,
  majQuantity : function (keyboard){
    this.quantity = this.quantity - parseInt(keyboard);
  }
},
{
  name : "olives",
  price : 1,
  quantity : 200,
  majQuantity : function (keyboard){
    this.quantity = this.quantity - parseInt(keyboard);
  }
},
{
  name : "waterBottle",
  price : 0.5,
  quantity : 1000,
  majQuantity : function (keyboard){
    this.quantity = this.quantity - parseInt(keyboard);
  }
}];




export {product};
