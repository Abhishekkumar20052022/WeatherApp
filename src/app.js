const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT||3000;

const static_Path = path.join(__dirname, "../public");
const views_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");


// Set the view engine to Handlebars (hbs)
app.set("view engine", "hbs");

// Set the views directory for Handlebars templates.

app.set("views", views_path);

hbs.registerPartials(partial_path);
//public static path
app.use(express.static(static_Path));

//Routes
app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/about',(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get('*',(req,res)=>{
    res.render("404error",{
        errormsg :"oops ! page Not Found"
    });
})
app.get('/about/*',(req,res)=>{
    res.render("404error",{
        errormsg :"oops ! page Not Found"
    });
})
app.get('/weather/*',(req,res)=>{
    res.render("404error",{
        errormsg :"oops ! page Not Found"
    });
})
app.listen(8000,()=>{
    console.log("server is listening on port 8000");
})