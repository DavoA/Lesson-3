// console.log("Hello Node");

// var os = require("os");
// var message = "The platform is";

// function main(){
//     console.log(message + os.platform())
// }

// main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("<hl>Hello world</h1>");
// });

// app.get("/name/:secondName/:name", function(req,res){
//     var n = req.params.name;
//     var m = req.params.secondName;
//     res.send("<h1>Hello " + m + n +"</h1>");
// });

// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
// });

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.redirect('http://google.com');
});

app.get("/google/:search", function(req,res){
    var n = req.params.search;
    res.send(n);
});

app.listen(3000,function(){
    console.log("Example is running on port 3000");
});