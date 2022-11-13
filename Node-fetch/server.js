import fetch from 'node-fetch'
import express from 'express'



const app= express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    next();
})

app.get("/api",async(req,res)=>{
    var myHeaders = new fetch.Headers();
myHeaders.append("apikey", "BxxnI6uRA3TYdvQdupXk5JeuSto3NUm5");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
const response= await fetch("https://api.apilayer.com/fixer/latest?symbols=inr%2Ceur%2Cjpy%2Cmyr%2Cpkr&base=usd", requestOptions)
const json= await response.json();
console.log(json)
res.json(json.rates)

})

app.get("/api/:tofromamount",async(req,res)=>{
    console.log(req.params)
    const tofromamount= req.params.tofromamount.split(",");
    const to=tofromamount[0];
    const from=tofromamount[1];
    const amount= tofromamount[2];
    console.log(to+" "+from+ " "+ amount);
    var myHeaders = new fetch.Headers();
myHeaders.append("apikey", "BxxnI6uRA3TYdvQdupXk5JeuSto3NUm5");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const response= await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
const json= await response.json();
res.json(json.result)
})


app.listen(8080,()=>{
    console.log("server started at 8080");
})