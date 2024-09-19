const fs = require('fs');
const path =require('path');
const http=require('http');

const express = require('express');
const { error } = require('console');
const app = express()

app.use(express.json());

const users=[
  {id:1,name:'Koby'},
  {id:2,name:'Samuel'},
  {id:3,name:'Baruch'},
];

app.get('/users', function (req, res) {
  return res.json(users);
})

app.post('/add-user',(req,res)=>{
  const {name}=req.body;

  if(!name){
    return res.status(400).json({error:'Name is required'});
  }

  const existingUser=user.find(user=>user.name===name);
  if(existingUser){
    return res.status(400).json({error:"name exist"});
  }

  const newUser={
    id: users.length+1,
    name,
  }

  users.push(newUser);

  return res.status(201).json(users);
})


app.listen(3000)
    console.log('server is running on: http://localhost:3000')




