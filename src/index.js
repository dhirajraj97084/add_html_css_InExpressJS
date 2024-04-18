const express=require('express');
const path=require('path');
const app=express();
const port=8082;

//set hbs dynamic text
app.set('view engine' , 'hbs');

app.get('',(req,res)=>{
   res.render('index');
})

//app.use(express.static(path.join(__dirname,'../public')))

 app.get('/about',(req,res)=>{
    res.send('hello');
})

app.listen(port,(err)=>{
    console.log('yyour application is running successfully');
})

