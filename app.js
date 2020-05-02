var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.get("/", function(req,res){
    res.render("index");
});
app.get("/diet", function(req,res){
    res.render("diet");
});
app.get("/faq", function(req,res){
    res.render("faq");
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
