var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.static("root"));

let data = fs.readFileSync("./posts.json");
let json = JSON.parse(data)
console.log(json);


app.use(express.json());
//Get method api
app.get("/post",(request,response)=>{
	// json.push({"title":"suhani","desc":"patel"})
	response.send(json);
    // response.send(request.params)
	// response.send(request.query);
   })


//post method api
app.post("/post",(request,response)=>{
	json.push(request.body);
    fs.writeFileSync("./posts.json",JSON.stringify(json,null,2));
    response.send(json);
})


app.listen(3000,()=>{
	console.log("listening on port 3000")});
