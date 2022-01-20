const humanFactory = (humanData = {}) => {
  // code here
  if(Object.keys(humanData).length === 0){
    //If object null
    const human = {
      firstName : "John", // "Jane"
      lastName : "Doe", // "Doe"
      genre :"male", // "female"
      job : "unemployed", // "unemployed"
      fullname : function (){
        return `${this.firstName} ${this.lastName}`;
      },
      introduction : function (){
        return `Hello! My name is ${this.fullname()}.`;
      } // "Hello! My name is Jane Doe."
    };
    return human;
  }else if(Object.keys(humanData).length === 1 && Object.values(humanData).includes("female")){
    //If object is just genre
    const human = {
      firstName : "Jane", // "Jane"
      lastName : "Doe", // "Doe"
      genre :"female", // "female"
      job : "unemployed", // "unemployed"
      fullname : function (){
        return `${this.firstName} ${this.lastName}`;
      },
      introduction : function (){
        return `Hello! My name is ${this.fullname()}.`;
      },
    };
    return human;
  }else{
    const human = {
      firstName : "John", // "Jane"
      lastName : "Doe", // "Doe"
      genre :"male", // "female"
      job : "unemployed", // "unemployed"
      fullname : function (){
        return `${this.firstName} ${this.lastName}`;
      },
      introduction : function (){
        return `Hello! My name is ${this.fullname()}.`;
      },
      ...humanData
    };return human;
  }
};


const createHumans = (humans) => {
  return humans.map(element => humanFactory(element));
};


module.exports = {
  humanFactory,
  createHumans,
};
