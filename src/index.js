const express=require('express');
const path=require('path');
const app=express();
const port=8082;

app.use(express.static(path.join(__dirname,'../public')))

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(port,(err)=>{
    console.log('yyour application is running successfully');
})

