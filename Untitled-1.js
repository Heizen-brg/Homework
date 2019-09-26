var EventEmiter = require("events");

class Homework extends EventEmiter {
  constructor() {
    super();
    this.count = 0;
  }

  getCount() {
    console.log(this.count)
  }
}

var project = new Homework();

project.on("goPage", function(){
  this.count ++;
})

project.emit("goPage");
project.emit("goPage");
project.getCount();
