const developer = {
  isCoding: false,
  daysCoding: 0,
  projectStatus: "waiting for a project",
  codeLinesProduced: 0,
  linesNeeded: 0,
  maxDelay: 0,
  initiateProject : function () {
    this.isCoding = true;
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    return this;
  },
  startProject :function (numberOfLines, maximumDelay){
    this.linesNeeded = numberOfLines;
    this.maxDelay = maximumDelay;
    return this;
  },
  mightStop : function () {
    if ((this.linesNeeded === this.codeLinesProduced) && (this.maxDelay > this.daysCoding)){
      this.projectStatus = "project finished";
      this.isCoding = false;
    }else{
      this.projectStatus = "project stopped";
      this.isCoding = false;
    }

  },

  codeForOneDay : function (){
    const number = parseInt(Math.random() * (100 - 1) + 1);
    //if line <= 80

    if((this.codeLinesProduced < 80) && (this.codeLinesProduced > 1)){
      if(number < 10){
        this.daysCoding = this.daysCoding + 3;
        console.log("bug");
      }else{
        this.codeLinesProduced = this.codeLinesProduced + 2;
        this.daysCoding = this.daysCoding + 1;
      }
    }
    //if line between 81 and 150
    else if((this.codeLinesProduced > 80) && (this.codeLinesProduced < 150)){
      if(number <= 20){
        this.daysCoding = this.daysCoding + 3;
      }else{
        this.codeLinesProduced = this.codeLinesProduced + 2;
        this.daysCoding = this.daysCoding + 1;
      }
    }
    //if line > 150
    else{
      if(number <= 40){
        this.daysCoding = this.daysCoding + 3;
      }else{
        this.codeLinesProduced = this.codeLinesProduced + 2;
        this.daysCoding = this.daysCoding + 1;
      }
    }
  }
};
module.exports = {
  developer
};
