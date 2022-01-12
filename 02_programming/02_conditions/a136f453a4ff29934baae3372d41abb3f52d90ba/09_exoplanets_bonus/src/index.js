// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");
const { TestWatcher } = require("jest");
// Your code here:
let canHabitateLife;

/*if(star.spectralClass === "K" || star.spectralClass === "M"){
  
  if(planet.habitalZone){
    if(planet.mass >= "0.32"){ //planete mass > 0.32
      if(planet.mass <= "0.5"){ // planete mass > 0.32 but lower than 0.5
        if(planet.radius >= 1){
          console.log(`radius : ${planet.radius}, mass : ${planet.mass}`);
          if(planet.radius === 1 && planet.mass === 1){
            canHabitateLife = true;
            console.log("terre");
          }else{
            if(planet.rotationStability){
              //console.log(`Spectre : ${star.spectralClass}, Masse : ${planet.mass},Radius: ${planet.radius},Rotation : ${planet.rotationStability},Temperature : ${star.temperature}`);
              canHabitateLife = true;
            }else{
              canHabitateLife = false;
            }
          }
          
        }else{
          //planete mass <= 0.5 but radius < 1
          canHabitateLife = false;
        }
      }else{ // planete mass > 0.5
        if("0.5" <= planet.radius >= "2.5"){
          if(planet.rotationStability){
            //console.log(` boucle planete mass > 0.5 Spectre : ${star.spectralClass}, Masse : ${planet.mass},Radius: ${planet.radius},Rotation : ${planet.rotationStability},Temperature : ${star.temperature}`);
            canHabitateLife = true;
          }else{
            canHabitateLife = false;
          }
        }else{
          canHabitateLife = false;
        }
      }
    }else{ // planete mass < 0.32
      canHabitateLife = false;
    }
  }else{
    canHabitateLife = false;
  }
}else{
  canHabitateLife = false;
}*/

if((star.spectralClass === "K" || star.spectralClass === "M") && planet.rotationStability){ //star K or M spectral and rotation true 
  if(planet.habitalZone){ // compare planet habital true
    //console.log(`boucle habitat ok || habitat : ${planet.habitalZone}, mass : ${planet.mass}, radius : ${planet.radius}`);
    if(planet.mass > "0.32"){ // compare planet mass
      if(planet.mass < "0.5" && planet.radius > 1){ // compare planet mass for exeption
        console.log(`boucle mass 0.5 et radius 1 ok || habitat : ${planet.habitalZone}, mass : ${planet.mass}, radius : ${planet.radius}`);
        canHabitateLife = true;
      }else if(planet.radius < 1){
        canHabitateLife = false;
        
      }else{
        if(planet.radius > 0.5 && planet.radius < 2.5){// compare planet radius
          console.log(`boucle mass 0.32 et radius entre 0.5 et 2.5 ok || habitat : ${planet.habitalZone}, mass : ${planet.mass}, radius : ${planet.radius}`);
          canHabitateLife = true;
        }else{
          canHabitateLife = false;
        }

      }
    }else{

    }
  }else{ // /planet habital false
    canHabitateLife = false;
  }
}else{ // star not M & K
  canHabitateLife = false;
}



// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
