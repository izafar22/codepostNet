const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const post=require('../models/post');

const db="mongodb://crazycoder:2709razia@ds235169.mlab.com:35169/codepostnet";

 mongoose.Promise = global.Promise;
 mongoose.connect(db,(err)=>{
  if(err)
  console.log("Error in connection");
 });

 router.get('/posts',function(req,res){
     console.log('Requesting posts');
     post.find({})
          .exec((err,posts)=>{
              if(err)
              console.log("Error getting the posts");
              else{
                  res.json(posts);
              }
          })
 });

 router.get('/details/:id',function(req,res){
    console.log('Requesting post');
    post.findById(req.params.id)
         .exec((err,post)=>{
             if(err)
             console.log("Error getting the post");
             else{
                 res.json(post);
             }
         })
});

 module.exports=router;