const arrayPersons = [{
  name : "Luc",
  role : "Student"
},
{
  name : "Anna",
  role : "Student"
},
{
  name : "Pierre",
  role : "Teacher"
}];
function filteredRoles(arrayPersons,role = "Teacher"){
  // Code the function here.
  const arrayVide = [];
  let  array = [{}];
  if((arrayPersons.filter(index => index.role === role)).length !==  0){
    array = arrayPersons.filter(element => element.role === role);
    return array;
  }else{
    return arrayVide;
  }
}
filteredRoles(arrayPersons,"Teacher");
// Do not remove lines below, it is for tests
module.exports = filteredRoles;
