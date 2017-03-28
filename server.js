var express = require('express');
var fs =require('fs');
var app = express();
app.use(express.static('./'));

app.get('/',function(req,res){
   res.sendFile(__dirname + '/index.html')
})


// gethf hb.json
app.get('/gethf',function(req,res){
    fs.readFile(__dirname + '/public/data/hb.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})

// gethf2 hb2.json
app.get('/gethf2',function(req,res){
    fs.readFile(__dirname + '/public/data/hb2.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})

// getall all.json

app.get('/getall',function(req,res){
    fs.readFile(__dirname + '/public/data/all.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})



// app.get('/life/nanren',function(req,res){
//     fs.readFile(__dirname + '/public/data/life/nanren.json',function(err,data){
//         if(err){
//           console.log(err)
//         }else {
//           res.json(JSON.parse(data))
//         }
//     })
// })

app.listen('3008',function(){
  console.log('server start...3008')
})
