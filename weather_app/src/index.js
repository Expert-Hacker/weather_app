const express= require('express');
const path=require('path');
const hbs=require('hbs');
const app= express();
// const path_out=path.join(__dirname,'../public')


// app.use(express.static(path_out))
let path_par=path.join(__dirname,'../partials')
hbs.registerPartials(path_par)
console.log(path_par)


app.set('view engine','hbs')
app.get("", function app(req,res){
    res.render('index')
})


app.get("/about", function(req,res){
    res.render("about")
})

app.get("/temp", function(req,res){
    res.render("temp")
})

app.get("*", function(req,res){
    res.render("error")
})



//listening connnection
app.listen(8999, function(){
    console.log("running app")
})