const express = require("express");
const bodyparser= require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req,res) => res.sendFile(__dirname + "/index.html"))
// app.post("/", (req,res)=> res.send(req.body))
app.post("/", (req,res)=>{
    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);
    var sum=n1+n2;
    res.send("Your result is "+sum);
})

app.listen(3000, ()=> {
    console.log("Server started on port 3000")
});
