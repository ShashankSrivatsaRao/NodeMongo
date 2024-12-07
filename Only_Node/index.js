const express=require("express");
const app=express();

app.get("/", (req,res) => {
    res.json({
    "message":"You are visiting Root"
    });
});

app.get("/login", (req,res) => {
    res.json({
    "message":"You are visiting Login"
    });
});

app.get("/logout", (req,res) => {
    res.json({
    "message":"You are visiting LogOut"
    });
});

app.listen(8000,() =>{
    console.log("APP is running at 8000");
});