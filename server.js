var express = require('express');
var fs =require('fs');
var app = express();
app.use(express.static('./'));

app.get('/',function(req,res){
   res.sendFile(__dirname + '/index.html')
})

app.get('/gethf',function(req,res){
    fs.readFile(__dirname + '/public/data/hb.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})

app.get('/gethf2',function(req,res){
    fs.readFile(__dirname + '/public/data/hb2.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})

app.get('/getall',function(req,res){
    fs.readFile(__dirname + '/public/data/all.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})


app.listen('3002',function(){
  console.log('server start...')
})
