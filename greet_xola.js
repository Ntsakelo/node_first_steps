var chalk = require("chalk");
var greet = require("./greet");
var figlet = require("figlet");
const theMessage = greet("Xola");
figlet(theMessage, function (err, data) {
  if (err) {
    console.log("Something went wrong");
    console.dir(err);
    return;
  }
  var newData = chalk.bgGreen(data);
  console.log(newData);
});
