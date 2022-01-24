import moment from "moment";

function formatDate(date){
  return moment(date).format("dddd Do MMMM YYYY");

}

function yearsSinceDate(string){
  const numberYears = moment(string, "YYYY").fromNow();
  return parseInt(numberYears.slice(0,2));
}

function daysSinceDate(string){
  const num = moment().diff(string,"days");
  return num;
}

function getDayFromDate(string){
  return moment(string).format("dddd");
}

export {formatDate,yearsSinceDate,daysSinceDate,getDayFromDate};

