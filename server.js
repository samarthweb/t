var express = require("express"); 
var app = express();
var value = require("./data_prep");
var connect = require("path"); 

var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/", function(req, res){
    let resText = "<h2>Declaration (Instruction: text size in heading 2):</h2> <br>The rest text is displayed in paragraph as shown in screenshot.<br>";
    resText += "<br>I acknowledge the College's academic integrity policy and my own integrity remain in effect whether my work is<br>done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with<br>my classmates... even when no one is watching. I declare I will not break that trust.<br>"; 
    resText += "<br>Name: Samarth Sunilkumar Patel<br><br>Student Number:150061208<br>"; 
    resText += "<br>click<br>"
    resText += "<br>click to see who has the highest GPA<br>"
    res.send(resText);
});



app.get('/cpa', function (req, res) {value.cpa().then((info) => {res.json(info);});
let resText = "<br>click<br>";
res.send(resText);
});

app.get('/highGPA', function (req, res) {value.cpa().then((info) => {res.json(info);});
let resText = "<br>highGPA<br>";
res.send(resText);
});




app.listen(HTTP_PORT, onHttpStart);