// Complete and add needed car properties:
const car = {
  speed: 0,
  minutes : 0,
  saveValue:0,
  start: function () {
    this.saveValue = 0;
    return this;
  },
  changeSpeed : function (speed){
    this.speed = speed;
    return this;
  },
  drive : function (minutes) {
    if(this.saveValue === 0){
      this.minutes = minutes;
      this.saveValue = (this.speed*(this.minutes / 60));
    }else{
      this.minutes = minutes;
      this.saveValue = this.saveValue+(this.speed*(this.minutes / 60));
    }

    return this;
  },
  showDistance : function () {
    console.log(`${this.saveValue} Km`);
    return this;
  }
};

car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();



//car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).start().changeSpeed(90).drive(80).showDistance();
module.exports = car;
